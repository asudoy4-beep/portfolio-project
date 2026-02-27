"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <p className="text-white font-semibold text-sm">
            Ahmed Shahariar Udoy
          </p>
          <p className="text-slate-600 text-xs">
            IoT & Robotics Engineering Student · Bangladesh
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="#"
            aria-label="GitHub"
            className="text-slate-600 hover:text-slate-400 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-slate-600 hover:text-slate-400 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:shahariar0001@std.bdu.ac.bd"
            aria-label="Email"
            className="text-slate-600 hover:text-slate-400 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-slate-700 text-xs">
          © {new Date().getFullYear()} Ahmed Shahariar Udoy
        </p>
      </div>
    </footer>
  );
}
