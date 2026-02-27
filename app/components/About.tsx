"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const sidebarItems = [
    { label: "Focus Area", value: "Embedded Systems & IoT" },
    { label: "Hardware", value: "ESP32, Sensors, Microcontrollers" },
    { label: "Cloud", value: "ThingSpeak · Firebase · MQTT" },
    { label: "Intelligence", value: "ML · Python · Data Analysis" },
    { label: "Location", value: "Bangladesh" },
    { label: "Status", value: "Open to Opportunities" },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 md:px-10"
      style={{ backgroundColor: "var(--paper)" }}
    >
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Section header — magazine chapter opener */}
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
            <span className="kicker">Profile</span>
            <span style={{ color: "var(--rule)" }}>·</span>
            <span className="folio">Section I</span>
          </div>
          <h2
            className="leading-none"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "var(--ink)",
            }}
          >
            Engineering systems that
            <br />
            <em style={{ color: "var(--accent)" }}>sense, think, and act</em>
          </h2>
        </motion.div>

        {/* Three-column editorial layout */}
        <div className="grid lg:grid-cols-3 gap-0">

          {/* Col 1 — body copy with drop cap */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:pr-10 pb-8 lg:pb-0"
            style={{ borderRight: "1px solid var(--rule)" }}
          >
            <p
              className="drop-cap mb-5"
              style={{ fontFamily: "var(--font-garamond)", color: "var(--ink)", fontSize: "1.05rem" }}
            >
              Ahmed Shahariar Udoy is an IoT and Robotics Engineering student
              at the University of Frontier Technology with hands-on
              experience building embedded systems, sensor-based monitoring
              platforms, and cloud-connected IoT solutions.
            </p>
            <p
              className="mb-0"
              style={{ fontFamily: "var(--font-garamond)", color: "var(--muted)", fontSize: "1.05rem" }}
            >
              He has developed ESP32-based environmental monitoring systems
              integrated with ThingSpeak and Firebase, and is currently
              working on intelligent monitoring projects including flood
              prediction and food spoilage detection.
            </p>
          </motion.div>

          {/* Col 2 — pull quote + continuation */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:px-10 pb-8 lg:pb-0 pt-8 lg:pt-0"
            style={{ borderRight: "1px solid var(--rule)", borderTop: "1px solid var(--rule)" }}
          >
            <motion.blockquote
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 } as object}
              className="pull-quote mb-6"
            >
              &ldquo;Building global-standard intelligent systems from Bangladesh — at the frontier of IoT and embedded intelligence.&rdquo;
            </motion.blockquote>
            <p
              style={{ fontFamily: "var(--font-garamond)", color: "var(--muted)", fontSize: "1.05rem" }}
            >
              His interests focus on intelligent IoT systems, embedded
              intelligence, and predictive monitoring technologies — with a
              long-term vision of contributing to global research and
              engineering at the frontier of smart, connected systems.
            </p>
          </motion.div>

          {/* Col 3 — sidebar: quick facts with staggered entrance */}
          <div
            className="lg:pl-10 pt-8 lg:pt-0"
            style={{ borderTop: "1px solid var(--rule)" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-4 pb-2"
              style={{ borderBottom: "2px solid var(--ink)" }}
            >
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-inter)", color: "var(--ink)" }}
              >
                At a Glance
              </span>
            </motion.div>

            {sidebarItems.map(({ label, value }, i, arr) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.06, ease: "easeOut" }}
                className="py-3 flex justify-between items-start gap-3"
                style={{
                  borderBottom: i < arr.length - 1 ? "1px solid var(--rule)" : "none",
                }}
              >
                <span
                  className="kicker shrink-0"
                  style={{ lineHeight: 1.5 }}
                >
                  {label}
                </span>
                <span
                  className="text-right"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.78rem",
                    color: "var(--ink)",
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                >
                  {value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom rule */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
          style={{ borderTop: "3px solid var(--ink)", borderBottom: "1px solid var(--rule)", paddingTop: "4px", paddingBottom: "3px" }}
        />
      </div>
    </section>
  );
}
