"use client";

import { useState, useMemo } from "react";
import {
  FolderGit2,
  ExternalLink,
  Search,
  Layers,
  Calendar,
  Building2,
  X,
} from "lucide-react";
import { resumeData } from "@/data/resumeData";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsSection() {
  const { lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("all");

  const categories = [
    {
      id: "all",
      label: { en: "All Projects", id: "Semua Proyek" },
      count: resumeData.projects.length,
    },
    {
      id: "gov",
      label: { en: "Government & DLH", id: "Pemerintahan & DLH" },
      count: resumeData.projects.filter((p) => p.category === "gov").length,
    },
    {
      id: "education",
      label: { en: "Education & CBT", id: "Pendidikan & CBT" },
      count: resumeData.projects.filter((p) => p.category === "education").length,
    },
    {
      id: "business",
      label: { en: "E-Commerce & Business", id: "E-Commerce & Bisnis" },
      count: resumeData.projects.filter((p) => p.category === "business").length,
    },
    {
      id: "mobile",
      label: { en: "Mobile Apps", id: "Aplikasi Mobile" },
      count: resumeData.projects.filter((p) => p.category === "mobile").length,
    },
  ];

  const filteredProjects = useMemo(() => {
    return resumeData.projects.filter((project) => {
      const matchCategory =
        selectedCategory === "all" || project.category === selectedCategory;

      const q = searchQuery === "all" ? "" : searchQuery.toLowerCase().trim();
      if (!q) return matchCategory;

      const matchSearch =
        project.title[lang].toLowerCase().includes(q) ||
        project.institution.toLowerCase().includes(q) ||
        project.role[lang].toLowerCase().includes(q) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(q)) ||
        project.description[lang].some((d) => d.toLowerCase().includes(q));

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery, lang]);

  return (
    <section id="portofolio" className="py-16 sm:py-20 border-b border-border/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 border border-primary/20">
              <FolderGit2 className="size-3.5" />
              <span>
                {lang === "en" ? "Selected Works" : "Portofolio Unggulan"}
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-2">
              {lang === "en"
                ? "Information Systems Portfolio"
                : "Daftar Proyek Sistem Informasi"}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
              {lang === "en"
                ? "Comprehensive record of 22 real-world enterprise platforms engineered for regional government agencies, educational institutions, and private enterprises."
                : "Kompilasi 22+ proyek nyata yang telah dikembangkan secara profesional untuk dinas pemerintahan, perusahaan swasta, dan institusi pendidikan."}
            </p>
          </div>

          <div className="text-xs font-mono text-muted-foreground bg-card border border-border px-3.5 py-1.5 rounded-full self-start md:self-auto">
            {lang === "en" ? "Showing" : "Menampilkan"}{" "}
            <span className="font-bold text-foreground">
              {filteredProjects.length}
            </span>{" "}
            {lang === "en"
              ? `of ${resumeData.projects.length} Projects`
              : `dari ${resumeData.projects.length} Proyek`}
          </div>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`text-xs px-3.5 py-2 rounded-full font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                        : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <span>{cat.label[lang]}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isActive
                          ? "bg-primary-foreground/20 text-primary-foreground font-bold"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            <div className="relative min-w-[240px] sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={
                  lang === "en"
                    ? "Search title, tech (Laravel, React, Ionic)..."
                    : "Cari judul, teknologi (Laravel, React, Ionic)..."
                }
                value={searchQuery === "all" ? "" : searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-9 pr-8 text-xs rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              {searchQuery && searchQuery !== "all" && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-muted-foreground hover:text-foreground"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-3xl border border-dashed border-border bg-card/50">
            <Layers className="size-10 text-muted-foreground mx-auto mb-3" />
            <p className="text-base font-medium text-foreground mb-1">
              {lang === "en"
                ? "No projects match your filter"
                : "Tidak ada proyek yang sesuai dengan pencarian"}
            </p>
            <p className="text-xs text-muted-foreground mb-4">
              {lang === "en"
                ? "Try a different keyword or reset filters."
                : "Coba kata kunci lain atau ubah kategori filter."}
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="btn-3d btn-3d-outline text-xs px-4 py-2"
            >
              {lang === "en" ? "Reset Filter" : "Reset Filter"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col justify-between p-6 rounded-3xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-200"
              >
                <div>
                  {/* Card Meta: Period & Institution */}
                  <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground mb-3 font-mono">
                    <span className="flex items-center gap-1.5 font-medium text-foreground/80">
                      <Building2 className="size-3.5 text-primary shrink-0" />
                      <span className="truncate max-w-[240px] sm:max-w-[320px]">
                        {project.institution}
                      </span>
                    </span>

                    <span className="flex items-center gap-1 shrink-0 bg-muted/70 px-2 py-0.5 rounded-md">
                      <Calendar className="size-3" />
                      <span>{project.period}</span>
                    </span>
                  </div>

                  {/* Project Title & Role */}
                  <div className="mb-4">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {project.title[lang]}
                    </h3>
                    <div className="mt-1.5 flex items-center gap-2">
                      <span className="inline-block text-[11px] font-medium bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-full">
                        {project.role[lang]}
                      </span>
                    </div>
                  </div>

                  {/* Bullet descriptions */}
                  <ul className="space-y-1.5 mb-5 text-xs text-foreground/75 leading-relaxed">
                    {project.description[lang].map((desc, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="pt-4 border-t border-border/60">
                    <p className="text-[10px] uppercase font-mono text-muted-foreground tracking-wider mb-2">
                      {lang === "en" ? "Tech Stack:" : "Teknologi yang digunakan:"}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono bg-muted/80 text-foreground/85 px-2 py-0.5 rounded-md border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Live URL Link Button - ONLY displayed when URL is active! */}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline group/link"
                      >
                        <ExternalLink className="size-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        <span className="truncate">
                          {project.url.replace(/^https?:\/\//, "")}
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
