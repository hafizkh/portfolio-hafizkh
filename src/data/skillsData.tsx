import { Database, Globe, Server, Terminal } from "lucide-react";

export const skills = [
  {
    category: "Frontend",
    icon: <Globe className="w-8 h-8 text-indigo-500" />,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    category: "Backend",
    icon: <Server className="w-8 h-8 text-indigo-500" />,
    technologies: ["Node.js", "Express", "Python", "Java"],
  },
  {
    category: "Database",
    icon: <Database className="w-8 h-8 text-indigo-500" />,
    technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  },
  {
    category: "DevOps",
    icon: <Terminal className="w-8 h-8 text-indigo-500" />,
    technologies: ["Docker", "AWS", "CI/CD", "Linux"],
  },
];
