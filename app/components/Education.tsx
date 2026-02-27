"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const courses = [
  "Embedded Systems",
  "Robotics & Automation",
  "IoT Architectures",
  "Signal Processing",
  "Data Engineering",
  "Applied ML",
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="education"
      className="py-20 px-6 md:px-10"
      style={{ backgroundColor: "var(--paper-dark)" }}
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
            <span className="kicker">Academic Background</span>
            <span style={{ color: "var(--rule)" }}>·</span>
            <span className="folio">Section IV</span>
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
            Credentials
          </h2>
        </motion.div>

        {/* Editorial education card with hover lift */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.06)" }}
          className="grid lg:grid-cols-[1fr_2fr] gap-0 max-w-4xl"
          style={{
            border: "1px solid var(--rule)",
            borderTop: "4px solid var(--accent)",
            transition: "box-shadow 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {/* Left column — institution info */}
          <div
            className="p-8"
            style={{ borderRight: "1px solid var(--rule)", backgroundColor: "var(--paper-light)" }}
          >
            <div className="kicker mb-3" style={{ color: "var(--accent)" }}>University</div>
            <h3
              className="leading-snug mb-1"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 700,
                fontSize: "1.15rem",
                color: "var(--ink)",
              }}
            >
              University of Frontier Technology
            </h3>
            <div
              className="mb-4"
              style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "var(--muted)" }}
            >
              Bangladesh
            </div>
            <hr className="thin mb-4" />
            <div className="kicker mb-1">Programme</div>
            <div
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.82rem",
                color: "var(--ink)",
                fontWeight: 500,
                lineHeight: 1.5,
              }}
            >
              IoT and Robotics Engineering
            </div>
            <div
              className="mt-3"
              style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "var(--muted)" }}
            >
              Undergraduate Student
            </div>
          </div>

          {/* Right column — coursework details */}
          <div className="p-8">
            <div
              className="mb-4 pb-2"
              style={{ borderBottom: "1px solid var(--rule)" }}
            >
              <span
                className="text-xs font-semibold tracking-[0.18em] uppercase"
                style={{ fontFamily: "var(--font-inter)", color: "var(--ink)" }}
              >
                Focus Areas
              </span>
            </div>

            <div className="grid grid-cols-2 gap-0 mb-6">
              {courses.map((course, i, arr) => (
                <motion.div
                  key={course}
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.3 + i * 0.06, ease: "easeOut" }}
                  className="py-2.5 pr-4"
                  style={{
                    borderBottom: i < arr.length - 2 ? "1px solid var(--rule)" : "none",
                    borderRight: i % 2 === 0 ? "1px solid var(--rule)" : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.78rem",
                      color: "var(--ink)",
                      fontWeight: 500,
                    }}
                  >
                    {course}
                  </span>
                </motion.div>
              ))}
            </div>

            <p
              className="text-sm italic"
              style={{
                fontFamily: "var(--font-garamond)",
                color: "var(--muted)",
                borderLeft: "2px solid var(--rule)",
                paddingLeft: "1rem",
                lineHeight: 1.7,
              }}
            >
              Coursework spanning embedded systems, robotics, IoT architectures,
              signal processing, and data engineering — with a focus on applied intelligent systems.
            </p>
          </div>
        </motion.div>

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
