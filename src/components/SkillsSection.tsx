import {
  Code,
  Server,
  Layers,
  Database,
  Smartphone,
  CheckCircle,
  FileSpreadsheet,
} from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function SkillsSection() {
  return (
    <section id="keahlian" className="py-16 sm:py-20 border-b border-border/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 border border-primary/20">
            <Code className="size-3.5" />
            <span>Kompetensi Teknis</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-2">
            Keahlian & Teknologi
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
            Kombinasi bahasa pemrograman, framework antarmuka, arsitektur backend, manajemen basis data, serta analisis proses bisnis.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Programming Languages */}
          <div className="p-5 rounded-3xl border border-border bg-card shadow-xs hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="size-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Code className="size-4" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                Bahasa Pemrograman
              </h3>
            </div>
            <div className="space-y-2.5">
              {resumeData.skills.programming.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between p-2 rounded-xl bg-muted/50 border border-border/50 text-xs"
                >
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <span
                    className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      lang.level === "Advance"
                        ? "bg-primary/15 text-primary border border-primary/30"
                        : "bg-muted text-muted-foreground border border-border"
                    }`}
                  >
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Frameworks */}
          <div className="p-5 rounded-3xl border border-border bg-card shadow-xs hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="size-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Server className="size-4" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                Backend & Frameworks
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.backend.map((item) => (
                <span
                  key={item}
                  className="text-xs font-mono px-3 py-1 rounded-xl bg-muted/60 border border-border text-foreground/90 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend Frameworks & Libraries */}
          <div className="p-5 rounded-3xl border border-border bg-card shadow-xs hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="size-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Layers className="size-4" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                Frontend & Visualisasi
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.frontend.map((item) => (
                <span
                  key={item}
                  className="text-xs font-mono px-2.5 py-1 rounded-xl bg-muted/60 border border-border text-foreground/90 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Databases & Storage */}
          <div className="p-5 rounded-3xl border border-border bg-card shadow-xs hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="size-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Database className="size-4" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                Database & Cloud Storage
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.databases.map((item) => (
                <span
                  key={item}
                  className="text-xs font-mono px-3 py-1 rounded-xl bg-muted/60 border border-border text-foreground/90 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile & Hardware Integration */}
          <div className="p-5 rounded-3xl border border-border bg-card shadow-xs hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="size-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Smartphone className="size-4" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                Mobile & Bridge Perangkat
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.mobile.map((item) => (
                <span
                  key={item}
                  className="text-xs font-mono px-2.5 py-1 rounded-xl bg-muted/60 border border-border text-foreground/90 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Analysis, Project & Documentation */}
          <div className="p-5 rounded-3xl border border-border bg-card shadow-xs hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="size-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <FileSpreadsheet className="size-4" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                Analisis & Manajemen
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.analysisAndManagement.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 rounded-xl bg-muted/60 border border-border text-foreground/90 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
