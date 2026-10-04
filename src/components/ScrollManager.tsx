"use client";

import { useEffect, useState } from "react";

export default function ScrollManager() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

      setScrollProgress(Math.min(100, Math.max(0, scrolled)));
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
    </>
  );
}
