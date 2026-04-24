import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export default function Portrait() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse tracking for perspective tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className="relative w-full max-w-[400px] aspect-[4/5] perspective-1000 group mx-auto lg:mx-0"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full relative"
      >
        {/* Main Frame Border */}
        <div className="absolute inset-x-[-10px] inset-y-[-10px] border border-primary/20 pointer-events-none chamfer-large"></div>
        <div className="absolute inset-0 border border-primary/40 pointer-events-none chamfer-large overflow-hidden">
             {/* Scanning Line overlay */}
             <motion.div 
               animate={{ top: ["0%", "100%", "0%"] }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="absolute left-0 w-full h-[2px] bg-primary/40 blur-[2px] z-20"
             />
        </div>

        {/* HUD Elements */}
        <AnimateHUD isHovered={isHovered} />

        {/* The Image */}
        <div className="w-full h-full chamfer-large overflow-hidden border-2 border-primary/10 relative bg-[#0d0e0f]">
          <motion.img 
            src="/public/me.webp"
            alt="Mohammed Muatasim Siddig"
            className="w-full h-full object-cover grayscale brightness-75 contrast-125"
            animate={{ 
              filter: isHovered ? "grayscale(0%) brightness(100%) contrast(100%)" : "grayscale(100%) brightness(75%) contrast(125%)",
              scale: isHovered ? 1.05 : 1
            }}
          />
          
          {/* Glitch Overlay - only visible on hover or intermittent random triggers */}
          {isHovered && <GlitchOverlay />}
          
          {/* Bottom Data Strip */}
          <div className="absolute bottom-0 left-0 w-full bg-primary/10 backdrop-blur-md border-t border-primary/30 p-3 flex justify-between items-center z-30">
            <div className="flex flex-col">
              <span className="text-[8px] font-mono text-primary uppercase">Identity Verification</span>
              <span className="text-[10px] font-black text-white uppercase tracking-wider">MUATASIM // OP_01</span>
            </div>
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-primary/40"></div>
              <div className="w-1 h-3 bg-primary/70"></div>
              <div className="w-1 h-3 bg-primary"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function AnimateHUD({ isHovered }: { isHovered: boolean }) {
  return (
    <>
      {/* Corner Brackets */}
      <motion.div 
        animate={{ opacity: isHovered ? 1 : 0.4, scale: isHovered ? 1.05 : 1 }}
        className="absolute -top-4 -left-4 text-primary z-40"
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M40 2H6C3.79086 2 2 3.79086 2 6V40" stroke="currentColor" strokeWidth="2" />
        </svg>
      </motion.div>
      <motion.div 
        animate={{ opacity: isHovered ? 1 : 0.4, scale: isHovered ? 1.05 : 1 }}
        className="absolute -bottom-4 -right-4 text-primary z-40 rotate-180"
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M40 2H6C3.79086 2 2 3.79086 2 6V40" stroke="currentColor" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Floating Readouts */}
      <motion.div 
        animate={{ y: [0, -5, 0], opacity: isHovered ? 1 : 0 }}
        className="absolute top-10 -right-20 pointer-events-none hidden xl:block"
      >
        <div className="border-l border-primary/50 pl-4 py-2">
          <div className="text-[8px] font-mono text-primary/60">BIOSIGNAL_FREQ</div>
          <div className="text-sm font-mono text-white">4.2 GHz</div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 5, 0], opacity: isHovered ? 1 : 0 }}
        transition={{ delay: 0.2 }}
        className="absolute bottom-20 -left-20 pointer-events-none hidden xl:block"
      >
        <div className="border-r border-primary/50 pr-4 py-2 text-right">
          <div className="text-[8px] font-mono text-primary/60">UPTIME_RELAY</div>
          <div className="text-sm font-mono text-white">99.9%</div>
        </div>
      </motion.div>
    </>
  );
}

function GlitchOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 mix-blend-overlay opacity-30">
        <motion.div 
            animate={{ 
                x: [-2, 2, -1, 0, 1],
                y: [1, -2, 0, 2, -1]
            }}
            transition={{ duration: 0.2, repeat: Infinity }}
            className="absolute inset-0 bg-primary/20 overflow-hidden"
        >
            <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,transparent_0%,black_100%)]"></div>
        </motion.div>
    </div>
  );
}
