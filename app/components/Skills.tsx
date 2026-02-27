"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "../data/skills";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
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
            <span className="kicker">Technical Arsenal</span>
            <span style={{ color: "var(--rule)" }}>·</span>
            <span className="folio">Section III</span>
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
            Technical Toolkit
          </h2>
          <p
            className="mt-2"
            style={{ fontFamily: "var(--font-garamond)", fontSize: "1.1rem", color: "var(--muted)", fontStyle: "italic" }}
          >
            Technologies deployed to build intelligent, connected systems.
          </p>
        </motion.div>

        {/* Skills table — editorial catalog layout */}
        <div
          style={{ borderTop: "2px solid var(--ink)" }}
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="grid grid-cols-[180px_1fr] sm:grid-cols-[220px_1fr] items-start gap-0 py-5"
              style={{ borderBottom: "1px solid var(--rule)" }}
            >
              {/* Category label */}
              <div
                className="pr-6"
                style={{ borderRight: "1px solid var(--rule)" }}
              >
                <span
                  className="text-xs font-semibold tracking-[0.18em] uppercase"
                  style={{ fontFamily: "var(--font-inter)", color: "var(--ink)" }}
                >
                  {cat.category}
                </span>
                <div
                  className="mt-1 folio"
                  style={{ color: "var(--caption)" }}
                >
                  {cat.skills.length} items
                </div>
              </div>

              {/* Skills chips */}
              <div className="pl-6 flex flex-wrap gap-2 items-center">
                {cat.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom rule */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4"
          style={{ borderTop: "3px solid var(--ink)", borderBottom: "1px solid var(--rule)", paddingTop: "4px", paddingBottom: "3px" }}
        />
      </div>
    </section>
  );
}
