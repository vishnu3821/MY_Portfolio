import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovered(
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a, button, [data-cursor-hover]') !== null
      );
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleHover as any);
    document.addEventListener('mouseleave', () => setIsHovered(false));

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleHover as any);
      document.removeEventListener('mouseleave', () => setIsHovered(false));
    };
  }, []);

  const cursorVariants = {
    default: {
      x: position.x - 12, // Offset by half of circle width
      y: position.y - 12, // Offset by half of circle height
      scale: isClicked ? 0.9 : 1,
      borderColor: isHovered ? 'rgba(99, 102, 241, 0.8)' : 'rgba(255, 255, 255, 0.5)',
      backgroundColor: isHovered ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
    },
  };

  return (
    <>
      <motion.div
        className="fixed w-6 h-6 rounded-full pointer-events-none z-50 flex items-center justify-center"
        variants={cursorVariants}
        animate="default"
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        style={{
          border: '1px solid',
          pointerEvents: 'none',
        }}
      >
        <motion.div 
          className="w-1 h-1 bg-white rounded-full"
          animate={{ 
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 1 : 0.5
          }}
        />
      </motion.div>
    </>
  );
}
