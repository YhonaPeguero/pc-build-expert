// src/App.tsx
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSections';
import ServicesSection from './components/sections/ServicesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;