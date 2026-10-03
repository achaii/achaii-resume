"use client";

import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { resumeData } from "@/data/resumeData";
import { useLanguage } from "@/context/LanguageContext";

export default function ExperienceSection() {
  const { lang } = useLanguage();

  return (
    <section id="pengalaman" className="py-16 sm:py-20 border-b border-border/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 border border-primary/20">
            <Briefcase className="size-3.5" />
            <span>
              {lang === "en" ? "Career Path" : "Rekam Jejak Karir"}
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-2">
            {lang === "en" ? "Work Experience" : "Pengalaman Kerja"}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
            {lang === "en"
              ? "Over a decade of hands-on impact spanning enterprise software engineering, banking IT operations, and institutional data governance."
              : "Perjalanan profesional mencakup lebih dari satu dekade dalam rekayasa perangkat lunak, dukungan infrastruktur IT, dan tata kelola data."}
          </p>
        </div>

        {/* Timeline Container with Perfect Flexbox Center Alignment */}
        <div className="space-y-6 sm:space-y-8">
          {resumeData.experiences.map((exp, idx) => {
            const isPresent =
              exp.period[lang].toLowerCase().includes("present") ||
              exp.period[lang].toLowerCase().includes("saat ini");
            const isLast = idx === resumeData.experiences.length - 1;

            return (
              <div key={exp.id} className="flex gap-4 sm:gap-6 items-start group">
                {/* Timeline Axis Column: Circle and Vertical Line both centered on same axis */}
                <div className="flex flex-col items-center self-stretch shrink-0 pt-1">
                  {/* Circle Node: Perfectly on the timeline axis, outside the card */}
                  <div
                    className={`size-8 sm:size-9 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 shrink-0 z-10 ${
                      isPresent
                        ? "border-primary bg-primary text-primary-foreground shadow-md"
                        : "border-border bg-card text-muted-foreground group-hover:border-primary group-hover:text-primary shadow-xs"
                    }`}
                  >
                    <Briefcase className="size-3.5 sm:size-4" />
                  </div>

                  {/* Vertical Connecting Line */}
                  {!isLast && (
                    <div className="w-0.5 bg-border/80 flex-1 my-2 min-h-[2.5rem]" />
                  )}
                </div>

                {/* Experience Card: Sibling to the left column, never overlapping */}
                <div className="flex-1 p-5 sm:p-6 rounded-3xl border border-border bg-card shadow-xs group-hover:border-primary/40 transition-all">
                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role[lang]}
                      </h3>
                      <p className="text-base font-medium text-foreground/80">
                        {exp.company}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-border bg-muted/60 text-muted-foreground self-start sm:self-auto">
                      <Calendar className="size-3 text-primary" />
                      <span>{exp.period[lang]}</span>
                    </div>
                  </div>

                  {/* Bullet achievements */}
                  <ul className="mt-4 space-y-2.5">
                    {exp.highlights[lang].map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/75 leading-relaxed"
                      >
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
