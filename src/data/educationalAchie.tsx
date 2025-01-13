import { Trophy, Star, Target, GraduationCap, BookOpen, Award } from "lucide-react";

export const educationAchievements = [
  {
    icon: <GraduationCap className="w-12 h-12 text-indigo-500" />,
    title: "DP in Computer Application",
    description: "Häme UAS",
    majors: "Software Development & Cloud Computing",
    date: "2021 - 2024",
  },
  {
    icon: <BookOpen className="w-12 h-12 text-green-500" />,
    title: "AWS Cloud Practitioner CLF-C01",
    description: "Professional Certification",
    verification: "https://www.credly.com/badges/021b79dc-6c21-4275-8c6f-ae97449383ce/public_url",
    date: "2023",
  },
  {
    icon: <BookOpen className="w-12 h-12 text-green-500" />,
    title: "Microsoft Certified: Azure Fundamentals AZ-900",
    description: "Professional Certification",
    verification: "https://www.credly.com/badges/6e2c8a8d-3473-401c-bc03-16b1f3df95b9/linked_in_profile",
    date: "2023",
  },
  {
    icon: <GraduationCap className="w-12 h-12 text-indigo-500" />,
    title: "Master in Industrial Management",
    description: "Metropolia UAS",
    date: "2013 - 2015",
  },
  {
    icon: <GraduationCap className="w-12 h-12 text-indigo-500" />,
    title: "BE Chemical ",
    description: "University of Engg. & Technology",
    date: "2004 - 2008",
  },
];

export const professionalAchievements = [
  {
    icon: <Trophy className="w-12 h-12 text-yellow-500" />,
    title: "Best Developer Award 2023",
    description: "Recognized for exceptional contributions to open-source projects"
  },
  {
    icon: <Award className="w-12 h-12 text-blue-500" />,
    title: "100+ Projects Completed",
    description: "Successfully delivered over 100 projects for clients worldwide"
  },
  {
    icon: <Star className="w-12 h-12 text-purple-500" />,
    title: "5-Star Rating",
    description: "Maintained perfect client satisfaction across all projects"
  },
  {
    icon: <Target className="w-12 h-12 text-red-500" />,
    title: "Industry Recognition",
    description: "Featured in top tech publications and conferences"
  }
];