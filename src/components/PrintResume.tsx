import { resumeData } from "@/data/resumeData";

export default function PrintResume() {
  return (
    <div className="hidden print:block text-black bg-white p-2">
      {/* Header */}
      <header className="border-b-2 border-black pb-3 mb-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold font-serif tracking-tight">
              {resumeData.personal.name}
            </h1>
            <p className="text-sm font-semibold uppercase tracking-wider text-neutral-800">
              {resumeData.personal.title} — {resumeData.personal.subTitle}
            </p>
          </div>
          <div className="text-right text-xs space-y-0.5 font-mono">
            <p>{resumeData.personal.phone}</p>
            <p>{resumeData.personal.email}</p>
            <p>{resumeData.personal.githubUrl}</p>
            <p>{resumeData.personal.linkedinUrl}</p>
          </div>
        </div>
        <div className="mt-2 text-xs text-neutral-700">
          <p><strong>Domisili:</strong> {resumeData.personal.addressDomicile}</p>
          <p><strong>KTP:</strong> {resumeData.personal.addressKTP}</p>
        </div>
      </header>

      {/* Profil Singkat */}
      <section className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 font-serif">
          Profil Singkat
        </h2>
        <p className="text-xs leading-relaxed text-neutral-800">
          {resumeData.personal.bio}
        </p>
      </section>

      {/* Pengalaman Kerja */}
      <section className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2 font-serif">
          Pengalaman Kerja
        </h2>
        <div className="space-y-3">
          {resumeData.experiences.map((exp) => (
            <div key={exp.id} className="text-xs">
              <div className="flex justify-between font-semibold">
                <span>{exp.company} — {exp.role}</span>
                <span className="font-mono">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside mt-1 space-y-0.5 text-neutral-700">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Pendidikan */}
      <section className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2 font-serif">
          Pendidikan
        </h2>
        <div className="space-y-2 text-xs">
          {resumeData.education.map((edu, idx) => (
            <div key={idx}>
              <div className="flex justify-between font-semibold">
                <span>{edu.institution} — {edu.degree}</span>
                <span className="font-mono">{edu.year}</span>
              </div>
              <p className="text-neutral-700 italic">{edu.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Keahlian Teknis */}
      <section className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2 font-serif">
          Keahlian Teknis & Manajemen
        </h2>
        <div className="text-xs space-y-1 text-neutral-800">
          <p>
            <strong>Bahasa Pemrograman:</strong>{" "}
            {resumeData.skills.programming.map((p) => `${p.name} (${p.level})`).join(", ")}
          </p>
          <p>
            <strong>Backend Frameworks:</strong> {resumeData.skills.backend.join(", ")}
          </p>
          <p>
            <strong>Frontend Frameworks:</strong> {resumeData.skills.frontend.join(", ")}
          </p>
          <p>
            <strong>Database & Cloud:</strong> {resumeData.skills.databases.join(", ")}
          </p>
          <p>
            <strong>Mobile Development:</strong> {resumeData.skills.mobile.join(", ")}
          </p>
          <p>
            <strong>Analisis & Manajemen:</strong> {resumeData.skills.analysisAndManagement.join(", ")}
          </p>
        </div>
      </section>

      {/* Portofolio Proyek (Ringkasan 22 Proyek) */}
      <section className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2 font-serif">
          Portofolio Proyek Terpilih ({resumeData.projects.length} Proyek)
        </h2>
        <div className="space-y-2 text-xs">
          {resumeData.projects.map((proj) => (
            <div key={proj.id} className="border-b border-neutral-200 pb-1.5">
              <div className="flex justify-between font-semibold">
                <span>{proj.title} ({proj.institution})</span>
                <span className="font-mono">{proj.period}</span>
              </div>
              <p className="text-[11px] text-neutral-700">
                <strong>Teknologi:</strong> {proj.techStack.join(", ")}
              </p>
              {proj.url && (
                <p className="text-[10px] text-neutral-600 font-mono">
                  URL: {proj.url}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Sertifikasi (14 Sertifikat) */}
      <section className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2 font-serif">
          Sertifikasi & Pelatihan Resmi
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px]">
          {resumeData.certificates.map((cert, idx) => (
            <div key={idx} className="flex justify-between border-b border-neutral-100 pb-0.5">
              <span>{cert.title} ({cert.issuer})</span>
              <span className="font-mono font-bold shrink-0 ml-2">{cert.date}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
