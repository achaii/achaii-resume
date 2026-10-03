"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Moon,
  Sun,
  Printer,
  Menu,
  X,
  Globe,
  User,
  Briefcase,
  FolderGit2,
  Sparkles,
  GraduationCap,
  Award,
  Mail,
  Phone,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/Icons";
import { resumeData } from "@/data/resumeData";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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
    { label: { en: "About", id: "Tentang" }, href: "#hero", icon: User },
    {
      label: { en: "Experience", id: "Pengalaman" },
      href: "#pengalaman",
      icon: Briefcase,
    },
    {
      label: { en: "Portfolio", id: "Portofolio" },
      href: "#portofolio",
      count: "22",
      icon: FolderGit2,
    },
    {
      label: { en: "Skills", id: "Keahlian" },
      href: "#keahlian",
      icon: Sparkles,
    },
    {
      label: { en: "Education", id: "Pendidikan" },
      href: "#pendidikan",
      icon: GraduationCap,
    },
    {
      label: { en: "Certifications", id: "Sertifikasi" },
      href: "#sertifikasi",
      count: "14",
      icon: Award,
    },
    {
      label: { en: "Contact", id: "Kontak" },
      href: "#kontak",
      icon: Mail,
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-xs py-2.5 sm:py-3"
          : "bg-transparent py-3 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6 flex items-center justify-between gap-2">
        {/* Brand / Logo using Instagram profile photo */}
        <a
          href="#hero"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-2 sm:gap-2.5 text-foreground font-semibold tracking-tight group shrink-0 min-w-0"
        >
          <div className="relative size-8 sm:size-9 rounded-full ring-2 ring-primary/40 group-hover:ring-primary group-hover:scale-105 transition-all shadow-xs overflow-hidden shrink-0 bg-muted">
            <Image
              src="/profile.jpg"
              alt={resumeData.personal.name}
              width={36}
              height={36}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-heading text-sm sm:text-base font-bold text-foreground leading-tight whitespace-nowrap">
              {resumeData.personal.name}
            </span>
            <span className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider font-mono whitespace-nowrap hidden sm:block">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (Pill bar) */}
        <div className="hidden lg:flex items-center gap-1 bg-card/70 border border-border/80 rounded-full px-4 py-1.5 backdrop-blur-xs">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/70 px-3 py-1.5 rounded-full transition-all duration-150 flex items-center gap-1"
            >
              {link.label[lang]}
              {link.count && (
                <span className="text-[10px] bg-primary/15 text-primary px-1.5 py-0.2 rounded-full font-bold">
                  {link.count}
                </span>
              )}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Language Switcher Button (EN / ID) */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 h-8 sm:h-9 px-2 sm:px-2.5 rounded-full border border-border bg-card text-foreground hover:bg-muted text-[11px] sm:text-xs font-mono font-semibold transition-colors shadow-xs"
            title={lang === "en" ? "Ganti ke Bahasa Indonesia" : "Switch to English"}
          >
            <Globe className="size-3 sm:size-3.5 text-primary" />
            <span className={lang === "en" ? "text-primary font-bold" : "text-muted-foreground"}>
              EN
            </span>
            <span className="text-muted-foreground/60">/</span>
            <span className={lang === "id" ? "text-primary font-bold" : "text-muted-foreground"}>
              ID
            </span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            className="size-8 sm:size-9 rounded-full border border-border bg-card text-foreground hover:bg-muted flex items-center justify-center transition-colors shadow-xs"
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            {theme === "light" ? (
              <Moon className="size-3.5 sm:size-4 text-foreground/80" />
            ) : (
              <Sun className="size-3.5 sm:size-4 text-amber-400" />
            )}
          </button>

          {/* Print CV Button (Desktop only: strictly hidden below lg) */}
          <div className="hidden lg:block">
            <button
              onClick={handlePrint}
              className="btn-3d btn-3d-primary text-xs py-2 px-3.5"
              title="Export / Print PDF Resume"
            >
              <Printer className="size-3.5" />
              <span>{lang === "en" ? "Print CV (PDF)" : "Cetak CV (PDF)"}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Burger: Always visible on mobile & tablet below lg */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
            aria-expanded={mobileMenuOpen}
            className={`lg:hidden size-8 sm:size-9 rounded-xl border flex items-center justify-center transition-all shadow-xs active:scale-95 ${
              mobileMenuOpen
                ? "bg-primary/10 border-primary/50 text-primary"
                : "border-border bg-card hover:bg-muted text-foreground"
            }`}
          >
            {mobileMenuOpen ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[52px] sm:top-[60px] z-40 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[52px] sm:top-[60px] left-0 right-0 z-50 max-h-[calc(100vh-60px)] overflow-y-auto bg-background/98 backdrop-blur-xl border-b border-border shadow-2xl px-4 pt-3 pb-6 space-y-3.5 animate-in fade-in slide-in-from-top-2 duration-200">
          {/* User mini info card */}
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-card border border-border/80 shadow-xs">
            <div className="relative size-10 rounded-full ring-2 ring-primary/40 overflow-hidden shrink-0 bg-muted">
              <Image
                src="/profile.jpg"
                alt={resumeData.personal.name}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <span className="font-heading font-bold text-foreground text-sm truncate">
                  {resumeData.personal.name}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full shrink-0">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  {lang === "en" ? "Available" : "Tersedia"}
                </span>
              </div>
              <span className="text-xs text-muted-foreground font-mono block truncate">
                {resumeData.personal.title[lang]}
              </span>
            </div>
          </div>

          {/* Navigation items list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-card hover:bg-muted border border-border/70 hover:border-primary/40 text-foreground transition-all group active:scale-[0.99]"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="size-7 sm:size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="size-3.5 sm:size-4" />
                    </div>
                    <span className="text-sm font-medium">
                      {link.label[lang]}
                    </span>
                  </div>
                  {link.count && (
                    <span className="text-xs bg-primary/15 text-primary font-bold px-2 py-0.5 rounded-full font-mono">
                      {link.count}
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Actions & Social Shortcuts */}
          <div className="pt-2 border-t border-border/80 space-y-2.5">
            {/* Big Print Resume Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handlePrint();
              }}
              className="w-full btn-3d btn-3d-primary py-2.5 px-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold shadow-md"
            >
              <Printer className="size-4" />
              <span>
                {lang === "en" ? "Print / Export Resume (PDF)" : "Cetak / Unduh Resume (PDF)"}
              </span>
            </button>

            {/* Quick Contact Icons */}
            <div className="grid grid-cols-4 gap-2 pt-1">
              <a
                href={`https://wa.me/${resumeData.personal.phoneClean}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl border border-border bg-card hover:border-emerald-500/50 hover:bg-emerald-500/10 text-center flex flex-col items-center gap-1 transition-all"
                title="WhatsApp"
              >
                <Phone className="size-4 text-emerald-500" />
                <span className="text-[10px] font-mono text-muted-foreground">WhatsApp</span>
              </a>
              <a
                href={`mailto:${resumeData.personal.email}`}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/10 text-center flex flex-col items-center gap-1 transition-all"
                title="Email"
              >
                <Mail className="size-4 text-primary" />
                <span className="text-[10px] font-mono text-muted-foreground">Email</span>
              </a>
              <a
                href={resumeData.personal.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl border border-border bg-card hover:border-pink-500/50 hover:bg-pink-500/10 text-center flex flex-col items-center gap-1 transition-all"
                title="Instagram"
              >
                <InstagramIcon className="size-4 text-pink-500" />
                <span className="text-[10px] font-mono text-muted-foreground">Instagram</span>
              </a>
              <a
                href={resumeData.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-muted text-center flex flex-col items-center gap-1 transition-all"
                title="GitHub"
              >
                <GithubIcon className="size-4 text-foreground" />
                <span className="text-[10px] font-mono text-muted-foreground">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
