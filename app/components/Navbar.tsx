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
  const [activeSection, setActiveSection] = useState("");

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

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(245, 240, 232, 0.92)" : "var(--paper)",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
        boxShadow: scrolled ? "0 1px 6px rgba(0,0,0,0.08)" : "none",
      }}
    >
      {/* Top dateline bar */}
      <div
        className="hidden md:flex items-center justify-between px-8 py-1.5"
        style={{ borderBottom: "1px solid var(--rule)", backgroundColor: scrolled ? "transparent" : "var(--paper-dark)" }}
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
        className="hidden md:flex items-center justify-center relative"
        style={{ borderBottom: "1px solid var(--rule)" }}
      >
        {navLinks.map((link, i) => {
          const sectionId = link.href.replace("#", "");
          const isActive = activeSection === sectionId;
          return (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="relative text-xs tracking-[0.18em] uppercase px-6 py-2.5 transition-all duration-250"
              style={{
                fontFamily: "var(--font-inter)",
                color: isActive ? "var(--accent)" : "var(--ink)",
                borderRight: i < navLinks.length - 1 ? "1px solid var(--rule)" : "none",
                fontWeight: isActive ? 600 : 500,
                opacity: isActive ? 1 : undefined,
              }}
            >
              {link.label}
              {isActive && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ backgroundColor: "var(--accent)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
        <button
          onClick={() => handleNavClick("#contact")}
          className="text-xs tracking-[0.18em] uppercase px-6 py-2.5 transition-opacity hover:opacity-80"
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
            transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              backgroundColor: "var(--paper-dark)",
              borderBottom: "2px solid var(--ink)",
              overflow: "hidden",
            }}
          >
            <nav className="flex flex-col px-6 py-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.04, ease: "easeOut" }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-xs tracking-[0.18em] uppercase py-3 transition-opacity hover:opacity-50"
                  style={{
                    fontFamily: "var(--font-inter)",
                    color: activeSection === link.href.replace("#", "") ? "var(--accent)" : "var(--ink)",
                    borderBottom: i < navLinks.length - 1 ? "1px solid var(--rule)" : "none",
                    fontWeight: activeSection === link.href.replace("#", "") ? 600 : 500,
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
