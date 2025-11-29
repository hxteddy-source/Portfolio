import React from 'react';
import { Code, Globe, Database, Cpu } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Skills: React.FC = () => {
  const skills = [
    { 
      category: "Programming", 
      icon: <Code className="text-primary" size={24} />,
      items: ["Java", "Python", "Problem Solving", "Clean Coding"] 
    },
    { 
      category: "Web Development", 
      icon: <Globe className="text-primary" size={24} />,
      items: ["HTML/CSS", "JavaScript", "Flask", "React Basics"] 
    },
    { 
      category: "Database & Backend", 
      icon: <Database className="text-primary" size={24} />,
      items: ["SQL", "Database Design", "REST APIs"] 
    },
    { 
      category: "Emerging Tech", 
      icon: <Cpu className="text-primary" size={24} />,
      items: ["AI/ML Basics", "Data Analysis", "Algorithm Design"] 
    },
  ];

  // Helper to map index to tailwind delay class
  const getDelay = (index: number) => {
    const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-300'];
    return delays[index % delays.length];
  };

  return (
    <section id="skills" className="py-20 px-6 lg:px-12 bg-[#f5f8fd]">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl font-bold font-heading text-[#173b6c] relative pb-4 mb-12 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-primary">
            Skills
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, idx) => (
            <FadeInSection key={idx} delay={getDelay(idx)} className="h-full">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="flex items-center gap-3 mb-4 border-b pb-2 border-gray-100">
                  {skillGroup.icon}
                  <h3 className="text-xl font-bold text-[#173b6c]">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;