import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function ExperienceSection() {
  return (
    <section id="pengalaman" className="py-16 sm:py-20 border-b border-border/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 border border-primary/20">
            <Briefcase className="size-3.5" />
            <span>Rekam Jejak Karir</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-2">
            Pengalaman Kerja
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
            Perjalanan profesional mencakup lebih dari satu dekade dalam rekayasa perangkat lunak, dukungan infrastruktur IT, dan tata kelola data.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-border/80 space-y-10">
          {resumeData.experiences.map((exp, index) => {
            const isPresent = exp.period.toLowerCase().includes("saat ini");

            return (
              <div key={exp.id} className="relative group">
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 size-7 sm:size-8 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 ${
                    isPresent
                      ? "border-primary bg-primary text-primary-foreground shadow-md"
                      : "border-border bg-card text-muted-foreground group-hover:border-primary group-hover:text-primary"
                  }`}
                >
                  <Briefcase className="size-3.5" />
                </div>

                {/* Experience Card */}
                <div className="p-5 sm:p-6 rounded-3xl border border-border bg-card shadow-xs group-hover:border-primary/40 transition-all">
                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-base font-medium text-foreground/80">
                        {exp.company}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-border bg-muted/60 text-muted-foreground self-start sm:self-auto">
                      <Calendar className="size-3 text-primary" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Bullet achievements */}
                  <ul className="mt-4 space-y-2.5">
                    {exp.highlights.map((point, pIdx) => (
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
