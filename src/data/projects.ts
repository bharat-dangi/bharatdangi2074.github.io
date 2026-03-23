import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "expense-tracker",
    title: "React Expense Tracker App",
    description:
      "Web Application created using ReactJS and it uses local storage for storing data. It is an application that helps to track your income and expense record. This application is also integrated with speechly so that user can enter their transaction by their voice.",
    image: "/images/project1.png",
    links: [
      {
        label: "Demo",
        href: "https://speechly-expense-tracker-react.netlify.app/",
      },
      {
        label: "Code",
        href: "https://github.com/bharatdangi2074/ReactExpenseTrackerApp",
      },
    ],
  },
  {
    id: "ecommerce-app",
    title: "React Ecommerce App",
    description:
      "I had created this application as a practice project during my learning phase of ReactJS. This application is basic Ecommerce app in which we can see list of different courses. We can also see other sections like Contact Page.",
    image: "/images/project2.png",
    links: [
      {
        label: "Demo",
        href: "https://react-ecommerce-practice-project.netlify.app/",
      },
      {
        label: "Code",
        href: "https://github.com/bharatdangi2074/ReactEcommerceApp",
      },
    ],
  },
  {
    id: "portfolio-website",
    title: "Responsive Portfolio Website",
    description:
      "Portfolio Website adaptable to all devices, with UI components and animated interactions. I have used HTML, CSS and very less JavaScript to develop this project.",
    image: "/images/project3.png",
    links: [
      {
        label: "Demo",
        href: "https://mypersonal-portfolio-website.netlify.app/",
      },
      {
        label: "Code",
        href: "https://github.com/bharatdangi2074/PortfolioWebsite",
      },
    ],
  },
  {
    id: "social-media",
    title: "Social Media Application",
    description:
      "Full stack MERN social media application which has features like sharing posts, like posts, real time chat features using socket io, user profile, etc.",
    image: "/images/project4.png",
    links: [
      {
        label: "Code",
        href: "https://github.com/bharatdangi2074/MERN_SOCIAL_MEDIA_APPLICATION",
      },
    ],
  },
  {
    id: "mern-ecommerce",
    title: "MERN Ecommerce Application",
    description:
      "A full stack MERN Ecommerce application which has features like adding new items, add items to cart, sign in, sign up, payment integration, adding new categories, admin and user access, etc.",
    image: "/images/project5.png",
    links: [
      {
        label: "Code",
        href: "https://github.com/bharatdangi2074/MERN_ECOMMERCE_APPLICATION",
      },
    ],
  },
];
