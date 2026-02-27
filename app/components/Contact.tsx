"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Send, CheckCircle2, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-10"
      style={{ backgroundColor: "var(--paper)" }}
    >
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div
            className="flex items-center gap-4 mb-2"
            style={{ borderTop: "3px solid var(--ink)", paddingTop: "6px" }}
          >
            <span className="kicker">Correspondence</span>
            <span style={{ color: "var(--rule)" }}>·</span>
            <span className="folio">Section V</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "var(--ink)",
              lineHeight: 1.1,
            }}
          >
            Get in Touch
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-0">

          {/* Left: editorial letter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="pr-0 lg:pr-12 mb-10 lg:mb-0"
            style={{ borderRight: "1px solid var(--rule)" }}
          >
            <p
              className="mb-6"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "1.5rem",
                fontStyle: "italic",
                color: "var(--ink)",
                lineHeight: 1.5,
              }}
            >
              &ldquo;Let&apos;s build something meaningful together.&rdquo;
            </p>
            <p
              className="mb-8"
              style={{
                fontFamily: "var(--font-garamond)",
                fontSize: "1.05rem",
                color: "var(--muted)",
                lineHeight: 1.75,
              }}
            >
              Open to research collaborations, global internships,
              and Master&apos;s program opportunities. If you&apos;re working
              on intelligent systems, IoT, or embedded hardware — reach out.
            </p>

            {/* Contact links — editorial table */}
            <div style={{ borderTop: "2px solid var(--ink)" }}>
              {[
                { icon: Mail, label: "Electronic Mail", value: "shahariar0001@std.bdu.ac.bd", href: "mailto:shahariar0001@std.bdu.ac.bd" },
                { icon: Github, label: "GitHub", value: "View repositories", href: "#" },
                { icon: Linkedin, label: "LinkedIn", value: "Professional network", href: "#" },
              ].map(({ icon: Icon, label, value, href }, i) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 py-4 transition-opacity hover:opacity-60"
                  style={{
                    borderBottom: i < 2 ? "1px solid var(--rule)" : "none",
                    textDecoration: "none",
                  }}
                >
                  <Icon size={16} style={{ color: "var(--muted)", flexShrink: 0 }} />
                  <div>
                    <div className="kicker mb-0.5">{label}</div>
                    <div
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.82rem",
                        color: "var(--ink)",
                        fontWeight: 500,
                      }}
                    >
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pl-0 lg:pl-12"
          >
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center py-16 text-center gap-5"
                style={{ border: "1px solid var(--rule)" }}
              >
                <CheckCircle2 size={36} style={{ color: "var(--accent)" }} />
                <h3
                  style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", color: "var(--ink)" }}
                >
                  Message Received
                </h3>
                <p
                  style={{ fontFamily: "var(--font-garamond)", fontSize: "1rem", color: "var(--muted)", maxWidth: "280px" }}
                >
                  Thank you for writing. A reply will follow shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="kicker transition-opacity hover:opacity-60 mt-2"
                  style={{ color: "var(--accent)", textDecoration: "underline", background: "none", border: "none", cursor: "pointer" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-0">
                {[
                  { id: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                ].map((field, i) => (
                  <div
                    key={field.id}
                    className="py-4"
                    style={{ borderBottom: "1px solid var(--rule)", borderTop: i === 0 ? "2px solid var(--ink)" : "none" }}
                  >
                    <label
                      htmlFor={field.id}
                      className="kicker block mb-1.5"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      name={field.id}
                      required
                      value={form[field.id as "name" | "email"]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full bg-transparent focus:outline-none"
                      style={{
                        fontFamily: "var(--font-garamond)",
                        fontSize: "1rem",
                        color: "var(--ink)",
                        border: "none",
                      }}
                    />
                  </div>
                ))}

                <div
                  className="py-4"
                  style={{ borderBottom: "1px solid var(--rule)" }}
                >
                  <label
                    htmlFor="message"
                    className="kicker block mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or project..."
                    className="w-full bg-transparent focus:outline-none resize-none"
                    style={{
                      fontFamily: "var(--font-garamond)",
                      fontSize: "1rem",
                      color: "var(--ink)",
                      border: "none",
                    }}
                  />
                </div>

                <div className="pt-5">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 transition-opacity hover:opacity-70 disabled:opacity-40"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--paper)",
                      backgroundColor: "var(--ink)",
                      border: "none",
                      padding: "0.75rem 2rem",
                      cursor: "pointer",
                    }}
                  >
                    {loading ? (
                      <>
                        <span
                          className="w-3.5 h-3.5 border-2 rounded-full animate-spin"
                          style={{ borderColor: "rgba(255,255,255,0.3)", borderTopColor: "white" }}
                        />
                        Sending
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={13} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>

        {/* Bottom rule */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12"
          style={{ borderTop: "3px solid var(--ink)", borderBottom: "1px solid var(--rule)", paddingTop: "4px", paddingBottom: "3px" }}
        />
      </div>
    </section>
  );
}
