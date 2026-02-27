"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "../data/projects";
import { ArrowUpRight, Star } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3"
        >
          Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-white mb-3"
        >
          Selected work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-slate-500 mb-14 max-w-xl"
        >
          Real-world systems built with embedded hardware, cloud platforms, and
          data intelligence.
        </motion.p>

        {/* Featured projects — larger cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 hover:border-blue-500/30 hover:bg-white/[0.05] transition-all duration-300 flex flex-col"
            >
              {/* Featured badge */}
              <div className="flex items-center justify-between mb-5">
                <span className="inline-flex items-center gap-1.5 text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1 font-medium">
                  <Star size={11} fill="currentColor" />
                  Featured
                </span>
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all">
                  <ArrowUpRight size={15} />
                </div>
              </div>

              <h3 className="text-white font-semibold text-lg mb-3 leading-snug">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Impact */}
              <p className="text-slate-500 text-xs italic mb-5 border-l-2 border-blue-500/30 pl-3">
                {project.impact}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-blue-500/10 border border-blue-500/15 text-blue-300 rounded-md px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Non-featured — smaller cards in grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="group bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white font-semibold text-base leading-snug pr-4">
                  {project.title}
                </h3>
                <ArrowUpRight
                  size={16}
                  className="text-slate-600 group-hover:text-slate-400 transition-colors shrink-0 mt-0.5"
                />
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-white/5 border border-white/8 text-slate-400 rounded-md px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
