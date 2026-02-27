"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative pt-[240px] md:pt-[220px] pb-0 px-6 md:px-10 overflow-hidden"
      style={{ backgroundColor: "var(--paper)" }}
    >
      {/* Subtle paper texture lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "repeating-linear-gradient(transparent, transparent 27px, var(--ink) 27px, var(--ink) 28px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top kicker row */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex items-center gap-4 mb-6"
        >
          <span className="kicker">Cover Story</span>
          <span style={{ color: "var(--rule)", fontSize: "1rem" }}>—</span>
          <span
            className="text-xs tracking-widest uppercase"
            style={{ fontFamily: "var(--font-inter)", color: "var(--muted)" }}
          >
            Issue No. 1 · 2024
          </span>
          <span style={{ color: "var(--rule)", fontSize: "1rem" }}>—</span>
          <span className="inline-flex items-center gap-1.5 text-xs"
            style={{ fontFamily: "var(--font-inter)", color: "#16a34a", fontWeight: 500 }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: "#22c55e" }}
            />
            Available for opportunities
          </span>
        </motion.div>

        {/* Main headline — big magazine cover type */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-0 items-end">
          <div>
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="leading-none tracking-tight mb-0"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 900,
                fontSize: "clamp(3.5rem, 10vw, 8rem)",
                color: "var(--ink)",
                lineHeight: 0.9,
              }}
            >
              Ahmed
              <br />
              <span className="accent-underline" style={{ color: "var(--accent)" }}>Shahariar</span>
              <br />
              Udoy
            </motion.h1>

            {/* Deck / subtitle */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="mt-6 mb-0 max-w-2xl"
              style={{
                fontFamily: "var(--font-garamond)",
                fontSize: "1.25rem",
                color: "var(--muted)",
                lineHeight: 1.6,
                fontStyle: "italic",
              }}
            >
              IoT &amp; Robotics Engineering Student · Intelligent Systems Developer ·
              Building sensor-driven, cloud-connected hardware that senses, thinks, and acts.
            </motion.p>
          </div>

          {/* Side column — issue info box */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.07)" }}
            transition={{ type: "spring", stiffness: 300, damping: 24 } as object}
            className="hidden lg:flex flex-col gap-3 mb-2 ml-12 shrink-0"
            style={{
              borderLeft: "3px solid var(--ink)",
              paddingLeft: "1.5rem",
              width: "220px",
              cursor: "default",
            }}
          >
            <div>
              <div className="kicker mb-1">Specialization</div>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "var(--ink)", fontWeight: 500 }}>
                Embedded Systems
              </div>
            </div>
            <hr className="thin" />
            <div>
              <div className="kicker mb-1">Platform</div>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "var(--ink)", fontWeight: 500 }}>
                ESP32 · ThingSpeak · Firebase
              </div>
            </div>
            <hr className="thin" />
            <div>
              <div className="kicker mb-1">Focus</div>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "var(--ink)", fontWeight: 500 }}>
                Predictive Monitoring · ML
              </div>
            </div>
            <hr className="thin" />
            <div>
              <div className="kicker mb-1">Location</div>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "var(--ink)", fontWeight: 500 }}>
                Bangladesh
              </div>
            </div>
          </motion.div>
        </div>

        {/* Rule */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-8 mb-7"
        >
          <div style={{ borderTop: "2px solid var(--ink)", borderBottom: "1px solid var(--rule)", paddingTop: "4px", paddingBottom: "4px" }} />
        </motion.div>

        {/* Bottom row: CTA + socials */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-10"
        >
          {/* CTA */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => scrollTo("#projects")}
              whileHover={{ y: -1, boxShadow: "0 4px 16px rgba(13,13,13,0.18)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 } as object}
              className="flex items-center gap-2 text-sm"
              style={{
                fontFamily: "var(--font-inter)",
                color: "var(--paper)",
                backgroundColor: "var(--ink)",
                padding: "0.65rem 1.4rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
                border: "none",
                cursor: "pointer",
              }}
            >
              Read Projects
              <ArrowRight size={14} />
            </motion.button>
            <motion.button
              onClick={() => scrollTo("#contact")}
              whileHover={{ y: -1, boxShadow: "0 4px 12px rgba(13,13,13,0.1)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 } as object}
              className="flex items-center gap-2 text-sm"
              style={{
                fontFamily: "var(--font-inter)",
                color: "var(--ink)",
                backgroundColor: "transparent",
                border: "1px solid var(--ink)",
                padding: "0.65rem 1.4rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
                cursor: "pointer",
              }}
            >
              Contact
              <Mail size={14} />
            </motion.button>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-5">
            <motion.a
              href="#"
              aria-label="GitHub"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 } as object}
              style={{ color: "var(--muted)", display: "flex" }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="#"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 } as object}
              style={{ color: "var(--muted)", display: "flex" }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:shahariar0001@std.bdu.ac.bd"
              aria-label="Email"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 } as object}
              style={{ color: "var(--muted)", display: "flex" }}
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom thick rule */}
        <div style={{ borderBottom: "3px solid var(--ink)" }} />
      </div>
    </section>
  );
}
