import { ProjectCategory } from "../types/project";

export const filters: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "security", label: "Security Tools" },
  { value: "frontend", label: "Frontend" },
  { value: "automation", label: "Automation" },
  { value: "fullstack", label: "Full Stack" },
];
