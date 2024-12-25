import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/projects';
import AnimatedSection from '../AnimatedSection';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/" className="text-indigo-600 hover:text-indigo-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
        </Link>

        <AnimatedSection>
          <motion.img 
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover rounded-xl shadow-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          />
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{project.fullDescription}</p>

            <div className="flex gap-4 mb-8">
              <a 
                href={project.liveLink}
                className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Demo
              </a>
              <a 
                href={project.githubLink}
                className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <Github className="w-4 h-4 mr-2" />
                View Source Code
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="list-disc list-inside space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
                <ul className="list-disc list-inside space-y-2">
                  {project.challenges.map((challenge) => (
                    <li key={challenge} className="text-gray-700">{challenge}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Solutions</h2>
                <ul className="list-disc list-inside space-y-2">
                  {project.solutions.map((solution) => (
                    <li key={solution} className="text-gray-700">{solution}</li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}