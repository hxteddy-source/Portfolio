import React from 'react';
import TypingEffect from './TypingEffect';
import FadeInSection from './FadeInSection';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative w-full h-screen bg-cover bg-center bg-fixed flex flex-col justify-center px-8 lg:px-16"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop")',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 text-white max-w-4xl">
        <FadeInSection>
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-4">
            Hari Venkat
          </h1>
          <p className="text-2xl md:text-3xl font-light">
            I'm <TypingEffect words={['Computer Engineer', 'Software Developer', 'AI Enthusiast', 'Problem Solver']} />
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Hero;