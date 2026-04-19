import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none rounded-full border border-accent/50 z-50 hidden md:flex items-center justify-center overflow-hidden"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: '-50%',
          y: '-50%',
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
      >
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-full h-full border-t border-accent"
        />
      </motion.div>

      {/* Lagging trailing circle */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none rounded-full border border-white/5 z-[49] hidden md:block"
        style={{
          translateX: useSpring(cursorX, { damping: 40, stiffness: 200 }),
          translateY: useSpring(cursorY, { damping: 40, stiffness: 200 }),
          x: '-50%',
          y: '-50%',
        }}
      />

      {/* Main Pointer Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 pointer-events-none rounded-full bg-accent z-50 hidden md:block"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          x: '-50%',
          y: '-50%',
          scale: isHovering ? 4 : 1,
        }}
      >
        {isHovering && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute inset-x-[-12px] h-px bg-accent/30"
          />
        )}
      </motion.div>
    </>
  );
}
