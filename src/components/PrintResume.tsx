"use client";

import { resumeData } from "@/data/resumeData";
import { useLanguage } from "@/context/LanguageContext";

export default function PrintResume() {
  const { lang } = useLanguage();

  return (
    <div className="hidden print:block text-slate-900 bg-white p-2 font-sans">
      {/* Header */}
      <header className="border-b border-slate-300 pb-3 mb-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold font-serif tracking-tight text-slate-950">
              {resumeData.personal.name}
            </h1>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-700 mt-0.5">
              {resumeData.personal.title[lang]} — {resumeData.personal.subTitle[lang]}
            </p>
          </div>
          <div className="text-right text-xs space-y-0.5 font-mono text-slate-700">
            <p>{resumeData.personal.phone}</p>
            <p>{resumeData.personal.email}</p>
            <p>{resumeData.personal.githubUrl}</p>
            <p>{resumeData.personal.linkedinUrl}</p>
          </div>
        </div>
      </header>

      {/* Summary Profile */}
      <section className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-1.5 font-serif">
          {lang === "en" ? "Professional Summary" : "Profil Singkat"}
        </h2>
        <p className="text-xs leading-relaxed text-slate-700">
          {resumeData.personal.bio[lang]}
        </p>
      </section>

      {/* Work Experience */}
      <section className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 font-serif">
          {lang === "en" ? "Professional Experience" : "Pengalaman Kerja"}
        </h2>
        <div className="space-y-3">
          {resumeData.experiences.map((exp) => (
            <div key={exp.id} className="text-xs">
              <div className="flex justify-between font-semibold text-slate-900">
                <span>
                  {exp.company} — {exp.role[lang]}
                </span>
                <span className="font-mono text-slate-600">{exp.period[lang]}</span>
              </div>
              <ul className="list-disc list-inside mt-1 space-y-0.5 text-slate-700 pl-1">
                {exp.highlights[lang].map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 font-serif">
          {lang === "en" ? "Education" : "Pendidikan"}
        </h2>
        <div className="space-y-2 text-xs">
          {resumeData.education.map((edu, idx) => (
            <div key={idx}>
              <div className="flex justify-between font-semibold text-slate-900">
                <span>
                  {edu.institution} — {edu.degree[lang]}
                </span>
                <span className="font-mono text-slate-600">{edu.year}</span>
              </div>
              <p className="text-slate-600 italic text-[11px] mt-0.5">
                {edu.details[lang]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 font-serif">
          {lang === "en" ? "Technical & Architectural Skills" : "Keahlian Teknis & Manajemen"}
        </h2>
        <div className="text-xs space-y-1 text-slate-800 leading-relaxed">
          <p>
            <strong>{lang === "en" ? "Programming Languages:" : "Bahasa Pemrograman:"}</strong>{" "}
            {resumeData.skills.programming.map((p) => `${p.name} (${p.level})`).join(", ")}
          </p>
          <p>
            <strong>{lang === "en" ? "Backend & Frameworks:" : "Backend Frameworks:"}</strong>{" "}
            {resumeData.skills.backend.join(", ")}
          </p>
          <p>
            <strong>{lang === "en" ? "Frontend & UI:" : "Frontend Frameworks:"}</strong>{" "}
            {resumeData.skills.frontend.join(", ")}
          </p>
          <p>
            <strong>{lang === "en" ? "Databases & Storage:" : "Database & Cloud:"}</strong>{" "}
            {resumeData.skills.databases.join(", ")}
          </p>
          <p>
            <strong>{lang === "en" ? "Mobile Development:" : "Mobile Development:"}</strong>{" "}
            {resumeData.skills.mobile.join(", ")}
          </p>
          <p>
            <strong>{lang === "en" ? "Analysis & Operations:" : "Analisis & Manajemen:"}</strong>{" "}
            {resumeData.skills.analysisAndManagement.join(", ")}
          </p>
        </div>
      </section>

      {/* Selected Portfolio Highlights (22 Projects) */}
      <section className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 font-serif">
          {lang === "en"
            ? `Portfolio of Selected Projects (${resumeData.projects.length} Systems)`
            : `Portofolio Proyek Terpilih (${resumeData.projects.length} Proyek)`}
        </h2>
        <div className="space-y-2 text-xs">
          {resumeData.projects.map((proj) => (
            <div key={proj.id} className="pb-1.5">
              <div className="flex justify-between font-semibold text-slate-900">
                <span>
                  {proj.title[lang]} — <span className="font-normal text-slate-600">{proj.institution}</span>
                </span>
                <span className="font-mono text-slate-600 shrink-0 ml-2">{proj.period}</span>
              </div>
              <p className="text-[11px] text-slate-700">
                <strong>{lang === "en" ? "Tech Stack:" : "Teknologi:"}</strong> {proj.techStack.join(", ")}
              </p>
              {proj.url && (
                <p className="text-[10px] text-slate-500 font-mono">
                  {proj.url}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 font-serif">
          {lang === "en" ? "Professional Certifications & Training" : "Sertifikasi & Pelatihan Resmi"}
        </h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-[11px] text-slate-800">
          {resumeData.certificates.map((cert, idx) => (
            <div key={idx} className="flex justify-between py-0.5">
              <span className="truncate pr-2">{cert.title} ({cert.issuer})</span>
              <span className="font-mono font-bold text-slate-600 shrink-0">{cert.date}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
