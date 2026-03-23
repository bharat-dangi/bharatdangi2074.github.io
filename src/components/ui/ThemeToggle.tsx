"use client";

import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <IconButton
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      size="small"
      sx={{ color: "var(--title-color)", "&:hover": { color: "var(--primary)" } }}
      aria-label="Toggle dark mode"
    >
      {resolvedTheme === "dark" ? (
        <LightModeIcon fontSize="medium" />
      ) : (
        <DarkModeIcon fontSize="medium" />
      )}
    </IconButton>
  );
}
