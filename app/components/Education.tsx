"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-28 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3"
        >
          Education
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-white mb-14"
        >
          Academic background
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl"
        >
          <div className="relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 hover:border-blue-500/25 transition-all duration-300">
            {/* Top accent line */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-transparent rounded-full" />

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <GraduationCap size={22} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-1">
                  University of Frontier Technology
                </h3>
                <p className="text-blue-400 font-medium text-sm mb-3">
                  IoT and Robotics Engineering
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen size={14} className="text-slate-500" />
                  <span className="text-slate-400 text-sm">
                    Undergraduate Student
                  </span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Coursework spanning embedded systems, robotics, IoT
                  architectures, signal processing, and data engineering —
                  with a focus on applied intelligent systems.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
