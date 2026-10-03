"use client";

import { ArrowUp, Code2, Heart } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-background border-t border-border no-print">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-border/60">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Code2 className="size-4 text-primary" />
            </div>
            <div>
              <span className="font-heading font-bold text-foreground text-base block">
                {resumeData.personal.name}
              </span>
              <span className="text-xs text-muted-foreground font-mono">
                {resumeData.personal.title} — Bandung & Tasikmalaya
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
            <a href="#hero" className="hover:text-foreground transition-colors">
              Tentang
            </a>
            <a href="#pengalaman" className="hover:text-foreground transition-colors">
              Pengalaman
            </a>
            <a href="#portofolio" className="hover:text-foreground transition-colors">
              Portofolio (22)
            </a>
            <a href="#keahlian" className="hover:text-foreground transition-colors">
              Keahlian
            </a>
            <a href="#kontak" className="hover:text-foreground transition-colors">
              Kontak
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="size-9 rounded-full border border-border bg-card hover:bg-muted text-foreground flex items-center justify-center transition-all shadow-xs"
            title="Kembali ke atas"
          >
            <ArrowUp className="size-4" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
          <p>© {new Date().getFullYear()} {resumeData.personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Next.js & Tailwind CSS • Ready for Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
