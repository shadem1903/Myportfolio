import React from "react";

export const CustomCursor: React.FC = () => {
  const cursorDotRef = React.useRef<HTMLDivElement>(null);
  const cursorOutlineRef = React.useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = React.useState(false);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${clientX}px`;
        cursorDotRef.current.style.top = `${clientY}px`;
      }
      
      if (cursorOutlineRef.current) {
        // Add slight delay for outline for smooth effect
        setTimeout(() => {
          if (cursorOutlineRef.current) {
            cursorOutlineRef.current.style.left = `${clientX}px`;
            cursorOutlineRef.current.style.top = `${clientY}px`;
          }
        }, 80);
      }
    };

    const handleMouseDown = () => {
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = "translate(-50%, -50%) scale(0.7)";
      }
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = "translate(-50%, -50%) scale(1.2)";
      }
    };

    const handleMouseUp = () => {
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      }
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      }
    };

    const handleMouseEnterLink = () => {
      setIsHovering(true);
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = "translate(-50%, -50%) scale(1.5)";
        cursorDotRef.current.style.background = "rgba(var(--primary-color, 0, 111, 238), 0.4)";
      }
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.width = "30px";
        cursorOutlineRef.current.style.height = "30px";
        cursorOutlineRef.current.style.borderColor = "var(--primary-color, #006FEE)";
      }
    };

    const handleMouseLeaveLink = () => {
      setIsHovering(false);
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = "translate(-50%, -50%) scale(1)";
        cursorDotRef.current.style.background = "rgba(255, 255, 255, 0.8)";
      }
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.width = "48px";
        cursorOutlineRef.current.style.height = "48px";
        cursorOutlineRef.current.style.borderColor = "rgba(var(--primary-color, 0, 111, 238), 0.6)";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Add event listeners to all clickable elements
    const clickableElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    
    clickableElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnterLink);
      element.addEventListener("mouseleave", handleMouseLeaveLink);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      
      clickableElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnterLink);
        element.removeEventListener("mouseleave", handleMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot"></div>
      <div ref={cursorOutlineRef} className="cursor-outline"></div>
    </>
  );
};