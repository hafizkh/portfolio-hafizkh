import { ProjectCategory } from "../types/project";

export const filters: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "frontend", label: "Frontend" },
  { value: "fullstack", label: "Full Stack" },
  { value: "CyberSecurity", label: "Cyber Security" },
  // { value: "cloud", label: "Cloud Computing" },
];
