export const navitems = [
  { path: "#hero", label: "Home" },
  { path: "#project", label: "Projects" },
  { path: "#about", label: "About" },
  //   { path: "#experience", label: "Experience" },
  { path: "#contact", label: "Contact" },
];

interface projectProps {
  image: string;
  title: string;
  desc: string;
  tech: subprops[];
}

interface subprops {
  title: string;
}

export const projectData: projectProps[] = [
  {
    image: "/img1.png",
    title: "Project One",
    desc: "Description here",
    tech: [{ title: "React" }, { title: "Next.js" }],
  },
  {
    image: "/img1.png",
    title: "Project One",
    desc: "Description here",
    tech: [{ title: "React" }, { title: "Next.js" }],
  },
  {
    image: "/img1.png",
    title: "Project One",
    desc: "Description here",
    tech: [{ title: "React" }, { title: "Next.js" }],
  },
  {
    image: "/img1.png",
    title: "Project One",
    desc: "Description here",
    tech: [{ title: "React" }, { title: "Next.js" }],
  },
  {
    image: "/img1.png",
    title: "Project One",
    desc: "Description here",
    tech: [{ title: "React" }, { title: "Next.js" }],
  },
  {
    image: "/img1.png",
    title: "Project One",
    desc: "Description here",
    tech: [{ title: "React" }, { title: "Next.js" }],
  },
  {
    image: "/img1.png",
    title: "Project One",
    desc: "Description here",
    tech: [{ title: "React" }, { title: "Next.js" }],
  },

  //   { image: "", title: "", desc: "", tech: [{ title: "" }, { title: "" }] },
  //   { image: "", title: "", desc: "", tech: [{ title: "" }, { title: "" }] },
  //   { image: "", title: "", desc: "", tech: [{ title: "" }, { title: "" }] },
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
// {
//   /* <div className="flex space-x-4">
//               <FaLinkedin className="w-6 h-6 stroke-current" />
//               <FaTwitter className="w-6 h-6 stroke-current" />
//               <FaGithub className="w-6 h-6 stroke-current" />
//             </div> */
// }

interface skillsProps {
  color1: string;
  color2: string;
}
export const Skills: skillsProps[] = [
  { color1: "bg-green-300", color2: "bg-blue-700" },
  { color1: "bg-green-300", color2: "bg-blue-700" },
];
