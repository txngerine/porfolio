import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { premiumEase } from './motion';

const SplitReveal = ({ text, as: Tag = 'h2', className = '', once = true }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  const chars = text.split('');

  return (
    <Tag ref={ref} className={className}>
      {chars.map((char, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{
            whiteSpace: char === ' ' ? 'normal' : 'nowrap',
            verticalAlign: 'bottom',
          }}
        >
          <motion.span
            className="inline-block"
            initial={{ y: '100%' }}
            animate={isInView ? { y: 0 } : { y: '100%' }}
            transition={{
              duration: 0.6,
              delay: i * 0.03,
              ease: premiumEase,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export default SplitReveal;
