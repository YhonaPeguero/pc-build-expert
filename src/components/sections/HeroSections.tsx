// src/components/sections/HeroSection.tsx
import { Button } from "../ui/button";
import ParticleAnimation from '../animations/ParticleAnimation';
import PCModel from '../3d/PCModel';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 py-20 overflow-hidden">
      <ParticleAnimation />
      <PCModel />
      <div className="container mx-auto px-4 text-center relative z-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in-up">
          <span className="text-blue-300">Build Your Dream PC</span>
          <br />
          <span className="text-purple-300">with Expert Guidance</span>
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
          Personalized advice to choose the perfect components for your needs and budget.
        </p>
        <Button 
          size="lg" 
          className="text-lg px-8 bg-zinc-800 text-zinc-100 hover:bg-zinc-700 animate-fade-in-up animation-delay-600 transition-colors duration-300"
        >
          Get Your Free Consultation
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
