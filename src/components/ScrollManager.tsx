"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollManager() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

      setScrollProgress(Math.min(100, Math.max(0, scrolled)));
      setShowScrollTop(winScroll > 180);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // IntersectionObserver for smooth scroll reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elementsToReveal = document.querySelectorAll(".scroll-reveal");
    elementsToReveal.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Sleek Scroll Progress Bar at the top of the viewport */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent pointer-events-none no-print"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-primary via-red-500 to-amber-500 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(233,17,0,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Scroll to Top Button with Circular Progress Track */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className={`fixed bottom-6 right-6 z-40 size-11 rounded-full bg-card/95 backdrop-blur-md border border-border/80 text-foreground hover:text-primary hover:border-primary/50 flex items-center justify-center shadow-lg transition-all duration-300 no-print group ${
          showScrollTop
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-4 scale-90 pointer-events-none"
        }`}
        title="Kembali ke atas"
      >
        {/* Circular SVG reading progress track */}
        <svg
          className="absolute inset-0 size-full -rotate-90 pointer-events-none p-0.5"
          viewBox="0 0 44 44"
        >
          <circle
            cx="22"
            cy="22"
            r="18"
            className="stroke-muted/30 dark:stroke-muted-foreground/20"
            strokeWidth="2.5"
            fill="none"
          />
          <circle
            cx="22"
            cy="22"
            r="18"
            className="stroke-primary transition-all duration-150"
            strokeWidth="2.5"
            fill="none"
            strokeDasharray={2 * Math.PI * 18}
            strokeDashoffset={
              2 * Math.PI * 18 - (scrollProgress / 100) * (2 * Math.PI * 18)
            }
            strokeLinecap="round"
          />
        </svg>

        <ArrowUp className="size-4 text-foreground group-hover:text-primary group-hover:-translate-y-0.5 transition-all duration-200" />
      </button>
    </>
  );
}
