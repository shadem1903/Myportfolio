import React from "react";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-deep-blue/50 backdrop-blur-md border-t border-white/5 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="#" className="font-bold text-inherit flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center">
                <Icon icon="lucide:code" className="text-white text-2xl" />
              </div>
              <span className="text-white text-2xl">Mi Portafolio</span>
            </Link>
            <p className="text-foreground-400 text-lg">
              Desarrollador Web Full Stack
            </p>
          </div>
          
          <div className="flex gap-8">
            <Link href="https://github.com" isExternal aria-label="GitHub" className="hover:scale-125 transition-transform duration-300 text-white/70 hover:text-white">
              <Icon icon="logos:github-icon" className="text-3xl" />
            </Link>
            <Link href="https://linkedin.com" isExternal aria-label="LinkedIn" className="hover:scale-125 transition-transform duration-300 text-white/70 hover:text-white">
              <Icon icon="logos:linkedin-icon" className="text-3xl" />
            </Link>
            <Link href="https://twitter.com" isExternal aria-label="Twitter" className="hover:scale-125 transition-transform duration-300 text-white/70 hover:text-white">
              <Icon icon="logos:twitter" className="text-3xl" />
            </Link>
            <Link href="mailto:contacto@ejemplo.com" aria-label="Email" className="hover:scale-125 transition-transform duration-300 text-white/70 hover:text-white">
              <Icon icon="lucide:mail" className="text-3xl" />
            </Link>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-10 text-center text-foreground-400">
          <p>© {currentYear} Juan Pérez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};