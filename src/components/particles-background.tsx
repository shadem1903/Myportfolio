import React from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  moveX: number;
  moveY: number;
  duration: number;
}

export const ParticlesBackground: React.FC = () => {
  const [particles, setParticles] = React.useState<Particle[]>([]);
  
  React.useEffect(() => {
    const colors = ["255, 255, 255", "0, 111, 238", "120, 40, 200"];
    const particleCount = 20;
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        moveX: (Math.random() - 0.5) * 200,
        moveY: (Math.random() - 0.5) * 200,
        duration: Math.random() * 20 + 10
      });
    }
    
    setParticles(newParticles);
  }, []);
  
  return (
    <div className="particles-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: 0.3,
            "--particle-color": particle.color,
            "--move-x": `${particle.moveX}px`,
            "--move-y": `${particle.moveY}px`,
            "--duration": `${particle.duration}s`
          } as React.CSSProperties}
        ></div>
      ))}
    </div>
  );
};