"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  Copy,
  Check,
  FileDown,
  ArrowRight,
  Sparkles,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/Icons";
import { resumeData } from "@/data/resumeData";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { lang } = useLanguage();
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section
      id="hero"
      className="pt-28 pb-16 sm:pt-36 sm:pb-20 border-b border-border/70 relative overflow-hidden"
    >
      {/* Decorative ambient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/5 dark:bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-medium mb-6 animate-in fade-in duration-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{resumeData.personal.availability[lang]}</span>
        </div>

        {/* Tagline */}
        <p className="tagline">{resumeData.personal.tagline[lang]}</p>

        {/* Name and Title with Profile Photo */}
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6 mb-6">
          <div className="space-y-4">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground text-balance">
              {resumeData.personal.name}
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-primary flex items-center gap-2 flex-wrap">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-xl text-base sm:text-lg border border-primary/20">
                {resumeData.personal.title[lang]}
              </span>
              <span className="text-muted-foreground text-base sm:text-lg hidden sm:inline">
                •
              </span>
              <span className="text-muted-foreground text-sm sm:text-base hidden sm:inline">
                {resumeData.personal.subTitle[lang]}
              </span>
            </p>
          </div>

          {/* Profile Photo from Instagram */}
          <div className="relative shrink-0 group self-start sm:self-center">
            <div className="size-24 sm:size-32 rounded-3xl p-1 bg-gradient-to-br from-primary/50 via-primary/20 to-border ring-2 ring-primary/30 shadow-lg overflow-hidden group-hover:scale-105 group-hover:ring-primary transition-all duration-300 bg-card">
              <Image
                src="/profile.jpg"
                alt={resumeData.personal.name}
                width={128}
                height={128}
                className="w-full h-full object-cover rounded-[20px]"
                priority
              />
            </div>
            <a
              href={resumeData.personal.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-card border border-border shadow-md text-[10px] font-mono font-medium text-foreground hover:text-primary flex items-center gap-1 transition-colors"
              title="Instagram @dennyachaii"
            >
              <InstagramIcon className="size-3 text-pink-500" />
              <span>@dennyachaii</span>
            </a>
          </div>
        </div>

        {/* Bio Paragraph */}
        <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-3xl mb-8">
          {resumeData.personal.bio[lang]}
        </p>

        {/* Direct Contact Chips (Address removed per user request) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-2xl">
          {/* Phone / WhatsApp */}
          <div className="flex items-center justify-between p-3 rounded-2xl border border-border bg-card/70 hover:border-primary/40 transition-colors group">
            <a
              href={`https://wa.me/${resumeData.personal.phoneClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs text-foreground group-hover:text-primary transition-colors truncate"
            >
              <div className="size-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="size-3.5 text-primary" />
              </div>
              <span className="font-mono">{resumeData.personal.phone}</span>
            </a>
            <button
              onClick={() => handleCopy(resumeData.personal.phone, "phone")}
              className="p-1 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground shrink-0 transition-colors"
              title={lang === "en" ? "Copy Phone Number" : "Salin Nomor Telepon"}
            >
              {copiedType === "phone" ? (
                <Check className="size-3.5 text-emerald-500" />
              ) : (
                <Copy className="size-3.5" />
              )}
            </button>
          </div>

          {/* Email */}
          <div className="flex items-center justify-between p-3 rounded-2xl border border-border bg-card/70 hover:border-primary/40 transition-colors group">
            <a
              href={`mailto:${resumeData.personal.email}`}
              className="flex items-center gap-2.5 text-xs text-foreground group-hover:text-primary transition-colors truncate"
            >
              <div className="size-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="size-3.5 text-primary" />
              </div>
              <span className="font-mono truncate">{resumeData.personal.email}</span>
            </a>
            <button
              onClick={() => handleCopy(resumeData.personal.email, "email")}
              className="p-1 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground shrink-0 transition-colors"
              title={lang === "en" ? "Copy Email" : "Salin Email"}
            >
              {copiedType === "email" ? (
                <Check className="size-3.5 text-emerald-500" />
              ) : (
                <Copy className="size-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* CTA Buttons & Social Links */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {/* Portfolio CTA Button */}
          <a href="#portofolio" className="btn-3d btn-3d-primary text-sm px-5 py-2.5">
            <span>
              {lang === "en" ? "Explore 22+ Projects" : "Eksplorasi 22+ Proyek"}
            </span>
            <ArrowRight className="size-4" />
          </a>

          {/* Download/Print CV Button */}
          <button
            onClick={handlePrint}
            className="btn-3d btn-3d-outline text-sm px-4 py-2.5"
          >
            <FileDown className="size-4 text-primary" />
            <span>
              {lang === "en" ? "Print / Export PDF" : "Cetak / Unduh PDF"}
            </span>
          </button>

          {/* GitHub Link */}
          <a
            href={resumeData.personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d btn-3d-outline text-xs px-3.5 py-2.5"
            title="GitHub"
          >
            <GithubIcon className="size-4" />
            <span>github/{resumeData.personal.github}</span>
          </a>

          {/* LinkedIn Link */}
          <a
            href={resumeData.personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d btn-3d-outline text-xs px-3.5 py-2.5"
            title="LinkedIn"
          >
            <LinkedinIcon className="size-4 text-blue-500" />
            <span>linkedin/in/{resumeData.personal.linkedin}</span>
          </a>

          {/* Instagram Link */}
          <a
            href={resumeData.personal.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d btn-3d-outline text-xs px-3.5 py-2.5"
            title="Instagram"
          >
            <InstagramIcon className="size-4 text-pink-500" />
            <span>instagram/@{resumeData.personal.instagram}</span>
          </a>
        </div>

        {/* Stat Highlights Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {resumeData.stats.map((stat, idx) => {
            const icons = [
              <Briefcase key="0" className="size-4 text-primary" />,
              <Sparkles key="1" className="size-4 text-primary" />,
              <Award key="2" className="size-4 text-primary" />,
              <GraduationCap key="3" className="size-4 text-primary" />,
            ];

            return (
              <div
                key={stat.label.en}
                className="p-4 rounded-2xl border border-border bg-card shadow-xs hover:border-primary/40 transition-all"
              >
                <div className="flex items-center gap-2 mb-2 text-muted-foreground text-xs font-medium">
                  {icons[idx]}
                  <span>{stat.label[lang]}</span>
                </div>
                <div className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                  {lang === "en" ? stat.value : stat.valueId}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
