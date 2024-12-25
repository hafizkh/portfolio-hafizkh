import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: "Tech Innovators Inc.",
    position: "Senior Full Stack Developer",
    period: "2021 - Present",
    description: "Led development of enterprise-scale applications, mentored junior developers, and implemented CI/CD pipelines.",
    achievements: [
      "Reduced application load time by 40%",
      "Implemented microservices architecture",
      "Led team of 5 developers"
    ]
  },
  {
    company: "Digital Solutions Ltd.",
    position: "Full Stack Developer",
    period: "2019 - 2021",
    description: "Developed and maintained multiple client projects using React and Node.js.",
    achievements: [
      "Delivered 15+ successful projects",
      "Improved code coverage to 95%",
      "Introduced automated testing"
    ]
  },
  {
    company: "StartUp Hub",
    position: "Junior Developer",
    period: "2018 - 2019",
    description: "Worked on frontend development and collaborated with UX team.",
    achievements: [
      "Developed responsive UI components",
      "Reduced bug reports by 30%",
      "Contributed to core feature development"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Professional Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              <div className="absolute left-0 top-0 h-full w-px bg-indigo-200">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500"></div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                </div>
                <div className="flex items-center text-indigo-600 mb-4">
                  <Briefcase className="w-4 h-4 mr-2" />
                  {exp.company}
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}