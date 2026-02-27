"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const d = new Date();
    setDateStr(
      d.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{
        backgroundColor: "var(--paper)",
        boxShadow: scrolled ? "0 1px 6px rgba(0,0,0,0.08)" : "none",
      }}
    >
      {/* Top dateline bar */}
      <div
        className="hidden md:flex items-center justify-between px-8 py-1"
        style={{ borderBottom: "1px solid var(--rule)", backgroundColor: "var(--paper-dark)" }}
      >
        <span className="running-head">{dateStr}</span>
        <span className="running-head tracking-[0.25em]">
          IoT &amp; Robotics Engineering · Vol. I, No. 1
        </span>
        <span className="running-head">Est. 2024 · Bangladesh</span>
      </div>

      {/* Masthead */}
      <div
        className="flex flex-col items-center py-4 px-8"
        style={{ borderBottom: "3px solid var(--ink)" }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col items-center gap-0.5 hover:opacity-70 transition-opacity"
        >
          <span
            className="text-3xl md:text-5xl font-black tracking-tight leading-none"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--ink)" }}
          >
            Ahmed<span style={{ color: "var(--accent)" }}>.</span>
          </span>
          <span
            className="running-head mt-1"
            style={{ letterSpacing: "0.3em" }}
          >
            Portfolio Review · Intelligent Systems Edition
          </span>
        </button>
      </div>

      {/* Desktop nav strip */}
      <nav
        className="hidden md:flex items-center justify-center"
        style={{ borderBottom: "1px solid var(--rule)" }}
      >
        {navLinks.map((link, i) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            className="text-xs tracking-[0.18em] uppercase px-6 py-2 transition-opacity hover:opacity-50"
            style={{
              fontFamily: "var(--font-inter)",
              color: "var(--ink)",
              borderRight: i < navLinks.length - 1 ? "1px solid var(--rule)" : "none",
              fontWeight: 500,
            }}
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => handleNavClick("#contact")}
          className="text-xs tracking-[0.18em] uppercase px-6 py-2 transition-opacity hover:opacity-80"
          style={{
            fontFamily: "var(--font-inter)",
            color: "var(--paper)",
            backgroundColor: "var(--accent)",
            borderLeft: "1px solid var(--rule)",
            fontWeight: 600,
          }}
        >
          Hire Me
        </button>
      </nav>

      {/* Mobile top strip */}
      <div
        className="md:hidden flex items-center justify-between px-5 py-2"
        style={{ borderTop: "1px solid var(--rule)" }}
      >
        <span className="running-head">IoT Engineer · Bangladesh</span>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          className="p-1 transition-opacity hover:opacity-60"
          style={{ color: "var(--ink)" }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              backgroundColor: "var(--paper-dark)",
              borderBottom: "2px solid var(--ink)",
            }}
          >
            <nav className="flex flex-col px-6 py-2">
              {navLinks.map((link, i) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-xs tracking-[0.18em] uppercase py-3 transition-opacity hover:opacity-50"
                  style={{
                    fontFamily: "var(--font-inter)",
                    color: "var(--ink)",
                    borderBottom: i < navLinks.length - 1 ? "1px solid var(--rule)" : "none",
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
