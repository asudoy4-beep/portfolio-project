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
    // Simulate async send
    await new Promise((resolve) => setTimeout(resolve, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3"
        >
          Contact
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Let&apos;s build something
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                meaningful together
              </span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              I&apos;m open to research collaborations, global internships,
              and Master&apos;s program opportunities. If you&apos;re working
              on intelligent systems, IoT, or embedded hardware — I&apos;d love
              to connect.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:shahariar0001@std.bdu.ac.bd"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center group-hover:border-blue-500/40 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="text-sm">shahariar0001@std.bdu.ac.bd</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center group-hover:border-blue-500/40 transition-colors">
                  <Github size={16} />
                </div>
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center group-hover:border-blue-500/40 transition-colors">
                  <Linkedin size={16} />
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <CheckCircle2 size={28} className="text-green-400" />
                </div>
                <h3 className="text-white font-semibold text-lg">
                  Message received
                </h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Thanks for reaching out! I&apos;ll get back to you as soon as
                  possible.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or project..."
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 rounded-lg font-medium text-sm transition-colors duration-200"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
