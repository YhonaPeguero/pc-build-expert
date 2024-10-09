// src/components/layout/Footer.tsx
import { Mail, Phone } from 'lucide-react';
import { Button } from '../ui/button';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="flex items-center mb-2">
              <Mail className="mr-2 h-5 w-5" />
              info@pcbuildexpert.com
            </p>
            <p className="flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              (123) 456-7890
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-zinc-300 transition-colors">Facebook</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">Twitter</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">LinkedIn</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="mr-2 px-4 py-2 rounded-md bg-zinc-700 text-zinc-100 border border-zinc-600 focus:border-blue-500 focus:outline-none"
                required
              />
              <Button type="submit" className="bg-zinc-800 text-zinc-100 hover:bg-zinc-700">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 PC Build Expert. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;