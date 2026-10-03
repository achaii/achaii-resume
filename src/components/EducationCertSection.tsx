import { GraduationCap, Award, Calendar, BookOpen, CheckCircle } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function EducationCertSection() {
  return (
    <section id="pendidikan" className="py-16 sm:py-20 border-b border-border/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Education Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 border border-primary/20">
                <GraduationCap className="size-3.5" />
                <span>Akademik</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-2">
                Pendidikan Formal
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Latar belakang pendidikan formal di bidang Teknologi Informasi dan Komputer.
              </p>
            </div>

            <div className="space-y-4">
              {resumeData.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-3xl border border-border bg-card shadow-xs hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                      Tahun {edu.year}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">
                      Graduated
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-foreground/80 mb-3">
                    {edu.institution}
                  </p>

                  <div className="p-3 rounded-2xl bg-muted/50 border border-border/60 text-xs text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground/90 block mb-0.5">
                      Karya Akhir / Topik:
                    </span>
                    {edu.details}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column (7 cols) */}
          <div id="sertifikasi" className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 border border-primary/20">
                <Award className="size-3.5" />
                <span>Lisensi & Kompetensi</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-2">
                Sertifikasi & Pelatihan
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm">
                14 Sertifikasi profesional dan pelatihan teknis yang telah diselesaikan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[560px] overflow-y-auto pr-1">
              {resumeData.certificates.map((cert, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-2xl border border-border bg-card shadow-xs hover:border-primary/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                        {cert.badge || "Sertifikat"}
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground flex items-center gap-1">
                        <Calendar className="size-2.5" />
                        {cert.date}
                      </span>
                    </div>

                    <h4 className="font-semibold text-xs text-foreground mb-1.5 line-clamp-2">
                      {cert.title}
                    </h4>
                  </div>

                  <p className="text-[11px] text-muted-foreground line-clamp-1 border-t border-border/50 pt-1.5 mt-2">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
