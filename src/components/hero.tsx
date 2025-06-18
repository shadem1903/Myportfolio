import React from "react";
import { Button, Link, Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    
    // Calculate mouse position relative to the container
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    setMousePosition({ x, y });
  };
  
  return (
    <div 
      className="bg-space-gradient pt-32 pb-40 px-4 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10 -z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
      
      <div 
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16"
        style={{
          transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`
        }}
      >
        <div className="md:w-1/3 flex justify-center relative">
          <div 
            className="floating-element"
            style={{
              transform: `translateX(${mousePosition.x * 20}px) translateY(${mousePosition.y * 20}px)`
            }}
          >
            <div className="relative">
              <Avatar
                src="https://img.heroui.chat/image/avatar?w=400&h=400&u=123"
                className="w-64 h-64 text-large border-4 border-neon-blue/30 shadow-neon-blue z-10"
                isBordered
                color="primary"
              />
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-20 blur-md -z-10"></div>
            </div>
          </div>
        </div>
        <div 
          className="md:w-2/3 text-center md:text-left"
          style={{
            transform: `translateX(${-mousePosition.x * 10}px) translateY(${-mousePosition.y * 10}px)`
          }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hola, soy <span className="gradient-text text-glow">Josué Rivera</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-neon-blue/80 mb-8">
            Desarrollador Web Junior Full Stack
          </h2>
          <p className="text-foreground-400 text-lg mb-10 max-w-2xl">
            Me gusta crear experiencias web atractivas, funcionales y totalmente optimizadas para cualquier dispositivo. Soy un apasionado de la tecnología, siempre con ganas de aprender e innovar para ofrecer soluciones de calidad que realmente hagan la diferencia.
          </p>
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <Button 
              as={Link} 
              href="#proyectos" 
              color="primary" 
              size="lg"
              endContent={<Icon icon="lucide:folder" />}
              className="shadow-neon-blue bg-gradient-to-r from-neon-blue to-neon-purple text-white border-none"
            >
              Ver Proyectos
            </Button>
            <Button 
              as={Link} 
              href="#contacto" 
              variant="bordered" 
              size="lg"
              endContent={<Icon icon="lucide:mail" />}
              className="border-neon-blue/50 text-neon-blue hover:shadow-neon-blue"
            >
              Contáctame
            </Button>
          </div>
          <div className="flex gap-8 mt-12 justify-center md:justify-start">
            <Link href="https://github.com" isExternal aria-label="GitHub" className="hover:scale-125 transition-transform duration-300 text-white/70 hover:text-white">
              <Icon icon="ri:github-fill" className="text-3xl" />
            </Link>
            <Link href="https://linkedin.com" isExternal aria-label="LinkedIn" className="hover:scale-125 transition-transform duration-300 text-white/70 hover:text-white">
              <Icon icon="logos:linkedin-icon" className="text-3xl" />
            </Link>
            <Link href="https://twitter.com" isExternal aria-label="Twitter" className="hover:scale-125 transition-transform duration-300 text-white/70 hover:text-white">
              <Icon icon="mdi:gitlab" className="text-3xl" />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-deep-blue to-transparent" />
    </div>
  );
};