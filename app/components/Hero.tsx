"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-xs text-blue-400 font-medium mb-8 tracking-wide uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4"
        >
          Ahmed Shahariar
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Udoy
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-slate-400 text-lg md:text-xl font-medium mb-6"
        >
          IoT & Robotics Engineering Student &nbsp;·&nbsp; Intelligent Systems
          Developer
        </motion.p>

        {/* Headline */}
        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-slate-300 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto mb-4"
        >
          I design and build intelligent monitoring systems using IoT, embedded
          hardware, and machine learning.
        </motion.p>

        {/* Subtext */}
        <motion.p
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-slate-500 text-base max-w-xl mx-auto mb-10"
        >
          Focused on ESP32-based systems, predictive monitoring, and real-world
          intelligent automation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-lg font-medium transition-colors duration-200 text-sm"
          >
            View Projects
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-7 py-3.5 rounded-lg font-medium transition-colors duration-200 text-sm"
          >
            Contact Me
            <Mail size={16} />
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          custom={6}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex items-center justify-center gap-5"
        >
          <a
            href="#"
            aria-label="GitHub"
            className="text-slate-500 hover:text-white transition-colors duration-200"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-slate-500 hover:text-white transition-colors duration-200"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:shahariar0001@std.bdu.ac.bd"
            aria-label="Email"
            className="text-slate-500 hover:text-white transition-colors duration-200"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-600 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}
