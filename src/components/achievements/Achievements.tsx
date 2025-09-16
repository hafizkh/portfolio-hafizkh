import React from 'react';
import AnimatedSection from '../AnimatedSection';
import EducationCertifications from './EducationCertifications';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Education & Certifications</h2>

        <AnimatedSection>
          <EducationCertifications />
        </AnimatedSection>
      </div>
    </section>
  );
}
