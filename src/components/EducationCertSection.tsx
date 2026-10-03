"use client";

import { GraduationCap, Award, Calendar, ExternalLink } from "lucide-react";
import { resumeData } from "@/data/resumeData";
import { useLanguage } from "@/context/LanguageContext";

export default function EducationCertSection() {
  const { lang } = useLanguage();

  return (
    <>
      {/* Education Section */}
      <section id="pendidikan" className="py-16 sm:py-20 border-b border-border/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 border border-primary/20">
              <GraduationCap className="size-3.5" />
              <span>{lang === "en" ? "Academic Credentials" : "Akademik"}</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-2">
              {lang === "en" ? "Formal Education" : "Pendidikan Formal"}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
              {lang === "en"
                ? "Higher education background specialized in Informatics Engineering and Computer Information Systems."
                : "Latar belakang pendidikan formal di bidang Teknologi Informasi dan Komputer."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {resumeData.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-border bg-card shadow-xs hover:border-primary/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                      {lang === "en" ? `Class of ${edu.year}` : `Tahun ${edu.year}`}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">
                      Graduated
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                    {edu.degree[lang]}
                  </h3>
                  <p className="text-sm font-medium text-foreground/80 mb-4">
                    {edu.institution}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-muted/50 border border-border/60 text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground/90 block mb-1">
                    {lang === "en" ? "Final Project / Thesis:" : "Karya Akhir / Topik:"}
                  </span>
                  {edu.details[lang]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section - Spacious Full-Width Grid (No Cramped Scrollbars!) */}
      <section id="sertifikasi" className="py-16 sm:py-20 border-b border-border/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 border border-primary/20">
                <Award className="size-3.5" />
                <span>{lang === "en" ? "Licenses & Competencies" : "Lisensi & Kompetensi"}</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-2">
                {lang === "en" ? "Certifications & Training" : "Sertifikasi & Pelatihan"}
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
                {lang === "en"
                  ? "14 Verified professional certifications, technical bootcamps, and specialized credentials earned across cloud, web, and infrastructure engineering."
                  : "14 Sertifikasi profesional dan pelatihan teknis yang telah diselesaikan untuk memperkuat keahlian rekayasa perangkat lunak."}
              </p>
            </div>

            <div className="text-xs font-mono text-muted-foreground bg-card border border-border px-3.5 py-1.5 rounded-full self-start md:self-auto">
              {lang === "en" ? "14 Official Credentials" : "14 Sertifikat Resmi"}
            </div>
          </div>

          {/* Spacious Responsive Grid: 1 col on mobile, 2 on sm, 3 on md, 4 on lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {resumeData.certificates.map((cert, index) => (
              <div
                key={index}
                className="p-5 rounded-3xl border border-border bg-card shadow-xs hover:border-primary/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
                      {cert.badge}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                      <Calendar className="size-3 text-primary" />
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
                    {cert.title}
                  </h3>
                </div>

                <div className="pt-3 border-t border-border/60">
                  <p className="text-xs text-muted-foreground font-medium line-clamp-2">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
