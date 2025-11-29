import React from 'react';
import { ChevronRight } from 'lucide-react';
import FadeInSection from './FadeInSection';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-12 max-w-6xl mx-auto">
      <div className="mb-12">
        <FadeInSection>
          <h2 className="text-3xl font-bold font-heading text-[#173b6c] relative pb-4 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-primary">
            About
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I am a dedicated Computer Engineering student with a strong passion for software development, artificial intelligence, and machine learning. My journey involves exploring new technologies and building practical solutions that solve real-world problems.
          </p>
        </FadeInSection>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <FadeInSection delay="delay-100">
            <img 
              src="https://picsum.photos/id/1010/800/1000" 
              alt="Profile" 
              className="w-full rounded shadow-lg"
            />
          </FadeInSection>
        </div>
        <div className="lg:col-span-2">
          <FadeInSection delay="delay-200">
            <h3 className="text-2xl font-bold text-[#173b6c] mb-4">
              Computer Engineer &amp; Software Developer
            </h3>
            <p className="italic text-gray-600 mb-6">
              Currently pursuing B.Tech at Sri Vasavi Engineering College with a focus on creating practical tools for education and technology.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 mb-8">
              <div className="flex items-center gap-2">
                <ChevronRight className="text-primary" size={20} />
                <strong className="text-gray-800">Degree:</strong>
                <span className="text-gray-600">B.Tech (Pursuing)</span>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight className="text-primary" size={20} />
                <strong className="text-gray-800">Phone:</strong>
                <span className="text-gray-600">+91 9347892915</span>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight className="text-primary" size={20} />
                <strong className="text-gray-800">City:</strong>
                <span className="text-gray-600">Eluru, AP, India</span>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight className="text-primary" size={20} />
                <strong className="text-gray-800">Email:</strong>
                <span className="text-gray-600 text-sm md:text-base">harivenkatcm048@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight className="text-primary" size={20} />
                <strong className="text-gray-800">Freelance:</strong>
                <span className="text-gray-600">Available</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              With a solid foundation in Java, Python, and web development, I enjoy bridging the gap between complex algorithms and user-friendly applications. My academic journey from Sir CRR Polytechnic to my current engineering studies has been fueled by curiosity and a drive for excellence.
            </p>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default About;