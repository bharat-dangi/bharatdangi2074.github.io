"use client";

import { useEffect, useState } from "react";

const sectionIds = ["home", "about", "skills", "services", "portfolio", "contact"];

export function useScrollActive() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const sectionTop = el.offsetTop - 50;
        const sectionHeight = el.offsetHeight;
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
}
