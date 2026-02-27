"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
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
            <span className="kicker">Selected Work</span>
            <span style={{ color: "var(--rule)" }}>·</span>
            <span className="folio">Section II</span>
          </div>
          <h2
            className="leading-tight"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "var(--ink)",
            }}
          >
            Engineering in the Field
          </h2>
          <p
            className="mt-2 max-w-xl"
            style={{ fontFamily: "var(--font-garamond)", fontSize: "1.1rem", color: "var(--muted)", fontStyle: "italic" }}
          >
            Real-world systems built with embedded hardware, cloud platforms, and data intelligence.
          </p>
        </motion.div>

        {/* Featured projects — newspaper front page layout */}
        <div className="grid lg:grid-cols-2 gap-0 mb-0">
          {featured.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="article-card p-7 cursor-pointer"
              style={{
                borderRight: i === 0 ? "1px solid var(--rule)" : "none",
                borderBottom: "1px solid var(--rule)",
                borderTop: "2px solid var(--ink)",
              }}
            >
              {/* Article number + label */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-block w-7 h-7 text-center text-xs font-bold leading-7"
                  style={{
                    fontFamily: "var(--font-mono)",
                    backgroundColor: "var(--accent)",
                    color: "var(--paper)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="kicker" style={{ color: "var(--accent)" }}>Feature</span>
              </div>

              <h3
                className="mb-3 leading-tight"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 700,
                  fontSize: "1.35rem",
                  color: "var(--ink)",
                }}
              >
                {project.title}
              </h3>

              <p
                className="mb-4"
                style={{
                  fontFamily: "var(--font-garamond)",
                  fontSize: "1rem",
                  color: "var(--muted)",
                  lineHeight: 1.7,
                }}
              >
                {project.description}
              </p>

              {/* Pull quote — impact */}
              <p
                className="mb-5 text-sm italic pl-3"
                style={{
                  fontFamily: "var(--font-garamond)",
                  color: "var(--muted)",
                  borderLeft: "2px solid var(--accent)",
                }}
              >
                {project.impact}
              </p>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* More projects — smaller editorial cards */}
        <div
          className="grid sm:grid-cols-2 gap-0"
          style={{ borderTop: "1px solid var(--rule)" }}
        >
          {rest.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 + i * 0.1 }}
              className="article-card p-6 cursor-pointer"
              style={{
                borderRight: i % 2 === 0 ? "1px solid var(--rule)" : "none",
                borderBottom: "1px solid var(--rule)",
              }}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <span className="kicker">
                  Project {String(featured.length + i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3
                className="mb-2 leading-snug"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "var(--ink)",
                }}
              >
                {project.title}
              </h3>
              <p
                className="mb-4 text-sm"
                style={{
                  fontFamily: "var(--font-garamond)",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                }}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="chip" style={{ fontSize: "0.6rem" }}>{t}</span>
                ))}
              </div>
            </motion.article>
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
