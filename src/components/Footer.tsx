"use client";

import Image from "next/image";
import { resumeData } from "@/data/resumeData";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="py-12 bg-background border-t border-border no-print">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-border/60">
          <div className="flex items-center gap-3">
            <div className="relative size-10 rounded-full ring-2 ring-primary/40 p-0.5 overflow-hidden shrink-0 shadow-xs bg-muted">
              <Image
                src="/profile.jpg"
                alt={resumeData.personal.name}
                width={40}
                height={40}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <span className="font-heading font-bold text-foreground text-base block">
                {resumeData.personal.name}
              </span>
              <span className="text-xs text-muted-foreground font-mono">
                {resumeData.personal.title[lang]}
                {resumeData.personal.subTitle[lang] ? ` — ${resumeData.personal.subTitle[lang]}` : ""}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
            <a href="#hero" className="hover:text-foreground transition-colors">
              {lang === "en" ? "About" : "Tentang"}
            </a>
            <a href="#pengalaman" className="hover:text-foreground transition-colors">
              {lang === "en" ? "Experience" : "Pengalaman"}
            </a>
            <a href="#portofolio" className="hover:text-foreground transition-colors">
              {lang === "en" ? "Portfolio (22)" : "Portofolio (22)"}
            </a>
            <a href="#keahlian" className="hover:text-foreground transition-colors">
              {lang === "en" ? "Skills" : "Keahlian"}
            </a>
            <a href="#kontak" className="hover:text-foreground transition-colors">
              {lang === "en" ? "Contact" : "Kontak"}
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
          <p>© {new Date().getFullYear()} {resumeData.personal.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
