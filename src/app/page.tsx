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
      {/* Interactive Web Page Layout */}
      <div className="print:hidden relative flex min-w-0 flex-col [&>*]:border-b [&>*]:border-border/60">
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
