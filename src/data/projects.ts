import { Project } from "../types/project";
import kalibro from "../assets/Kalibro-Audit-Tool.png";
import hyperStore from "../assets/Hyper-Store.png";
import weather from "../assets/Thunder-Weather-Finder.png";
import digitalReminder from "../assets/Digital-Reminder.png";
import hafizPortfolio from "../assets/Hafiz-Portfolio.png";
import restaurantImage from "../assets/school_restaurant_project.png";
import wazuhLab from "../assets/agent-list.png";
import wazuhSyscollector from "../assets/network-topology.png"
// import syscollectorIntervals from "../assets/syscollector-intervals.png";

export const projects: Project[] = [
  {
    id: "audit-tool",
    title: "Kalibro - Site Audit & Trust Analysis Platform",
    description:
      "Comprehensive site audit tool for performance, security, and technical analysis.",
    fullDescription:
    "The product reached a functional internal release and was later discontinued due to business reasons; the walkthrough video below demonstrates its full capabilities. Kalibro is a full stack web application designed to help businesses analyze their websites for performance, security, and technical optimization. It provides actionable insights using modern technologies like React, Flask, PostgreSQL, and AWS. The tool integrates with APIs like Google Lighthouse and Safe Browsing to deliver comprehensive reports, covering key areas such as SEO, accessibility, unused CSS/JS, SSL issues, and DNS health. With a user-friendly dashboard and real-time data processing, Kalibro empowers users to improve their online presence effectively.",
    image: kalibro,
    technologies: [
      "React",
      "Flask",
      "PostgreSQL",
      "AWS",
      "CSS",
      "Google Lighthouse API",
    ],
    features: [
      "Performance analysis using Google Lighthouse",
      "Detailed security checks (SSL, Safe Browsing, DNS health)",
      "Color analysis and accessibility insights",
      "Category-based URL auditing and reporting",
      "Custom PDF reports for optimization, performance, and security",
      "Real-time data analysis with Flask and PostgreSQL",
      "Multi-user support with admin and secondary accounts",
      "Integration with AWS services for secure image and data storage",
    ],
    challenges: [
      "Integrating multiple APIs for performance, security, and technical analysis",
      "Handling real-time data for multi-user accounts",
      "Ensuring scalability for enterprise-level usage",
      "Efficiently analyzing large datasets for unused CSS/JS and SEO insights",
      "Managing user sessions and device restrictions for admin accounts",
    ],
    solutions: [
      "Used Google Lighthouse API and Flask to streamline performance analysis",
      "Implemented AWS S3 for secure and scalable storage of images and audit data",
      "Optimized database schema to support real-time data processing with PostgreSQL",
      "Built modular components for category-based URL auditing",
      "Enhanced security with Safe Browsing API and SSL validation",
      "Generated customizable PDF reports for easy sharing and insights",
    ],
    liveLink: "https://youtu.be/P-bFpqLVRP0",
    githubLink: "",
    category: "fullstack",
  },
  {
    id: "hyper-store",
    title: "E-Commerce Store - Hyper Store",
    description:
      "An e-commerce platform built with React and Fake Store API for browsing, filtering, and managing products effortlessly.",
    fullDescription:
      "Hyper Store is a sleek and responsive e-commerce web application designed to provide a seamless shopping experience. Built with React, TypeScript, and BootStrap, it integrates the Fake Store API to fetch dynamic product data in real-time. Users can browse through products, apply filters for categories and pricing, and manage their shopping carts. The application employs modern UI/UX principles for easy navigation and interaction, making it ideal for learning and showcasing e-commerce functionalities.",
    image: hyperStore,
    technologies: [
      "React",
      "TypeScript",
      "BootStrap",
      "MongoDB",
      "Fake Store API",
    ],
    features: [
      "Fetch and display products dynamically using Fake Store API",
      "Real-time product filtering by categories and price",
      "User-friendly shopping cart functionality",
      "Responsive design built with BootStrap and custom styling",
      "Interactive product detail pages for individual items",
    ],
    challenges: [
      "Integrating dynamic product data from Fake Store API",
      "Managing global state for cart and product filters",
      "Ensuring responsiveness across various screen sizes",
      "Implementing seamless navigation between product details and cart",
    ],
    solutions: [
      "Used React Context API for managing global state effectively",
      "Integrated Fake Store API to fetch and display product data in real-time",
      "Designed a responsive layout with BootStrap and CSS adjustments",
      "Optimized the application for smooth navigation and dynamic filtering",
    ],
    liveLink: "https://hyper-mystore.netlify.app",
    githubLink: "https://github.com/hafizkh/Frontend_Project_hyper-store",
    category: "frontend",
  },
  {
    id: "thunder-weather",
    title: "Thunder Weather",
    description:
      "A responsive weather application providing real-time weather updates using AccuWeather API and Bootstrap.",
    fullDescription:
      "Thunder Weather is a sleek and intuitive weather application that leverages the AccuWeather API to fetch real-time weather updates for cities around the globe. Built with React and styled using Bootstrap, the app offers a clean user interface and dynamic search functionality. Users can quickly view current weather conditions, temperature, humidity, wind speed, and more. The application is optimized for all devices, ensuring a seamless experience on both desktop and mobile screens.",
    image: weather,
    technologies: ["React", "Bootstrap", "AccuWeather API", "GitHub"],
    features: [
      "Real-time weather updates using AccuWeather API",
      "Dynamic city search with instant results",
      "Displays detailed weather information (temperature, humidity, wind speed, etc.)",
      "Responsive design for desktop and mobile screens",
      "User-friendly interface built with Bootstrap",
    ],
    challenges: [
      "Integrating real-time data from AccuWeather API",
      "Handling API rate limits and errors gracefully",
      "Designing a responsive and visually appealing interface with Bootstrap",
      "Ensuring accurate city-based weather search functionality",
    ],
    solutions: [
      "Implemented robust API integration for fetching real-time weather data",
      "Handled errors and API rate limits with fallback messages for users",
      "Used Bootstrap to create a responsive and modern UI design",
      "Optimized search functionality to deliver accurate and fast results",
    ],
    liveLink: "https://hafizkh.github.io/Thunder-Weather/",
    githubLink: "https://github.com/hafizkh/Thunder-Weather",
    category: "frontend",
  },
  {
    id: "digital-reminder",
    title: "Digital Reminder",
    description:
      "A sleek and efficient to-do application built with React and TypeScript, designed to manage tasks effortlessly.",
    fullDescription:
      "Digital Reminder is a user-friendly to-do application developed with React and TypeScript, offering an intuitive interface for managing tasks. The app allows users to create, edit, delete, and mark tasks as completed, helping them stay organized. Styled with Bootstrap and Sass, it features a responsive design that works seamlessly across all devices. Whether you're tracking daily errands or long-term goals, Digital Reminder ensures an efficient task management experience.",
    image: digitalReminder,
    technologies: ["React", "TypeScript", "Bootstrap", "Sass", "Netlify"],
    features: [
      "Add, edit, and delete tasks in real-time",
      "Mark tasks as completed for better tracking",
      "Responsive design for mobile and desktop devices",
      "Elegant UI styling with Bootstrap and Sass",
      "Deployed on Netlify for quick and reliable access",
    ],
    challenges: [
      "Building a dynamic task management system with React state management",
      "Ensuring type safety and scalability using TypeScript",
      "Creating a visually appealing and responsive layout",
      "Deploying the application for seamless accessibility",
    ],
    solutions: [
      "Used React state management to handle real-time task updates",
      "Implemented TypeScript for robust and scalable code",
      "Leveraged Bootstrap and Sass for clean and responsive UI design",
      "Deployed the application on Netlify for fast and stable hosting",
    ],
    liveLink: "https://digitalreminder.netlify.app/",
    githubLink: "https://github.com/hafizkh/Digital-Reminder",
    category: "frontend",
  },
  {
    id: "hafiz-portfolio",
    title: "Portfolio Hafiz",
    description:
      "A modern portfolio website showcasing my skills, projects, and experience as a Full Stack Developer.",
    fullDescription:
      "Portfolio Hafiz is a responsive and visually appealing portfolio website developed with React, TypeScript, and styled using TailwindCSS. It serves as a comprehensive showcase of my professional journey, featuring my skills, projects, experience, and contact information. Designed to provide a smooth user experience, the portfolio highlights my technical expertise and creativity, while being fully responsive across all devices. The website is deployed on Netlify for seamless access.",
    image: hafizPortfolio,
    technologies: ["React", "TypeScript", "TailwindCSS", "Netlify"],
    features: [
      "Interactive sections for skills, projects, and experience",
      "Responsive design optimized for mobile, tablet, and desktop devices",
      "Smooth animations for an engaging user experience",
      "Built-in contact form for easy communication",
      "Deployed on Netlify for fast and reliable access",
    ],
    challenges: [
      "Creating a responsive layout that adapts to various screen sizes",
      "Integrating smooth animations and transitions without performance issues",
      "Organizing and presenting project details in a visually appealing manner",
      "Optimizing the website for fast loading times",
    ],
    solutions: [
      "Used TailwindCSS for efficient and responsive styling",
      "Implemented animations using Framer Motion for an interactive user experience",
      "Structured project and skills sections for clear and organized presentation",
      "Deployed on Netlify with performance optimization for faster load times",
    ],
    liveLink: "https://hafizkh.dev/",
    githubLink: "https://github.com/hafizkh/portfolio-hafizkh",
    category: "frontend",
  },
  {
    id: "Mediterranean Restaurant - IL Marino",
    title: "Restaurant Website",
    description:
      "A simple website for a restaurant, allowing users to view menu, place orders, reserve tables, and provide feedback.",
    fullDescription:
      "The Restaurant Website is a university project developed by a team of three members. It provides essential features for a restaurant's online presence, including menu viewing, online ordering, table reservations, and feedback submission. Built using HTML5, CSS3, PHP, MySQL, and Bootstrap 5, the website ensures a responsive and user-friendly experience. The backend is powered by PHP and MySQL, where all user and order data is securely stored. Admins can manage the database using CRUD operations, making it easy to update menu items, orders, and feedback.",
    image: restaurantImage,
    technologies: ["HTML5", "CSS3", "PHP", "MySQL", "Bootstrap 5"],
    features: [
      "Dynamic menu display fetched from the database",
      "Online ordering with cash or card payment options",
      "Table reservation system for hassle-free dining",
      "Feedback and suggestion submission by users",
      "Admin panel for managing menu, orders, and feedback with CRUD operations",
      "Responsive design using Bootstrap 5 for mobile, tablet, and desktop devices",
    ],
    challenges: [
      "Designing a responsive and visually appealing interface",
      "Implementing a functional backend to handle orders, reservations, and feedback",
      "Ensuring secure and efficient storage of user and order data in the database",
      "Managing CRUD operations for the admin panel",
      "Coordinating tasks among team members as this was the first university project",
    ],
    solutions: [
      "Used Bootstrap 5 to create a responsive and mobile-friendly design",
      "Developed the backend using PHP to handle user requests and database interactions",
      "Utilized MySQL for secure and efficient data storage",
      "Implemented a simple and intuitive admin panel for managing the database",
      "Divided tasks among team members to ensure smooth collaboration and timely completion of the project",
    ],
    liveLink: "",
    githubLink: "https://github.com/hafizkh/Team14Web_IL_Marino/tree/main",
    category: "fullstack",
  },
  {
  id: "wazuh-lab",
  title: "Wazuh SIEM Lab",
  description:
    "Virtualized security lab with a Wazuh server and multiple agents, documented and published as a portfolio-ready project.",
  fullDescription:
    "A hands-on security lab that simulates a small enterprise network using Wazuh. It includes one Ubuntu 22.04 Wazuh server and multiple agent endpoints (Ubuntu 18.04, Ubuntu 22.04, Kali Linux) on a bridged network. The project focuses on deploying the server, registering agents via the dashboard wizard, verifying connectivity, and documenting the setup with real screenshots. The documentation is hosted via GitHub Pages for easy sharing.",
  image: wazuhLab,
  technologies: [
    "Wazuh",
    "Ubuntu",
    "Kali Linux",
    "VirtualBox",
    "Linux",
    "GitHub Pages"
  ],
  features: [
    "Single-host virtual lab with Wazuh server and multiple agents",
    "Bridged networking for realistic LAN communication",
    "Agent deployment and status verification via Wazuh dashboard",
    "Clean docs site with architecture diagram and screenshots",
    "Reference agent configuration (`sample_ossec.conf`)"
  ],
  challenges: [
    "Getting bridged networking to consistently assign reachable IPs",
    "Ensuring agents register and stay connected to the manager",
    "Handling self-signed HTTPS access to the dashboard",
    "Structuring documentation for a professional portfolio presentation"
  ],
  solutions: [
    "Standardized VM network settings with bridged adapters on the same subnet",
    "Used the dashboard’s agent wizard and validated `ossec.conf` manager IP",
    "Documented access via `https://<server-ip>` with certificate warning handling",
    "Published a GitHub Pages site from `docs/` with real screenshots and topology"
  ],
  liveLink: "https://hafizkh.github.io/wazuh-lab-environment/",
  githubLink: "https://github.com/hafizkh/wazuh-lab-environment",
  category: "CyberSecurity",
},
{
  id: "wazuh-syscollector",
  title: "Wazuh Syscollector Inventory Monitoring",
  description:
    "Automated system inventory monitoring using Wazuh Syscollector across multiple agents.",
  fullDescription:
    "This project expands on the initial Wazuh SIEM Lab by enabling Syscollector to automatically collect system inventory data from connected agents. It demonstrates how Wazuh can be used not only for security monitoring but also for detailed asset and infrastructure visibility. The lab collects and visualizes hardware, software, network interfaces, and running processes, all centrally visible in the Wazuh dashboard. This project focuses on clean documentation, lab reproducibility, and practical security monitoring use cases.",
  image: wazuhSyscollector,
  technologies: [
    "Wazuh",
    "Syscollector",
    "Ubuntu",
    "Kali Linux",
    "VirtualBox",
    "Linux",
    "GitHub Pages"
  ],
  features: [
    "Automatic system inventory collection from agents",
    "Centralized visualization in Wazuh dashboard",
    "Hardware, software, and process data collection",
    "Real lab environment with multiple OS agents",
    "Detailed documentation with screenshots and configuration"
  ],
  challenges: [
    "Ensuring consistent Syscollector data collection across different OS types",
    "Configuring agent settings for stable data reporting",
    "Interpreting inventory data in the Wazuh dashboard",
    "Structuring the project for clear documentation and reuse"
  ],
  solutions: [
    "Used default Syscollector configuration for seamless data collection",
    "Verified agent connectivity and reporting intervals",
    "Captured dashboard views for software, hardware, and network data",
    "Published full documentation with reproducible steps via GitHub Pages"
  ],
  liveLink: "https://hafizkh.github.io/wazuh-syscollector-inventory/",
  githubLink: "https://github.com/hafizkh/wazuh-syscollector-inventory",
  category: "CyberSecurity",
  },
//   {
//   id: "wazuh-syscollector-intervals",
//   title: "Wazuh System Inventory Scan Intervals",
//   description:
//     "Hands-on guide to tuning Syscollector scan frequency and validating results in the Wazuh dashboard.",
//   fullDescription:
//     "A focused, practical tutorial showing how to back up and edit the Wazuh agent config to customize Syscollector scan intervals, restart the agent safely to trigger scans, and verify fresh inventory data in the dashboard. Covers what Syscollector collects, interval units (s/m/h/d), listening-vs-all ports, and where each knob lives in ossec.conf. Includes before/after validation steps and screenshots so others can reproduce the exact setup.",
//   image: syscollectorIntervals,
//   technologies: [
//     "Wazuh",
//     "Syscollector",
//     "Ubuntu",
//     "VirtualBox",
//     "Linux",
//     "GitHub Pages"
//   ],
//   features: [
//     "Backup and edit agent config (`/var/ossec/etc/ossec.conf`)",
//     "Set precise scan intervals (e.g., 30m, 6h, 1d)",
//     "Safer trigger via agent restart instead of ultra-short intervals",
//     "Collect essentials only: hardware/OS/network/packages/processes",
//     "Choose listening-only vs all ports with `ports all=\"no|yes\"`",
//     "Validate updates in Wazuh dashboard (System + Detailed Inventory views)"
//   ],
//   challenges: [
//     "Balancing freshness of inventory with agent/system overhead",
//     "Making changes reproducible across different hosts and versions",
//     "Explaining the config options without overwhelming the reader"
//   ],
//   solutions: [
//     "Documented a minimal, safe baseline config and restart flow",
//     "Standardized steps with copy-pastable snippets and screenshots",
//     "Kept the scope tight: only the knobs most teams actually touch"
//   ],
//   liveLink: "https://github.com/hafizkh/Customizing-the-System-Inventory",            
//   githubLink: "",          
//   category: "CyberSecurity",
// },



];
