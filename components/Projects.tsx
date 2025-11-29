import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Fit Track",
      description: "A comprehensive fitness tracking web application that enables users to log workouts, monitor progress over time, and visualize fitness journeys through interactive charts.",
      tags: ["Web App", "Analytics", "Health"],
      status: "Completed"
    },
    {
      title: "Freshers Invitation System",
      description: "A web-based portal for college freshers events. Manages event details, RSVP responses, and maintains student information for seamless coordination.",
      tags: ["Event Management", "Portal", "Database"],
      status: "Completed"
    },
    {
      title: "AI Helper for Education",
      description: "An AI-powered tool providing intelligent learning support, detailed explanations, and curated study resources to enhance the educational experience.",
      tags: ["AI", "Education", "Machine Learning"],
      status: "In Development"
    }
  ];

  const getDelay = (index: number) => {
    const delays = ['delay-0', 'delay-100', 'delay-200'];
    return delays[index % delays.length];
  };

  return (
    <section id="projects" className="py-20 px-6 lg:px-12 max-w-6xl mx-auto">
      <FadeInSection>
        <h2 className="text-3xl font-bold font-heading text-[#173b6c] relative pb-4 mb-12 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-primary">
          Projects
        </h2>
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <FadeInSection key={idx} delay={getDelay(idx)} className="h-full">
            <div className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
              <div className="h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden shrink-0">
                 {/* Decorative background for project card header */}
                 <div className="absolute inset-0 bg-gradient-to-br from-[#149ddd] to-[#040b14] opacity-90 group-hover:opacity-100 transition-opacity"></div>
                 <Code className="text-white opacity-20 transform scale-150 group-hover:scale-125 transition-transform duration-500" size={64} />
                 <div className="absolute bottom-4 left-4">
                   <span className={`text-xs font-bold px-2 py-1 rounded text-white ${project.status === 'In Development' ? 'bg-yellow-500' : 'bg-green-500'}`}>
                     {project.status}
                   </span>
                 </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#173b6c] mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default Projects;