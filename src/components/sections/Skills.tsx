"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillAccordionItem from "@/components/ui/SkillAccordionItem";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  const [expanded, setExpanded] = useState<string>("languages");

  const handleChange = (id: string) => {
    setExpanded((prev) => (prev === id ? "" : id));
  };

  const half = Math.ceil(skillCategories.length / 2);
  const leftCol = skillCategories.slice(0, half);
  const rightCol = skillCategories.slice(half);

  return (
    <section id="skills" className="pt-8 pb-16 md:pt-24 md:pb-8">
      <div className="max-w-[768px] mx-auto px-6 md:px-4 lg:px-0">
        <SectionHeader title="Skills" subtitle="My technical stack" />

        <div className="grid gap-0 sm:grid-cols-2">
          <div>
            {leftCol.map((cat) => (
              <SkillAccordionItem
                key={cat.id}
                category={cat}
                expanded={expanded === cat.id}
                onChange={handleChange}
              />
            ))}
          </div>
          <div>
            {rightCol.map((cat) => (
              <SkillAccordionItem
                key={cat.id}
                category={cat}
                expanded={expanded === cat.id}
                onChange={handleChange}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
