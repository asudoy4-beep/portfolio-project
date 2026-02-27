"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-8 px-6 md:px-10"
      style={{ backgroundColor: "var(--paper-dark)", borderTop: "2px solid var(--ink)" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Top colophon row */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5"
          style={{ borderBottom: "1px solid var(--rule)" }}
        >
          {/* Publication info */}
          <div>
            <div
              className="leading-none mb-1"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 900,
                fontSize: "1.4rem",
                color: "var(--ink)",
              }}
            >
              Ahmed<span style={{ color: "var(--accent)" }}>.</span>
            </div>
            <div className="running-head">
              IoT &amp; Robotics Engineering · Bangladesh
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              aria-label="GitHub"
              className="transition-opacity hover:opacity-50 flex items-center gap-1.5"
              style={{ color: "var(--muted)", textDecoration: "none" }}
            >
              <Github size={16} />
              <span className="byline hidden sm:inline">GitHub</span>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="transition-opacity hover:opacity-50 flex items-center gap-1.5"
              style={{ color: "var(--muted)", textDecoration: "none" }}
            >
              <Linkedin size={16} />
              <span className="byline hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="mailto:shahariar0001@std.bdu.ac.bd"
              aria-label="Email"
              className="transition-opacity hover:opacity-50 flex items-center gap-1.5"
              style={{ color: "var(--muted)", textDecoration: "none" }}
            >
              <Mail size={16} />
              <span className="byline hidden sm:inline">Email</span>
            </a>
          </div>
        </div>

        {/* Bottom colophon */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-4">
          <span className="folio">
            © {new Date().getFullYear()} Ahmed Shahariar Udoy. All rights reserved.
          </span>
          <span className="folio">
            Built with Next.js · Deployed via GitHub Pages
          </span>
        </div>
      </div>
    </footer>
  );
}
