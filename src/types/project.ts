export type ProjectCategory = 'all' | 'frontend' | 'fullstack' | 'cloud' | 'mobile';

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