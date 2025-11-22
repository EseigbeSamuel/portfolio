import { ReactNode } from "react";
import { FaReact, FaNodeJs, FaMobileAlt, FaCloud } from "react-icons/fa";
import { StaticImageData } from "next/image";
// import portfolio from "@/assest/images/3.png";
import flexyermy from "@/assest/images/flexydermy.png";
import xp from "@/assest/images/xp.png";
import esma from "@/assest/images/esma.png";

export const navitems = [
  { path: "#hero", label: "Home" },
  { path: "#project", label: "Projects" },
  { path: "#about", label: "About" },
  { path: "#contact", label: "Contact" },
];

interface projectProps {
  image: StaticImageData;
  title: string;
  desc: string;
  tech: string[];
  link?: string;
}

export const projectData: projectProps[] = [
  // {
  //   image: portfolio,
  //   title: "Portfolio",
  //   desc: "Description here",
  //   tech: ["next.js", "Tailwind CSS", "framer motion"],
  // },
  {
    image: flexyermy,
    title: "flexydemy",
    desc: "Flexydermy is an educational platform that seamlessly connects tutors and students for online learning. The platform features integrated video calling for live lectures, secure payment processing, and robust file management allowing users to upload and download course materials and documents. Flexydermy provides a complete virtual classroom experience, enabling efficient knowledge transfer between educators and learners in a unified environment.",
    tech: ["angular", "tailwind CSS"],
  },
  {
    image: esma,
    title: "ESMA",
    desc: "ESMA (Elsoft School Management Application) is a comprehensive web-based solution designed to streamline school administration. The platform centralizes all academic operations, enabling schools to efficiently manage student records, attendance, grades, schedules, and faculty information. ESMA simplifies administrative workflows and provides a unified system for handling the complete spectrum of academic affairs",
    tech: ["next.js", "tailwind CSS"],
    link: "https://github.com/EseigbeSamuel",
  },
  {
    image: xp,
    title: "XP Requiter",
    desc: "XP Requiter is a comprehensive healthcare ecosystem platform that connects patients, doctors, hospitals, and investors in a unified network. The platform facilitates telemedicine consultations, secure payment processing, medical document management, and healthcare investment opportunities. XP Requiter creates a complete digital health infrastructure that streamlines patient care delivery while enabling strategic financial partnerships in the medical sector.",
    tech: ["react", "framer motion", "tailwind CSS"],
  },
];

interface techProps {
  image: string;
  title: string;
}

export const techStack: techProps[] = [
  { image: "https://skillicons.dev/icons?i=react", title: "React" },
  { image: "https://skillicons.dev/icons?i=nextjs", title: "Next.js" },
  { image: "https://skillicons.dev/icons?i=nodejs", title: "Node.js" },
  { image: "https://skillicons.dev/icons?i=express", title: "Express" },
  { image: "https://skillicons.dev/icons?i=nestjs", title: "Nest.js" },
  { image: "https://skillicons.dev/icons?i=angular", title: "Angular" },
  { image: "https://skillicons.dev/icons?i=mongodb", title: "MongoDB" },
  { image: "https://skillicons.dev/icons?i=postgres", title: "PostgreSQL" },
];

interface eduProps {
  number: number;
  label: string;
}
export const edu: eduProps[] = [
  { number: 8, label: "projects built" },
  { number: 15, label: "technologies" },
  { number: 2, label: "years experience" },
  { number: 3, label: "platforms" },
];

interface skillsProps {
  title: string;
  icon: ReactNode;
  color: string;
  tech: string[];
}
export const Skills: skillsProps[] = [
  {
    title: "Frontend Development",
    icon: <FaReact />,
    color: "from-blue-500 to-cyan-500",
    tech: [
      "React",
      "React Native",
      "JavaScript (ES6+)",
      "TypeScript",
      "Next.js",
      "angular",
    ],
  },
  {
    title: "Backend Development",
    icon: <FaNodeJs />,
    color: "from-green-500 to-emerald-500",
    tech: [
      "Node.js",
      "Express.js",
      "nest.js",
      "MongoDB",
      "PostgreSQL",
      "Firebase",
    ],
  },
  {
    title: "Mobile Development",
    icon: <FaMobileAlt />,
    color: "from-purple-500 to-pink-500",
    tech: ["React Native", "Mobile UI/UX", "Push Notifications"],
  },
  {
    title: "DevOps & Tools",
    icon: <FaCloud />, // or whichever cloud icon you prefer
    color: "from-indigo-500 to-purple-500",
    tech: [
      "Docker",
      "Git",
      "CI/CD",
      "AWS",
      "Vercel",
      "Cloudflare Workers",
      "Linux",
      "Shell Scripting",
    ],
  },
];

interface expProps {
  title: string;
  place: string;
  date: string;
  desc: string;
  features: string[];
}

export const Exp: expProps[] = [
  {
    title: "junior frontend developer",
    place: "elsoft tech hub",
    date: "january 2025 - present",
    desc: "Contributed developed and delivered responsive, user-centric web and mobile applications. ",
    features: [
      "Developed a Student Management Application built with Next.js,",
      "Design and implementation of dashboards and authentication systems.",
      "Performance optimization of pages for seamless academic record management.",
      "Created a Real Estate Application with React Native,",
      "Ensuring responsive, mobile first experience for property listings and client interactions.",
    ],
  },
  {
    title: "frontend developer intern",
    place: "veegel technology limited",
    date: "june 2024 - december 2024 ",
    desc: "Contributed to the development of a cybersecurity compliance web application using React.",
    features: [
      "Collaborating with teammates during code reviews, debugging API response issues, and optimizing the API integration for performance.",
      "Developing user authentication features using React, integrating login, signup, and role-based access controls.",
      "Ensuring responsive and accessible UI designs that worked seamlessly across different devices and browsers",
      "Writing reusable and modular components in React to simplify code maintenance and scalability",
    ],
  },
  // { title: "", place: "", date: "", desc: "", features: [""] },
];

// https://github.com/EseigbeSamuel
// https://www.linkedin.com/in/eseigbe-samuel-ba6891333/
// https://x.com/muel_se
