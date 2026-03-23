"use client";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Chip from "@mui/material/Chip";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import TableChartIcon from "@mui/icons-material/TableChart";
import BuildIcon from "@mui/icons-material/Build";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import DevicesIcon from "@mui/icons-material/Devices";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { SkillCategory } from "@/types/portfolio";

const iconMap: Record<string, React.ElementType> = {
  Code: CodeIcon,
  Storage: StorageIcon,
  Cloud: CloudIcon,
  TableChart: TableChartIcon,
  Build: BuildIcon,
  AutoStories: AutoStoriesIcon,
  Devices: DevicesIcon,
};

interface Props {
  category: SkillCategory;
  expanded: boolean;
  onChange: (id: string) => void;
}

export default function SkillAccordionItem({ category, expanded, onChange }: Readonly<Props>) {
  const Icon = iconMap[category.icon] ?? CodeIcon;

  return (
    <Accordion
      expanded={expanded}
      onChange={() => onChange(category.id)}
      disableGutters
      elevation={0}
      sx={{
        background: "transparent",
        border: "none",
        "&::before": { display: "none" },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "var(--primary)", fontSize: "2rem" }} />}
        sx={{ px: 0 }}
      >
        <div className="flex items-center gap-3">
          <Icon sx={{ color: "var(--primary)", fontSize: "2rem" }} />
          <div>
            <h3 className="text-base font-semibold text-(--title-color)">
              {category.label}
            </h3>
            <span className="text-xs text-(--text-color-light)">
              {category.subtitle}
            </span>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails sx={{ pl: "2.7rem", pb: 4 }}>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <Chip
              key={skill.name}
              label={skill.name}
              size="small"
              variant="outlined"
              sx={{
                borderColor: "var(--primary)",
                color: "var(--text-color)",
                fontFamily: "Poppins, sans-serif",
                fontSize: "0.75rem",
                "&:hover": {
                  bgcolor: "var(--primary)",
                  color: "#fff",
                  borderColor: "var(--primary)",
                },
                transition: "all 0.2s",
              }}
            />
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
