"use client";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LandscapeIcon from "@mui/icons-material/Landscape";
import MessageIcon from "@mui/icons-material/Message";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useScrollActive } from "@/hooks/useScrollActive";
import { useScrollHeader } from "@/hooks/useScrollHeader";

const navLinks = [
  { href: "#home", label: "Home", Icon: HomeIcon },
  { href: "#about", label: "About", Icon: PersonIcon },
  { href: "#skills", label: "Skills", Icon: DescriptionIcon },
  { href: "#services", label: "Services", Icon: WorkOutlineIcon },
  { href: "#portfolio", label: "Portfolio", Icon: LandscapeIcon },
  { href: "#contact", label: "Contact", Icon: MessageIcon },
];

export default function Header() {
  const activeSection = useScrollActive();
  const hasShadow = useScrollHeader();

  return (
    <>
      {/* ── Mobile: bottom tab bar ── */}
      <header className="fixed bottom-0 left-0 w-full z-100 bg-(--body-bg) shadow-[0_-1px_4px_rgba(0,0,0,0.12)] md:hidden">
        <nav aria-label="Main navigation">
          <ul className="flex justify-around items-center h-16">
            {navLinks.map(({ href, label, Icon }) => {
              const isActive = activeSection === href.replace("#", "");
              return (
                <li key={href} className="flex-1">
                  <a
                    href={href}
                    className={`flex flex-col items-center justify-center gap-0.5 py-2 w-full text-[10px] font-medium transition-colors ${
                      isActive
                        ? "text-(--primary)"
                        : "text-(--text-color) hover:text-(--primary)"
                    }`}
                  >
                    <Icon sx={{ fontSize: "1.25rem" }} />
                    <span>{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      {/* Theme toggle — floating top-right on mobile */}
      <div className="fixed top-3 right-4 z-100 md:hidden">
        <ThemeToggle />
      </div>

      {/* ── Desktop: top bar ── */}
      <header
        className={`hidden md:block fixed top-0 left-0 w-full z-100 bg-(--body-bg) transition-shadow ${
          hasShadow ? "shadow-[0_1px_4px_rgba(0,0,0,0.15)]" : ""
        }`}
      >
        <nav
          className="max-w-[968px] h-18 flex justify-between items-center mx-auto px-4 lg:px-0"
          aria-label="Main navigation"
        >
          <a
            href="#home"
            className="text-(--title-color) font-semibold hover:text-(--primary) transition-colors"
          >
            Bharat
          </a>

          <ul className="flex gap-8 items-center">
            {navLinks.map(({ href, label }) => {
              const isActive = activeSection === href.replace("#", "");
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? "text-(--primary)"
                        : "text-(--title-color) hover:text-(--primary)"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          <ThemeToggle />
        </nav>
      </header>
    </>
  );
}
