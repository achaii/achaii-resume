"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationCertSection from "@/components/EducationCertSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PrintResume from "@/components/PrintResume";

export default function Home() {
  return (
    <LanguageProvider>
      {/* Interactive Web Page with Rulers Layout per DESIGN.md */}
      <div className="print:hidden relative flex min-w-0 flex-col after:pointer-events-none after:absolute after:inset-y-0 after:left-0 after:right-0 after:z-40 after:mx-auto after:w-full after:max-w-[calc(72rem-2rem)] after:border-x after:border-black/10 after:content-[''] dark:after:border-white/10 [&>*]:border-b [&>*]:border-black/10 dark:[&>*]:border-white/10">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationCertSection />
          <ContactSection />
        </main>
        <Footer />
      </div>

      {/* Print-only view (Activated upon Ctrl+P or clicking "Cetak / Unduh PDF") */}
      <PrintResume />
    </LanguageProvider>
  );
}
