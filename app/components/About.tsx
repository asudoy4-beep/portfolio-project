"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Cloud, Brain, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    label: "Embedded Systems",
    desc: "ESP32, sensors, and real-time hardware programming",
  },
  {
    icon: Cloud,
    label: "Cloud IoT",
    desc: "ThingSpeak, Firebase, and cloud-connected systems",
  },
  {
    icon: Brain,
    label: "Intelligent Systems",
    desc: "Machine learning applied to real-world monitoring problems",
  },
  {
    icon: MapPin,
    label: "Bangladesh",
    desc: "Building global-standard solutions locally",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3"
        >
          About
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
            >
              Engineering systems that
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                sense, think, and act
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-slate-400 leading-relaxed"
            >
              <p>
                Ahmed Shahariar Udoy is an IoT and Robotics Engineering student
                at the University of Frontier Technology with hands-on
                experience building embedded systems, sensor-based monitoring
                platforms, and cloud-connected IoT solutions.
              </p>
              <p>
                He has developed ESP32-based environmental monitoring systems
                integrated with ThingSpeak and Firebase, and is currently
                working on intelligent monitoring projects including flood
                prediction and food spoilage detection using data analysis and
                machine learning.
              </p>
              <p>
                His interests focus on intelligent IoT systems, embedded
                intelligence, and predictive monitoring technologies — with a
                long-term vision of contributing to global research and
                engineering at the frontier of smart, connected systems.
              </p>
            </motion.div>
          </div>

          {/* Right: Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 hover:border-blue-500/30 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
                  <Icon size={18} className="text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">
                  {label}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
