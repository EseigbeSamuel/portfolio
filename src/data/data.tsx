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
