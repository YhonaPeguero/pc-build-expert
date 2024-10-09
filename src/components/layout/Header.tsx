// src/components/layout/Header.tsx
import { Cpu } from 'lucide-react';
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center">
          <Cpu className="mr-2" />
          PC Build Expert
        </div>
        <Button variant="secondary" className="bg-zinc-800 text-zinc-100 hover:bg-zinc-700 transition-colors duration-300">
          Contact Us
        </Button>
      </nav>
    </header>
  );
};

export default Header;
