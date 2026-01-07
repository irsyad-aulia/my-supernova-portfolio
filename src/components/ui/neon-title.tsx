import React from "react";

export const NeonTitle = () => {
  return (
    <div className="text-center relative z-20">
     <h1 
    className="animate-flicker text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
        style={{
            color: 'transparent',
            
            WebkitTextStroke: '2px #FFFFFF', 
            
            textShadow: `
                0 0 10px rgba(0, 255, 255, 0.8),
                0 0 20px rgba(0, 255, 255, 0.6),
                0 0 40px rgba(0, 255, 255, 0.4),
                0 0 80px rgba(0, 255, 255, 0.2)
            `
        }}
     >
        Project Supernova <br /> The New Era
      </h1>
    </div>
  );
};