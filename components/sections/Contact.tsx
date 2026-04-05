"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

const schema = z.object({
  name:    z.string().min(2, "Name must be at least 2 characters"),
  email:   z.string().email("Enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});
type FormData = z.infer<typeof schema>;

const SOCIALS = [
  { icon: Github,   label: "GitHub",   href: SITE_CONFIG.github },
  { icon: Linkedin, label: "LinkedIn", href: SITE_CONFIG.linkedin },
  { icon: Twitter,  label: "Twitter",  href: SITE_CONFIG.twitter },
];

const CONTACT_INFO = [
  { Icon: Mail,   label: "Email",    value: SITE_CONFIG.email,    href: `mailto:${SITE_CONFIG.email}` },
  { Icon: Phone,  label: "Phone",    value: SITE_CONFIG.phone,    href: `tel:${SITE_CONFIG.phone}` },
  { Icon: MapPin, label: "Location", value: SITE_CONFIG.location, href: null },
];

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("send_failed");
      setDone(true);
      reset();
      toast.success("Message sent! I'll be in touch within 24 hours.");
    } catch {
      toast.error("Something went wrong — try emailing me directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Split layout — no section-padding, handled per column */}
      <div className="grid lg:grid-cols-2 lg:min-h-[700px]">

        {/* LEFT HALF — dark with big text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative flex flex-col justify-center px-5 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20"
          style={{ background: "var(--bg)" }}
        >
          {/* Glow */}
          <div
            className="glow-blob w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] opacity-15"
            style={{
              background: "radial-gradient(circle, var(--violet), transparent 70%)",
              top: "50%",
              left: "0",
              transform: "translateY(-50%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-md">
            {/* Section label */}
            <p className="label-mono mb-6">Contact</p>

            {/* Giant headline */}
            <h2
              className="display-text mb-6"
              id="contact-heading"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "var(--text-1)",
                lineHeight: 0.95,
              }}
            >
              Let&apos;s build<br />
              <span className="gradient-text">something.</span>
            </h2>

            <p className="text-base leading-relaxed mb-10" style={{ color: "var(--text-2)" }}>
              Seeking a senior architectural or technical leadership role abroad. Available for full-time, remote, and consulting engagements.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-10">
              {CONTACT_INFO.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded-xl flex-shrink-0"
                    style={{ background: "var(--violet-dim)", border: "1px solid var(--violet-bd)" }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "var(--violet)" }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: "var(--text-3)" }}>{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium transition-colors"
                        style={{ color: "var(--text-2)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--violet)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: "var(--text-2)" }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            {SITE_CONFIG.availableForWork && (
              <motion.div
                className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl mb-8"
                style={{ background: "var(--green-dim)", border: "1px solid var(--green-bd)" }}
                animate={{ boxShadow: ["0 0 0 0 rgba(34,197,94,0)", "0 0 16px 4px rgba(34,197,94,0.1)", "0 0 0 0 rgba(34,197,94,0)"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--green)" }} aria-hidden="true" />
                <span className="text-sm font-medium" style={{ color: "var(--green)" }}>Available Now</span>
                <span className="text-xs" style={{ color: "var(--text-3)" }}>— Remote preferred, open to relocation</span>
              </motion.div>
            )}

            {/* Social links */}
            <div className="flex gap-2">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl transition-all"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-3)" }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--text-1)";
                    e.currentTarget.style.borderColor = "var(--border-lit)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-3)";
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT HALF — slightly lighter, form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col justify-center px-5 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 border-t border-white/[0.09] lg:border-t-0 lg:border-l lg:border-white/[0.09]"
          style={{ background: "var(--bg-2)" }}
        >
          <div className="max-w-md w-full mx-auto">
            {done ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center gap-6 py-16"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: "var(--green-dim)", border: "1px solid var(--green-bd)" }}
                >
                  <CheckCircle2 className="w-8 h-8" style={{ color: "var(--green)" }} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-1)" }}>Message sent!</h3>
                  <p className="text-sm" style={{ color: "var(--text-3)" }}>I&apos;ll get back to you within 24 hours.</p>
                </div>
                <button
                  onClick={() => setDone(false)}
                  className="text-sm font-medium transition-colors"
                  style={{ color: "var(--violet)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--violet)")}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
                aria-label="Contact form"
              >
                <h3
                  className="text-lg font-bold mb-6"
                  style={{ color: "var(--text-1)", fontFamily: "var(--font-bricolage), sans-serif" }}
                >
                  Send a message
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium" style={{ color: "var(--text-3)" }}>Your name</label>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="John Smith"
                      className={cn("input-dark", errors.name && "border-red-500/40")}
                      autoComplete="name"
                    />
                    {errors.name && <p className="text-xs" style={{ color: "#f87171" }}>{errors.name.message}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium" style={{ color: "var(--text-3)" }}>Email address</label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="john@company.com"
                      className={cn("input-dark", errors.email && "border-red-500/40")}
                      autoComplete="email"
                    />
                    {errors.email && <p className="text-xs" style={{ color: "#f87171" }}>{errors.email.message}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium" style={{ color: "var(--text-3)" }}>Subject</label>
                  <input
                    {...register("subject")}
                    type="text"
                    placeholder="Lead Architect Role / Project Inquiry"
                    className={cn("input-dark", errors.subject && "border-red-500/40")}
                  />
                  {errors.subject && <p className="text-xs" style={{ color: "#f87171" }}>{errors.subject.message}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium" style={{ color: "var(--text-3)" }}>Message</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell me about the role, project, or challenge..."
                    className={cn("input-dark resize-none", errors.message && "border-red-500/40")}
                    style={{ color: "var(--text-1)" }}
                  />
                  {errors.message && <p className="text-xs" style={{ color: "#f87171" }}>{errors.message.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full justify-center py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!submitting ? { scale: 1.01 } : undefined}
                  whileTap={!submitting ? { scale: 0.99 } : undefined}
                >
                  {submitting ? (
                    <>
                      <div
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                        aria-hidden="true"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" aria-hidden="true" />
                      Send message
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-center" style={{ color: "var(--text-3)" }}>
                  Your information stays private — always.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
