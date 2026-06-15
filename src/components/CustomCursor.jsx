import React from 'react';
import { motion, useSpring } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

const CustomCursor = () => {
  const { x, y } = useMousePosition();

  const dotX = useSpring(x, { damping: 50, stiffness: 400 });
  const dotY = useSpring(y, { damping: 50, stiffness: 400 });
  
  const circleX = useSpring(x, { damping: 20, stiffness: 100 });
  const circleY = useSpring(y, { damping: 20, stiffness: 100 });

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
