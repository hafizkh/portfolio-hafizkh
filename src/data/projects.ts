import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management",
    fullDescription:
      "A comprehensive e-commerce platform built with modern technologies, featuring real-time inventory tracking, secure payment processing, and an intuitive admin dashboard. The platform handles thousands of transactions daily with 99.9% uptime.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    features: [
      "Real-time inventory management",
      "Secure payment processing",
      "Admin dashboard",
      "Order tracking",
      "Analytics and reporting",
    ],
    challenges: [
      "Handling concurrent transactions",
      "Ensuring data consistency",
      "Optimizing performance at scale",
    ],
    solutions: [
      "Implemented distributed locking with Redis",
      "Used event-driven architecture",
      "Implemented caching strategies",
    ],
    liveLink: "www.google.com",
    githubLink: "www.github.com/hafizkh",
    category: "fullstack",
  },
  {
    id: "task-management",
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates",
    fullDescription:
      "A sophisticated task management system designed for team collaboration. Features real-time updates, customizable workflows, and detailed analytics to help teams stay productive and organized.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io", "Jest"],
    features: [
      "Real-time collaboration",
      "Custom workflows",
      "Time tracking",
      "Team analytics",
      "Integration APIs",
    ],
    challenges: [
      "Managing real-time state",
      "Handling offline mode",
      "Scaling WebSocket connections",
    ],
    solutions: [
      "Implemented optimistic updates",
      "Used service workers for offline support",
      "Implemented connection pooling",
    ],
    liveLink: "#",
    githubLink: "#",
    category: "frontend",
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator",
    description: "ML-powered platform for automated content creation",
    fullDescription:
      "An innovative AI-powered content generation platform that helps creators produce high-quality content efficiently. Utilizes advanced machine learning models to generate, analyze, and optimize content across multiple formats.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "AWS Lambda"],
    features: [
      "Multi-format content generation",
      "SEO optimization",
      "Content analytics",
      "Custom training models",
      "API integration",
    ],
    challenges: [
      "Model optimization",
      "Handling large datasets",
      "Reducing inference time",
    ],
    solutions: [
      "Implemented model quantization",
      "Used distributed training",
      "Optimized API endpoints",
    ],
    liveLink: "#",
    githubLink: "#",
    category: "cloud",
  },
];
