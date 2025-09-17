export type ProjectCategory =
  | "all"
  | "frontend"
  | "fullstack"
  | "cloud"
  | "CyberSecurity";

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  liveLink: string;
  githubLink: string;
  category: ProjectCategory;
}

export interface ProjectFilterProps {
  activeFilter: ProjectCategory;
  onFilterChange: (filter: ProjectCategory) => void;
}

export interface ProjectCardProps {
  project: Project;
  onOpenModal: () => void;
}

export interface ProjectDetailsProps {
  project?: Project; // Optional prop for modal usage
}

export interface AchievementCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  majors?: string;
  verification?: string;
  date?: string;
}
