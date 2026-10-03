"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { resumeData } from "@/data/resumeData";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Pak Deni, saya ${name || "pengunjung website"}${
      email ? ` (${email})` : ""
    }:\n\n${message || "Saya tertarik untuk berdiskusi mengenai proyek / peluang kerja sama."}`;
    const url = `https://wa.me/${resumeData.personal.phoneClean}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  };

  const handleEmailSend = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Pesan Portofolio dari ${name || "Pengunjung Website"}`;
    const body = `Halo Deni,\n\n${message}\n\nDari: ${name}\nEmail: ${email}`;
    const mailto = `mailto:${resumeData.personal.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section id="kontak" className="py-16 sm:py-20 border-b border-border/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 border border-primary/20">
            <MessageSquare className="size-3.5" />
            <span>Koneksi & Diskusi</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-2">
            Hubungi Saya
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
            Tertarik untuk merekrut, mengajak kolaborasi proyek, atau ingin konsultasi seputar pengembangan sistem informasi? Mari terhubung!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contacts & Addresses (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp & Phone Card */}
            <div className="p-4 rounded-3xl border border-border bg-card shadow-xs">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                  WhatsApp / Telepon
                </span>
                <button
                  onClick={() => handleCopy(resumeData.personal.phone, "phone")}
                  className="p-1 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground text-xs flex items-center gap-1 transition-colors"
                  title="Salin Nomor"
                >
                  {copiedType === "phone" ? (
                    <span className="text-emerald-500 flex items-center gap-1 font-mono text-[10px]">
                      <Check className="size-3" /> Tersalin
                    </span>
                  ) : (
                    <Copy className="size-3" />
                  )}
                </button>
              </div>

              <a
                href={`https://wa.me/${resumeData.personal.phoneClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary font-mono font-medium text-base transition-colors"
              >
                <div className="size-9 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="size-4" />
                </div>
                <span>{resumeData.personal.phone}</span>
              </a>
            </div>

            {/* Email Card */}
            <div className="p-4 rounded-3xl border border-border bg-card shadow-xs">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                  Email Langsung
                </span>
                <button
                  onClick={() => handleCopy(resumeData.personal.email, "email")}
                  className="p-1 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground text-xs flex items-center gap-1 transition-colors"
                  title="Salin Email"
                >
                  {copiedType === "email" ? (
                    <span className="text-emerald-500 flex items-center gap-1 font-mono text-[10px]">
                      <Check className="size-3" /> Tersalin
                    </span>
                  ) : (
                    <Copy className="size-3" />
                  )}
                </button>
              </div>

              <a
                href={`mailto:${resumeData.personal.email}`}
                className="flex items-center gap-3 text-foreground hover:text-primary font-mono font-medium text-base transition-colors"
              >
                <div className="size-9 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail className="size-4" />
                </div>
                <span className="truncate">{resumeData.personal.email}</span>
              </a>
            </div>

            {/* Address Details */}
            <div className="p-5 rounded-3xl border border-border bg-card shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                <MapPin className="size-4 text-primary" />
                <span>Alamat & Lokasi</span>
              </div>

              {/* Domicile */}
              <div className="text-xs text-muted-foreground border-l-2 border-primary/40 pl-3">
                <span className="font-semibold text-foreground block mb-0.5">
                  Domisili Saat Ini:
                </span>
                {resumeData.personal.addressDomicile}
              </div>

              {/* KTP */}
              <div className="text-xs text-muted-foreground border-l-2 border-border pl-3">
                <span className="font-semibold text-foreground block mb-0.5">
                  Alamat KTP (Bandung):
                </span>
                {resumeData.personal.addressKTP}
              </div>
            </div>

            {/* Social profiles */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={resumeData.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl border border-border bg-card hover:border-primary/40 text-xs font-medium text-foreground flex items-center gap-2 group transition-all"
              >
                <GithubIcon className="size-4 text-foreground group-hover:text-primary" />
                <span className="truncate">GitHub</span>
                <ExternalLink className="size-3 text-muted-foreground ml-auto" />
              </a>

              <a
                href={resumeData.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl border border-border bg-card hover:border-primary/40 text-xs font-medium text-foreground flex items-center gap-2 group transition-all"
              >
                <LinkedinIcon className="size-4 text-blue-500" />
                <span className="truncate">LinkedIn</span>
                <ExternalLink className="size-3 text-muted-foreground ml-auto" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Quick Message Composer (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-7 rounded-3xl border border-border bg-card shadow-xs">
            <h3 className="font-heading text-xl font-bold text-foreground mb-1">
              Kirim Pesan Cepat
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-5">
              Tulis pesan Anda di bawah ini untuk langsung diteruskan via WhatsApp atau aplikasi Email pilihan Anda.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-foreground/80 mb-1.5">
                    Nama Anda
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Budi Santoso"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-2xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-foreground/80 mb-1.5">
                    Email Anda (Opsional)
                  </label>
                  <input
                    type="email"
                    placeholder="nama@perusahaan.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-2xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground/80 mb-1.5">
                  Isi Pesan / Kebutuhan
                </label>
                <textarea
                  rows={4}
                  placeholder="Tuliskan proyek, tawaran pekerjaan, atau pertanyaan yang ingin didiskusikan..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 text-xs rounded-2xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="btn-3d btn-3d-primary text-xs py-2.5 flex-1 flex items-center justify-center gap-2"
                >
                  <Send className="size-3.5" />
                  <span>Kirim via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSend}
                  className="btn-3d btn-3d-outline text-xs py-2.5 flex-1 flex items-center justify-center gap-2"
                >
                  <Mail className="size-3.5 text-primary" />
                  <span>Kirim via Email</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
