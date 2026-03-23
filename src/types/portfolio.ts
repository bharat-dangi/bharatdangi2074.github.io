export interface SkillItem {
  name: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  subtitle: string;
  icon: string;
  skills: SkillItem[];
}

export interface QualificationEntry {
  id: string;
  title: string;
  institution: string;
  period: string;
  side: "left" | "right";
  showLine: boolean;
}

export interface QualificationTab {
  id: "education" | "work";
  label: string;
  entries: QualificationEntry[];
}

export interface ServiceItem {
  id: string;
  title: string;
  muiIcon: string;
  bullets: string[];
}

export interface ProjectLink {
  label: "Demo" | "Code";
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  links: ProjectLink[];
}

export interface NavLink {
  href: string;
  label: string;
  muiIcon: string;
}
