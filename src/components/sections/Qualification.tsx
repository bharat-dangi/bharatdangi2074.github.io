"use client";

import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SchoolIcon from "@mui/icons-material/School";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SectionHeader from "@/components/ui/SectionHeader";
import TimelineItem from "@/components/ui/TimelineItem";
import { qualificationTabs } from "@/data/qualification";

export default function Qualification() {
  const [activeTab, setActiveTab] = useState<"education" | "work">("education");

  const currentTab = qualificationTabs.find((t) => t.id === activeTab)!;

  return (
    <section className="pt-8 pb-16 md:pt-24 md:pb-8">
      <div className="max-w-[768px] mx-auto px-6 md:px-4 lg:px-0">
        <SectionHeader title="Qualification" subtitle="My Personal Journey" />

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onChange={(_, val) => setActiveTab(val)}
          centered
          sx={{
            mb: 4,
            "& .MuiTab-root": {
              color: "var(--title-color)",
              textTransform: "none",
              fontSize: "1.125rem",
              fontWeight: 500,
              fontFamily: "Poppins, sans-serif",
            },
            "& .Mui-selected": { color: "var(--primary) !important" },
            "& .MuiTabs-indicator": { backgroundColor: "var(--primary)" },
          }}
        >
          <Tab
            value="education"
            label="Education"
            icon={<SchoolIcon />}
            iconPosition="start"
          />
          <Tab
            value="work"
            label="Work"
            icon={<WorkOutlineIcon />}
            iconPosition="start"
          />
        </Tabs>

        {/* Timeline */}
        <div className="grid gap-4">
          {currentTab.entries.map((entry) => (
            <TimelineItem key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
