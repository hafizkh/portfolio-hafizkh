import { Project, SecurityLab } from "../types/project";
import kalibro from "../assets/Kalibro-Audit-Tool.png";
import hyperStore from "../assets/Hyper-Store.png";
import weather from "../assets/Thunder-Weather-Finder.png";
import digitalReminder from "../assets/Digital-Reminder.png";
import hafizPortfolio from "../assets/Hafiz-Portfolio.png";
import restaurantImage from "../assets/school_restaurant_project.png";
import tictactoe from "../assets/tic-tac-toe.png";
import wazuhLab from "../assets/agent-list.png";
import wazuhSyscollector from "../assets/network-topology.png";
import wazuhSyscollectorIntervals from "../assets/system-inventory-dashboard.png";
import wazuhFIM from "../assets/fim-dashboard-view.png";
import wazuhFIMActiveResponse from "../assets/threat-hunting-dashboard.png";
import wazuhFIMVirusTotal from "../assets/virustotal-threat-hunting.png";
import wazuhThreatHunting from "../assets/intro-threat-hunting.png";
import wazuhRuleOverrides from "../assets/rule-override-visual.png";
import wazuhVulnerabilityDetection from "../assets/vulnerability-detection-dashboard.png";
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
    id: "tic-tac-toe",
    title: "Tic Tac Toe - AI-Powered Game",
    description:
      "A modern, responsive Tic Tac Toe game with unbeatable AI and local multiplayer.",
    fullDescription:
      "Tic Tac Toe is a sleek, fully-featured game built with React and Vite. It offers both single-player mode against an AI opponent with three difficulty levels (Easy, Hard, and Impossible) and a local two-player mode for playing with friends. The AI uses the minimax algorithm to provide an unbeatable challenge on the highest difficulty. The game features smooth animations, confetti celebrations on wins, score tracking across sessions, win streak counters, move history visualization, undo functionality, and a built-in game timer. The clean, modular codebase follows React best practices with custom hooks for state management and well-organized component architecture.",
    image: tictactoe,
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "CSS-in-JS",
    ],
    features: [
      "Single-player mode with AI opponent",
      "Three AI difficulty levels (Easy, Hard, Impossible)",
      "Unbeatable AI using minimax algorithm",
      "Local two-player multiplayer mode",
      "Score tracking across multiple games",
      "Win streak counter and badges",
      "Move history visualization with dots",
      "Undo functionality for taking back moves",       
      "Built-in game timer",
      "Smooth animations and confetti on win",
      "Responsive design for all devices",
    ],
    challenges: [
      "Implementing an unbeatable AI using the minimax algorithm",
      "Managing complex game state across multiple phases",
      "Creating smooth, performant animations without external libraries",
      "Handling undo functionality for both single and multiplayer modes",
      "Building a clean, maintainable component architecture",
    ],
    solutions: [
      "Implemented minimax algorithm with optimized recursion for AI decision-making",
      "Created a custom useGame hook to centralize all game state and logic",
      "Used CSS keyframe animations for smooth, performant visual effects",
      "Built intelligent undo system that handles AI moves in single-player mode",
      "Organized codebase with separate folders for components, hooks, utils, and constants",
      "Used barrel exports for clean imports throughout the application",
    ],
    liveLink: "https://tic-tac-toe-hafiz.netlify.app",
    githubLink: "https://github.com/hafizkh/Tic-Tac-Toe",
    category: "frontend",
  },
];

export const securityLabs: SecurityLab[] = [
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
      "GitHub Pages",
    ],
    features: [
      "Single-host virtual lab with Wazuh server and multiple agents",
      "Bridged networking for realistic LAN communication",
      "Agent deployment and status verification via Wazuh dashboard",
      "Clean docs site with architecture diagram and screenshots",
      "Reference agent configuration (`sample_ossec.conf`)",
    ],
    challenges: [
      "Getting bridged networking to consistently assign reachable IPs",
      "Ensuring agents register and stay connected to the manager",
      "Handling self-signed HTTPS access to the dashboard",
      "Structuring documentation for a professional portfolio presentation",
    ],
    solutions: [
      "Standardized VM network settings with bridged adapters on the same subnet",
      "Used the dashboard's agent wizard and validated `ossec.conf` manager IP",
      "Documented access via `https://<server-ip>` with certificate warning handling",
      "Published a GitHub Pages site from `docs/` with real screenshots and topology",
    ],
    liveLink: "https://hafizkh.github.io/wazuh-lab-environment/",
    githubLink: "https://github.com/hafizkh/wazuh-lab-environment",
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
      "GitHub Pages",
    ],
    features: [
      "Automatic system inventory collection from agents",
      "Centralized visualization in Wazuh dashboard",
      "Hardware, software, and process data collection",
      "Real lab environment with multiple OS agents",
      "Detailed documentation with screenshots and configuration",
    ],
    challenges: [
      "Ensuring consistent Syscollector data collection across different OS types",
      "Configuring agent settings for stable data reporting",
      "Interpreting inventory data in the Wazuh dashboard",
      "Structuring the project for clear documentation and reuse",
    ],
    solutions: [
      "Used default Syscollector configuration for seamless data collection",
      "Verified agent connectivity and reporting intervals",
      "Captured dashboard views for software, hardware, and network data",
      "Published full documentation with reproducible steps via GitHub Pages",
    ],
    liveLink: "https://hafizkh.github.io/wazuh-syscollector-inventory/",
    githubLink: "https://github.com/hafizkh/wazuh-syscollector-inventory",
  },
  {
    id: "wazuh-syscollector-intervals",
    title: "Customising Wazuh Syscollector Scanning Intervals",
    description:
      "Practical configuration project demonstrating how to customize Syscollector scan intervals and inventory collection behavior in Wazuh agents.",
    fullDescription:
      "This project focuses on customizing Wazuh Syscollector behavior to control how often system inventory data is collected from endpoints. It walks through reviewing the default Syscollector configuration, adjusting scan intervals, enabling or disabling specific inventory modules, and safely applying changes through the Wazuh agent configuration file. The lab highlights real-world use cases such as reducing resource usage, improving asset visibility, and supporting vulnerability detection with accurate inventory data. Results are validated directly in the Wazuh dashboard using system inventory and detailed inventory views, with real screenshots and step-by-step documentation.",
    image: wazuhSyscollectorIntervals,
    technologies: [
      "Wazuh",
      "Syscollector",
      "Ubuntu",
      "Linux",
      "Wazuh Dashboard",
      "GitHub Pages",
    ],
    features: [
      "Review and modification of default Syscollector configuration",
      "Custom scan interval configuration (minutes, hours, days)",
      "Selective inventory collection (hardware, packages, ports, processes)",
      "Safe configuration workflow with backups and agent restarts",
      "Verification using Wazuh dashboard system and detailed inventory views",
    ],
    challenges: [
      "Understanding default Syscollector behavior and scan frequency",
      "Balancing scan intervals with system resource usage",
      "Ensuring configuration changes apply correctly across agents",
      "Interpreting inventory data accurately in the dashboard",
    ],
    solutions: [
      "Reviewed and documented the default syscollector wodle configuration",
      "Used practical interval values instead of aggressive scan frequencies",
      "Applied changes via ossec.conf with proper backups and agent restarts",
      "Validated results through dashboard inventory panels with screenshots",
    ],
    liveLink: "https://hafizkh.github.io/Customizing-the-System-Inventory/",
    githubLink: "https://github.com/hafizkh/Customizing-the-System-Inventory",
  },
  {
    id: "wazuh-fim",
    title: "Wazuh File Integrity Monitoring (FIM)",
    description:
      "Real-time file integrity monitoring using Wazuh to detect file creation, modification, and deletion on endpoints.",
    fullDescription:
      "This project demonstrates the implementation of File Integrity Monitoring (FIM) using Wazuh's Syscheck module. It focuses on monitoring both critical system directories and a user-defined directory with real-time detection enabled. The setup tracks file creation, modification, and deletion events instantly, assigning rule IDs and severity levels that appear in the Wazuh dashboard. The project validates real-time monitoring by performing controlled file operations and observing immediate updates in both the dashboard and event logs. The documentation includes step-by-step configuration, screenshots, and practical testing scenarios.",
    image: wazuhFIM,
    technologies: [
      "Wazuh",
      "Syscheck (FIM)",
      "Ubuntu",
      "Linux",
      "Wazuh Dashboard",
    ],
    features: [
      "Real-time monitoring of user-defined directories",
      "Detection of file creation, modification, and deletion",
      "Configurable FIM rules via ossec.conf",
      "Event logging with rule IDs and severity levels",
      "Visual validation using dashboard and event views",
    ],
    challenges: [
      "Understanding default FIM scan frequency and behavior",
      "Configuring real-time monitoring without excessive resource usage",
      "Ensuring events are correctly categorized and visible in the dashboard",
      "Testing all file lifecycle events reliably",
    ],
    solutions: [
      "Reviewed and documented the default Syscheck configuration",
      'Enabled real-time monitoring using realtime="yes" for selected directories',
      "Restarted agents to safely apply configuration changes",
      "Validated results using controlled file add, modify, and delete operations",
    ],
    liveLink: "https://hafizkh.github.io/File-Integrity-Monitoring/",
    githubLink: "https://github.com/hafizkh/File-Integrity-Monitoring",
  },
  {
    id: "wazuh-fim-active-response",
    title: "Wazuh FIM + Active Response Automation",
    description:
      "Automated malware detection and removal using Wazuh FIM, VirusTotal integration, and Active Response.",
    fullDescription:
      "This project extends Wazuh File Integrity Monitoring by integrating VirusTotal and Active Response to enable automated threat mitigation. When FIM detects a new or modified file, its hash is sent to VirusTotal for reputation analysis. If the file is identified as malicious, a predefined Active Response rule triggers a custom script that automatically deletes the file on the endpoint. The workflow is tested using the EICAR test file and validated through the Wazuh dashboard's Threat Hunting module. The project demonstrates how Wazuh can move beyond passive monitoring to real-time, automated incident response on both Linux and Windows agents.",
    image: wazuhFIMActiveResponse,
    technologies: [
      "Wazuh",
      "FIM",
      "Linux",
      "Windows",
      "Active Response",
      "VirusTotal",
    ],
    features: [
      "Automatic malware detection using VirusTotal integration",
      "Rule-based Active Response triggering",
      "Custom response script for file removal",
      "Real-time threat handling without manual intervention",
      "Cross-platform support for Linux and Windows agents",
    ],
    challenges: [
      "Coordinating FIM, VirusTotal, and Active Response workflows",
      "Safely executing automated file deletion on endpoints",
      "Testing malware response without introducing real threats",
      "Ensuring accurate logging and visibility of automated actions",
    ],
    solutions: [
      "Used VirusTotal integration to validate file reputation securely",
      "Triggered Active Response using rule ID 87105",
      "Implemented a controlled removal script with execution safeguards",
      "Tested automation safely using the EICAR test file",
    ],
    liveLink: "https://hafizkh.github.io/FIM-Active-Response/",
    githubLink: "https://github.com/hafizkh/FIM-Active-Response",
  },
  {
    id: "wazuh-fim-virustotal",
    title: "Wazuh FIM with VirusTotal Integration",
    description:
      "File reputation analysis using Wazuh File Integrity Monitoring and VirusTotal integration to identify malicious files.",
    fullDescription:
      "This project demonstrates how Wazuh File Integrity Monitoring (FIM) can be extended with VirusTotal integration to identify whether newly added or modified files are safe or malicious. When FIM detects a file change, its hash is automatically sent to VirusTotal, which checks it against multiple antivirus engines. The results, including detection count and file reputation, are displayed directly in the Wazuh dashboard. The setup is tested using the EICAR test file to safely simulate malware detection. This project focuses on practical threat detection, centralized visibility, and analyst-friendly validation.",
    image: wazuhFIMVirusTotal,
    technologies: ["Wazuh Dashboard", "VirusTotal", "Linux", "FIM"],
    features: [
      "Automatic file hash submission to VirusTotal",
      "Reputation checks using multiple antivirus engines",
      "Real-time visibility of malware detection results",
      "Centralized threat analysis in the Wazuh dashboard",
      "Safe testing using EICAR malware simulation",
    ],
    challenges: [
      "Understanding how FIM and VirusTotal interact",
      "Configuring API integration securely",
      "Testing malware detection without real threats",
      "Interpreting VirusTotal results in a SOC context",
    ],
    solutions: [
      "Used VirusTotal API integration within Wazuh manager configuration",
      "Monitored user download directories using real-time FIM",
      "Validated detection using the EICAR test file",
      "Analyzed results via Threat Hunting and dashboard views",
    ],
    liveLink: "https://hafizkh.github.io/FIM-VirusTotal-Integration/",
    githubLink: "https://github.com/hafizkh/FIM-VirusTotal-Integration",
  },
  {
    id: "wazuh-threat-hunting",
    title: "Introduction to Threat Hunting with Wazuh",
    description:
      "Foundational threat hunting project focusing on proactive log analysis and investigation using Wazuh.",
    fullDescription:
      "This project introduces the principles of threat hunting and demonstrates how Wazuh supports proactive security investigations. Instead of relying solely on alerts, the project focuses on searching and analyzing centralized log data to uncover suspicious behavior. It covers the threat-hunting lifecycle, log centralization, the importance of log archives, and practical use of the Discover feature for exploratory analysis. The project also explains how Wazuh decoders transform raw logs into structured data, enabling effective query-based investigations across systems and sources.",
    image: wazuhThreatHunting,
    technologies: ["Wazuh", "Windows", "Linux", "Log Archives"],
    features: [
      "Centralized collection of security logs",
      "Proactive threat hunting methodology",
      "Log archive analysis beyond alert-based detection",
      "Query-based investigation using Discover",
      "Structured log parsing using decoders",
    ],
    challenges: [
      "Shifting from reactive alerts to proactive investigation",
      "Searching large volumes of unfiltered log data",
      "Making sense of raw, unstructured logs",
      "Forming effective threat-hunting hypotheses",
    ],
    solutions: [
      "Applied a structured threat-hunting lifecycle",
      "Used log archives to analyze non-alerted events",
      "Leveraged Discover for flexible querying and filtering",
      "Relied on Wazuh decoders to normalize log data",
    ],
    liveLink: "https://hafizkh.github.io/Introduction-to-Threat-Hunting/",
    githubLink: "https://github.com/hafizkh/Introduction-to-Threat-Hunting",
  },
  {
    id: "wazuh-rule-overrides",
    title: "Modifying Default Wazuh Rules Safely",
    description:
      "Safe customization of Wazuh built-in detection rules to reduce alert noise while preserving security visibility.",
    fullDescription:
      "This project demonstrates how to safely override default Wazuh detection rules without modifying core rule files. It focuses on tuning alert severity to better match real-world environments by reducing unnecessary noise while retaining meaningful security signals. Two built-in PAM authentication rules are overridden using the overwrite mechanism, adjusting severity levels for session opened and failed login events. The changes are implemented in local_rules.xml and validated using wazuh-logtest to confirm correct behavior without generating live events.",
    image: wazuhRuleOverrides,
    technologies: ["Wazuh", "Rule Engine", "Linux", "wazuh-logtest"],
    features: [
      "Safe rule overriding without modifying core rule files",
      'Custom severity tuning using overwrite="yes"',
      "Noise reduction for common authentication events",
      "Clear separation of default and custom rules",
      "Offline validation using wazuh-logtest",
    ],
    challenges: [
      "Understanding how Wazuh rule precedence works",
      "Avoiding accidental duplication of default rules",
      "Ensuring overrides take effect as intended",
      "Testing changes without producing real alerts",
    ],
    solutions: [
      "Used local_rules.xml for controlled rule overrides",
      'Applied overwrite="yes" to explicitly replace default rules',
      "Reduced severity levels based on real-world relevance",
      "Verified changes using wazuh-logtest simulations",
    ],
    liveLink: "https://hafizkh.github.io/Modifying-Default-Rules/",
    githubLink: "https://github.com/hafizkh/Modifying-Default-Rules",
  },
  {
    id: "wazuh-vulnerability-detection",
    title: "Wazuh Vulnerability Detection Overview",
    description:
      "Automated vulnerability detection using Wazuh Syscollector and CVE correlation.",
    fullDescription:
      "This project provides a comprehensive overview of Wazuh's vulnerability detection workflow, focusing on how system inventory data is correlated with known CVEs. Using the Syscollector module, Wazuh builds a detailed inventory of installed operating systems, packages, and versions on each endpoint. The Vulnerability Detection module then compares this inventory against vulnerability feeds from Wazuh CTI to identify affected software. The project demonstrates how vulnerabilities are detected, tracked, resolved, and visualized through dashboards, inventory views, and event timelines.",
    image: wazuhVulnerabilityDetection,
    technologies: [
      "Wazuh",
      "Syscollector",
      "Vulnerability Detection",
      "CVE",
      "Linux",
      "Windows",
    ],
    features: [
      "Automated software and OS inventory collection",
      "CVE correlation using Wazuh CTI feeds",
      "Continuous vulnerability status tracking",
      "Detection of both new and resolved vulnerabilities",
      "Dashboard, inventory, and event-based visibility",
    ],
    challenges: [
      "Tracking vulnerabilities across many packages and versions",
      "Understanding how CVE ranges apply to installed software",
      "Verifying whether patching actually resolves vulnerabilities",
      "Prioritizing remediation across multiple endpoints",
    ],
    solutions: [
      "Used Syscollector to maintain accurate package inventories",
      "Correlated package versions with CVE definitions automatically",
      "Leveraged vulnerability inventory to track active vs solved issues",
      "Used dashboard views to prioritize remediation efforts",
    ],
    liveLink: "https://hafizkh.github.io/Vulnerability-Detection-Overview/",
    githubLink: "https://github.com/hafizkh/Vulnerability-Detection-Overview",
  },
];
