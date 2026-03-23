import type { ServiceItem } from "@/types/portfolio";

export const services: ServiceItem[] = [
  {
    id: "frontend",
    title: "Frontend\nDevelopment",
    muiIcon: "ArrowForward",
    bullets: [
      "I develop the user interface.",
      "Web Page development.",
      "Integrating frontend application with backend logics and databases.",
      "Integrating different third party APIs with frontend application.",
      "Complete Frontend Application development.",
    ],
  },
  {
    id: "backend",
    title: "Backend\nDevelopment",
    muiIcon: "Storage",
    bullets: [
      "I develop the backend application.",
      "Developing APIs for different frontend application.",
      "Working with databases like SQL and NoSQL.",
      "Working with third party APIs in backend.",
      "Integrating payment gateway with backend application.",
    ],
  },
  {
    id: "automation",
    title: "Web\nAutomation",
    muiIcon: "SmartToy",
    bullets: [
      "I can scrape data from different website using NodeJS Puppeteer.",
      "I can bypass different types of anti-bot measures.",
      "I can format scrapped data as per your requirements.",
      "I can help on integration of scrapped datasets with backend.",
      "Complete Web Automation Solution.",
    ],
  },
  {
    id: "fullstack",
    title: "Complete App\nDevelopment",
    muiIcon: "WebAsset",
    bullets: [
      "Develop complete application from scratch.",
      "Full Stack Web Application Development.",
      "Can develop the web application that involves databases, business logic, user interface.",
      "Integrating payment gateway with application in backend and frontend both.",
      "Can involve in software development cycle from planning phase to maintenance.",
    ],
  },
];
