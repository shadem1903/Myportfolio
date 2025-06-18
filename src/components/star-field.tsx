import React from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  twinkleDuration: number;
}

export const StarField: React.FC = () => {
  const [stars, setStars] = React.useState<Star[]>([]);
  
  React.useEffect(() => {
    const starCount = 150;
    const newStars: Star[] = [];
    
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 0.15 + 0.05,
        twinkleDuration: Math.random() * 5 + 2
      });
    }
    
    setStars(newStars);
  }, []);
  
  return (
    <div className="star-field">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star-bg"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}rem`,
            height: `${star.size}rem`,
            "--twinkle-duration": `${star.twinkleDuration}s`
          } as React.CSSProperties}
        ></div>
      ))}
    </div>
  );
};