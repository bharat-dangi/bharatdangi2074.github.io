import Image from "next/image";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GitHubIcon from "@mui/icons-material/GitHub";
import type { Project } from "@/types/portfolio";

export default function ProjectCard({ project }: Readonly<{ project: Project }>) {
  return (
    <div className="grid gap-6 px-6 sm:grid-cols-2 sm:items-center">
      <Image
        src={project.image}
        alt={project.title}
        width={320}
        height={220}
        className="rounded-lg w-full max-w-66.25 mx-auto sm:max-w-80 object-cover"
      />
      <div>
        <h3 className="text-lg font-medium text-(--title-color) mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-(--text-color) mb-3 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.links.map((link) => (
            <Button
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="small"
              endIcon={link.label === "Demo" ? <ArrowForwardIcon /> : <GitHubIcon />}
              sx={{
                bgcolor: "var(--primary)",
                color: "#fff",
                textTransform: "none",
                fontSize: "0.813rem",
                borderRadius: "0.5rem",
                "&:hover": { bgcolor: "var(--primary-alt)" },
              }}
            >
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
