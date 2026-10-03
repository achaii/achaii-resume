"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Printer, Menu, X, Code2, Download } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check initial theme from DOM or localStorage
    const isDark =
      document.documentElement.classList.contains("dark") ||
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setTheme(isDark ? "dark" : "light");

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const navLinks = [
    { label: "Tentang", href: "#hero" },
    { label: "Pengalaman", href: "#pengalaman" },
    { label: "Portofolio", href: "#portofolio", count: "22" },
    { label: "Keahlian", href: "#keahlian" },
    { label: "Pendidikan", href: "#pendidikan" },
    { label: "Sertifikasi", href: "#sertifikasi" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-xs py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 text-foreground font-semibold tracking-tight group"
        >
          <div className="size-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
            <Code2 className="size-4 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-base font-bold text-foreground leading-tight flex items-center gap-1.5">
              Deni Hidayat
              <span className="size-1.5 rounded-full bg-primary inline-block"></span>
            </span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-card/60 border border-border/80 rounded-full px-4 py-1.5 backdrop-blur-xs">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/70 px-3 py-1.5 rounded-full transition-all duration-150 flex items-center gap-1"
            >
              {link.label}
              {link.count && (
                <span className="text-[10px] bg-primary/15 text-primary px-1.5 py-0.2 rounded-full font-bold">
                  {link.count}
                </span>
              )}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle tema gelap/terang"
            className="size-9 rounded-full border border-border bg-card text-foreground hover:bg-muted flex items-center justify-center transition-colors shadow-xs"
            title={theme === "light" ? "Ganti ke Tema Gelap" : "Ganti ke Tema Terang"}
          >
            {theme === "light" ? (
              <Moon className="size-4 text-foreground/80" />
            ) : (
              <Sun className="size-4 text-amber-400" />
            )}
          </button>

          {/* Cetak / Download CV Button */}
          <button
            onClick={handlePrint}
            className="hidden sm:inline-flex btn-3d btn-3d-primary text-xs py-2 px-3.5"
            title="Cetak atau Unduh Resume Format PDF"
          >
            <Printer className="size-3.5" />
            <span>Cetak CV (PDF)</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu navigasi"
            className="md:hidden size-9 rounded-full border border-border bg-card flex items-center justify-center text-foreground"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-lg px-4 pt-3 pb-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:bg-muted border border-border/40"
              >
                <span>{link.label}</span>
                {link.count && (
                  <span className="text-xs bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-full">
                    {link.count}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-border flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handlePrint();
              }}
              className="w-full btn-3d btn-3d-primary text-xs py-2.5 flex items-center justify-center gap-1.5"
            >
              <Printer className="size-4" />
              <span>Cetak / Unduh Resume PDF</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
