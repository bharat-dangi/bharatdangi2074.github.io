import type { QualificationTab } from "@/types/portfolio";

export const qualificationTabs: QualificationTab[] = [
  {
    id: "education",
    label: "Education",
    entries: [
      {
        id: "edu-1",
        title: "Intermediate (Science)",
        institution: "KMC - Kathmandu",
        period: "2015 – 2017",
        side: "left",
        showLine: true,
      },
      {
        id: "edu-2",
        title: "Bachelor of Engineering in Computer Engineering",
        institution: "Tribhuvan University, Nepal",
        period: "2017 – 2022",
        side: "right",
        showLine: true,
      },
      {
        id: "edu-3",
        title: "Master of Information Technology",
        institution: "Australian Catholic University, Sydney",
        period: "Jul 2024 – Jul 2026",
        side: "left",
        showLine: false,
      },
    ],
  },
  {
    id: "work",
    label: "Work",
    entries: [
      {
        id: "work-1",
        title: "Junior Software Engineer",
        institution: "Encoders Inc.",
        period: "Nov 2020 – Jan 2022",
        side: "left",
        showLine: true,
      },
      {
        id: "work-2",
        title: "Software Engineer",
        institution: "PortPro | Drayage Software",
        period: "Jan 2022 – Jun 2023",
        side: "right",
        showLine: true,
      },
      {
        id: "work-3",
        title: "Senior Software Engineer",
        institution: "PortPro | Drayage Software",
        period: "Jun 2023 – Jul 2024",
        side: "left",
        showLine: true,
      },
      {
        id: "work-4",
        title: "Software Engineer",
        institution: "Arrow Transport Logistics & Quarantine Services",
        period: "May 2025 – Present",
        side: "right",
        showLine: false,
      },
    ],
  },
];
