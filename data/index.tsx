import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiEjs,
  SiPostgresql,
  SiJavascript,
  SiSpring,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiPython,
} from "react-icons/si";
export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Achievements", link: "#achievements" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];
export const gridItems = [
  {
    id: 1,
    title: "I build intuitive UI and seamless user experiences",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full opacity-50",
    titleClassName: "justify-end",
    img: "/item1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Adaptive to any timezone, easy collaborate",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start mb-5",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about building impactful solutions",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/item2.png",
    spareImg: "",
  },

  {
    id: 5,
    title: "Currently exploring Spring Boot and backend API development",
    description: "Mastering Spring Boot for backend architecture",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 h-full md:w-96 w-60",
    titleClassName:
      "w-1/2 flex justify-center md:justify-start lg:justify-center",
    img: "/item5.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
export const projects = [
  {
    id: 1,
    title: "NRolEHub - Campus Connect",
    des: "An event management platform for colleges to manage registrations, leaderboards, certificates, and more.",
    img: "/campusconnect.png",
    iconLists: [
      { icon: <FaReact color="#61DBFB" />, name: "React" },
      { icon: <SiTailwindcss color="#38BDF8" />, name: "TailwindCSS" },
      { icon: <FaNodeJs color="#3C873A" />, name: "Node.js" },
      { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },
    ],
    link: "https://github.com/Vavilla-Rupesh/NRoleHub_V_2",
  },
  {
    id: 2,
    title: "HireHive",
    des: "A job portal system that simplifies job posting and candidate tracking, built using EJS and PostgreSQL.",
    img: "/hirehive.png",
    iconLists: [
      { icon: <SiEjs color="#A91E50" />, name: "EJS" },
      { icon: <FaCss3Alt color="#264DE4" />, name: "CSS3" },
      { icon: <FaNodeJs color="#3C873A" />, name: "Node.js" },
      { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },
    ],
    link: "https://github.com/Vavilla-Rupesh/Massathon_HireHive",
  },
  {
    id: 3,
    title: "Quiz App",
    des: "A web-based quiz game built with vanilla JavaScript, featuring dynamic scoring and interactive questions.",
    img: "/quizapp.png",
    iconLists: [
      { icon: <FaHtml5 color="#E34F26" />, name: "HTML5" },
      { icon: <FaCss3Alt color="#264DE4" />, name: "CSS3" },
      { icon: <FaJs color="#F0DB4F" />, name: "JavaScript" },
    ],
    link: "https://github.com/Vavilla-Rupesh/Quiz_App",
  },
];

export const skills = [
  {
    name: "Java",
    icon: FaJava,
    color: "#f89820",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#3C873A",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#000000",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
  },
  {
    name: "Spring",
    icon: SiSpring,
    color: "#6DB33F",
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    color: "#6DB33F",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: SiCss3,
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#f0db4f",
  },
];
export const achievements = [
  {
    quote:
      "Core Organizer and Technical Lead for Hackademia 2k24, managing logistics, judging criteria, and mentoring participants during the event.",
    name: "Hackademia 2k24",
    title: "Core Organizer & Technical Lead",
  },
  {
    quote:
      "Secured 1st place in Masscoders for presenting an innovative website prototype focused on user-centric design and seamless UX.",
    name: "Masscoders Competition",
    title: "1st Place – Web Prototype",
  },
  {
    quote:
      "Achieved 2nd place in a college-level hackathon by developing a responsive, full-stack college website tailored to campus needs.",
    name: "Tech NeHathon",
    title: "2nd Place – Campus Website",
  },
  {
    quote:
      "Won 3rd place at PSGiTech Hackfest 2k24 for presenting a solution to manage green credits through an efficient digital tracking system.",
    name: "PSGiTech Hackfest 2k24",
    title: "3rd Place – Green Credit Management",
  },
];
export const workExperience = [
  {
    id: 1,
    title: "Web Developer Intern",
    company: "CS Edge",
    desc: "Developed three web-based applications using HTML, CSS, and JavaScript, enhancing frontend functionality.",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web Developer Intern",
    company: "Brainovision",
    desc: "Modified a template to create a temple website, applying core web development practices and client-focused design.",
    thumbnail: "/exp4.svg",
  },
];
export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/Vavilla-Rupesh",
  },
  {
    id: 2,
    name: "Instagram",
    link: "https://www.instagram.com/rvavilla/",
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rupeshvavilla/",
  },
];
