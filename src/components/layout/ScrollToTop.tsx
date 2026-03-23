"use client";

import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useScrollTop } from "@/hooks/useScrollTop";

export default function ScrollToTop() {
  const visible = useScrollTop();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fab
      size="small"
      onClick={handleClick}
      aria-label="Scroll to top"
      sx={{
        position: "fixed",
        right: "1rem",
        bottom: visible ? "5rem" : "-20%",
        transition: "bottom 0.4s",
        bgcolor: "var(--primary)",
        color: "#fff",
        opacity: 0.8,
        "&:hover": { bgcolor: "var(--primary-alt)", opacity: 1 },
        zIndex: 10,
      }}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
}
