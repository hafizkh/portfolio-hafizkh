import { Database, Globe, Server, Terminal } from "lucide-react";
import { FaAws, FaJava, FaLinux, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SkillCategory } from "../types/socialIcons";
import { SiDocker, SiExpress, SiMysql, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    icon: <Globe className="w-8 h-8 text-indigo-500" />,
    technologies: [
      { name: "React", icon: <FaReact className="w-5 h-5 text-blue-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-5 h-5 text-blue-700" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5 text-teal-500" /> },
      // { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5 text-gray-900" /> }
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-8 h-8 text-indigo-500" />,
    technologies: [
      { name: "Python", icon: <FaPython className="w-5 h-5 text-yellow-500" /> },
      { name: "Node.js", icon: <FaNodeJs className="w-5 h-5 text-green-500" /> },
      { name: "Express", icon: <SiExpress className="w-5 h-5 text-gray-700" /> },
      // { name: "Java", icon: <FaJava className="w-5 h-5 text-red-600" /> },
    ],
  },
  {
    category: "Database",
    icon: <Database className="w-8 h-8 text-indigo-500" />,
    technologies: [
      { name: "PostgreSQL", icon: <BiLogoPostgresql className="w-5 h-5 text-blue-500" /> },
      { name: "MySQL", icon: <SiMysql className="w-5 h-5 text-orange-500" /> },
      { name: "MongoDB", icon: <BiLogoMongodb className="w-5 h-5 text-green-500" /> },
    ],
  },
  {
    category: "DevOps",
    icon: <Terminal className="w-8 h-8 text-indigo-500" />,
    technologies: [
      { name: "Docker", icon: <SiDocker className="w-5 h-5 text-blue-500" /> },
      { name: "AWS", icon: <FaAws className="w-5 h-5 text-black" /> },
      { name: "Linux", icon: <FaLinux className="w-5 h-5 text-black" /> },
    ],
  },
];
