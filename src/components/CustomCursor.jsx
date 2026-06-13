import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const dotX = useSpring(mousePosition.x, { damping: 50, stiffness: 400 });
  const dotY = useSpring(mousePosition.y, { damping: 50, stiffness: 400 });
  
  const circleX = useSpring(mousePosition.x, { damping: 20, stiffness: 100 });
  const circleY = useSpring(mousePosition.y, { damping: 20, stiffness: 100 });

  return (
    <>
      <motion.div
        className="custom-cursor"
        style={{ x: dotX, y: dotY }}
      />
      <motion.div
        className="cursor-follower"
        style={{ x: circleX, y: circleY }}
      />
    </>
  );
};

export default CustomCursor;
