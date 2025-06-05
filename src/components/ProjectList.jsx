import { link } from "framer-motion/client";

export function ProjectList() {
  const projects = [
    {
      project: "./Assets/proj-1.png",
      name: "Code Book",
      link: "https://tourmaline-beijinho-4b6a6a.netlify.app/",
      fullstack: true,
      githubFrontend: "https://github.com/TERRANCE631/CodeBook-Shop",
      githubBackend: "https://github.com/TERRANCE631/CodebookBackend",
      id: 1,
      description:
        "A simple e-commerce store selling coding text books. A user must log-in to access cart page using secured route",
      tech: [
        "Tailwindcss",
        "React",
        "Node.js",
        "Json-Server",
        "Json-Server-Auth",
      ],
    },
    {
      project: "./Assets/proj-2.png",
      name: "Shopping Mate",
      link: "https://creative-hamster-45bd64.netlify.app/",
      fullstack: false,
      githubFrontend: "https://github.com/TERRANCE631/Shopping-useContext",
      githubBackend: null,
      id: 2,
      description:
        "A simple e-commerce store selling headphones. A user can add items to cart and view them in the cart page",
      tech: ["Tailwindcss", "React", "useContext", "useReducer"],
    },
    {
      project: "./Assets/proj-6.png",
      name: "Bathlako Teme Services - Citrus Company",
      link: "https://batlhakotemoservices.com/",
      fullstack: false,
      githubFrontend: "https://github.com/TERRANCE631/Bathlako-Temo-Services",
      githubBackend: null,
      id: 3,
      description:
        "Built this web Application to solve an issue that was presented to me by the company owner.",
      tech: ["Tailwindcss", "React"],
    },
    {
      project: "./Assets/proj-7.png",
      name: "Gaming Website - Animations",
      link: "https://gsapan.netlify.app/",
      githubFrontend: "https://github.com/TERRANCE631/Animated_WebApp",
      githubBackend: null,
      id: 4,
      fullstack: false,
      description:
        "Gaming project for practicing animations using locomotive javascript, a GSAP framework",
      tech: ["Tailwindcss", "CSS", "React", "GSAP"],
    },
    {
      project: "./Assets/proj-10.png",
      name: "Cinemate - Movie App",
      link: "https://cenemate.netlify.app/",
      fullstack: false,
      githubFrontend: "https://github.com/TERRANCE631/Cinemate-MovieApp",
      id: 5,
      githubBackend: null,
      description:
        "A movie app that allows users to search for movies and view their details.",
      tech: ["Tailwindcss", "React", "TMDB API"],
    },
  ];

  return { projects };
}
