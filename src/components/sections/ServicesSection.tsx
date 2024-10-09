// src/components/sections/ServicesSection.tsx
import { CheckCircle } from 'lucide-react';

const ServiceCard = ({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: string }) => (
  <div className={`bg-zinc-700 p-6 rounded-lg shadow-lg border border-blue-500 animate-fade-in animation-delay-${delay}`}>
    <div className="bg-blue-500 rounded-full p-3 inline-block mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-zinc-300">{description}</p>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="py-16 bg-zinc-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">Expert PC Building Consultation</h2>
        <p className="text-lg mb-12 text-center max-w-2xl mx-auto text-zinc-300 animate-fade-in animation-delay-300">
          We offer personalized recommendations and guidance for assembling computers, 
          optimizing performance, and upgrading components for any use case.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<CheckCircle className="text-zinc-900 h-8 w-8" />}
            title="Save Time"
            description="Navigate thousands of options with expert guidance."
            delay="600"
          />
          <ServiceCard 
            icon={<CheckCircle className="text-zinc-900 h-8 w-8" />}
            title="Expert Advice"
            description="Benefit from years of professional experience."
            delay="900"
          />
          <ServiceCard 
            icon={<CheckCircle className="text-zinc-900 h-8 w-8" />}
            title="Tailored Solutions"
            description="Get suggestions that fit your unique requirements."
            delay="1200"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

// src/components/sections/TestimonialsSection.tsx