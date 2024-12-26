import { NavItem, SocialLink } from "../types/socialIcons";
import { Home, Code, Briefcase, User, Mail, Github, Linkedin } from "lucide-react";

export const navItems: NavItem[] = [
  { name: "Home", to: "hero", icon: <Home /> },
  { name: "Skills", to: "skills", icon: <Code /> },
  { name: "Projects", to: "projects", icon: <Briefcase /> },
  { name: "Experience", to: "experience", icon: <User /> },
  { name: "Contact", to: "contact", icon: <Mail /> },
];

export const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/hafizkh",
    icon: <Github size={24} />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/hafiz-javid/",
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
  },
  {
    href: "mailto:hafizjavid471@gmail.com",
    icon: <Mail size={24} />,
    label: "Mail",
  },
];
