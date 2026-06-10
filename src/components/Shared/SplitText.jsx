import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

const SplitText = ({ text, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const shouldReduceMotion = useReducedMotion();
  
  const words = text.split(" ");

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap overflow-hidden mr-[0.3em]">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={shouldReduceMotion ? { opacity: 0 } : { y: "100%" }}
              animate={isInView ? (shouldReduceMotion ? { opacity: 1 } : { y: 0 }) : {}}
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.6,
                delay: shouldReduceMotion ? 0 : delay + (wordIndex * 0.015) + (charIndex * 0.003),
                ease: shouldReduceMotion ? "easeOut" : [0.16, 1, 0.3, 1]
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  );
};

export default SplitText;
