import { ReactNode } from "react";
// Interface for navItems

export interface NavItem {
  name: string;
  to: string;
  icon: ReactNode; // ReactNode allows for React components like <Home />, <Code />, etc.
}

// Interface for socialLinks
export interface SocialLink {
  href: string;
  icon: ReactNode;
  label: string;
}
