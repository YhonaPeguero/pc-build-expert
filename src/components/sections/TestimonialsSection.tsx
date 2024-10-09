// src/components/sections/TestimonialsSection.tsx
import { Star } from 'lucide-react';

const TestimonialCard = ({ content, author }: { content: string, author: string }) => (
  <div className="bg-zinc-700 p-6 rounded-lg shadow-lg border border-blue-500 animate-fade-in">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="text-yellow-400 h-5 w-5" />
      ))}
    </div>
    <p className="mb-4 text-zinc-300">{content}</p>
    <p className="font-semibold">{author}</p>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard 
            content="Thanks to your recommendations, I was able to build a high-performance gaming PC without exceeding my budget. The expertise was invaluable!"
            author="- John Doe, Gamer"
          />
          <TestimonialCard 
            content="The expert advice I received helped me upgrade my workstation for video editing. The performance boost has significantly improved my workflow!"
            author="- Jane Smith, Video Editor"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
