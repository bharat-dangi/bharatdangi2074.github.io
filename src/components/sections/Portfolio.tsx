"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-8 md:py-24 md:pb-16">
      <div className="max-w-[768px] mx-auto px-6 md:px-4 lg:px-0">
        <SectionHeader title="Portfolio" subtitle="Most recent work" />
      </div>

      <div className="max-w-[768px] mx-auto relative px-8 md:px-12 lg:px-4">
        <Swiper
          modules={[Navigation, Pagination]}
          loop
          navigation={{
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
          }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation */}
        <button
          className="swiper-btn-prev absolute left-0 top-1/2 -translate-y-6 z-10 text-(--primary) hover:text-(--primary-alt) md:-left-8 lg:-left-14"
          aria-label="Previous project"
        >
          <ArrowBackIosNewIcon sx={{ fontSize: "2rem", md: { fontSize: "3.5rem" } }} />
        </button>
        <button
          className="swiper-btn-next absolute right-0 top-1/2 -translate-y-6 z-10 text-(--primary) hover:text-(--primary-alt) md:-right-8 lg:-right-14"
          aria-label="Next project"
        >
          <ArrowForwardIosIcon sx={{ fontSize: "2rem" }} />
        </button>
      </div>
    </section>
  );
}
