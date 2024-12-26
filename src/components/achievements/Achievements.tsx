import React from 'react';
import AnimatedSection from '../AnimatedSection';
import ProfessionalAchievements from './ProfessionalAchievements';
import Education from './Education';

function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Education & Certifications</h2>

        <div className="space-y-16">
          <AnimatedSection>
            <h3 className="text-2xl font-semibold text-center mb-8"></h3>
            {/* <ProfessionalAchievements /> */}
          </AnimatedSection>

          <AnimatedSection>
            {/* <h3 className="text-2xl font-semibold text-center mb-8">Education & Certifications</h3> */}
            <Education />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default Achievements