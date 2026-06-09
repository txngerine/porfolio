import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 15) + 5;
      if (count > 100) count = 100;
      setCounter(count);

      if (count === 100) {
        clearInterval(interval);
        setTimeout(() => setIsVisible(false), 500); // Small delay before hiding
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          style={{ transformOrigin: 'top' }}
          className="fixed top-0 left-0 w-full h-full bg-gradient-to-t from-[#f44e00] to-[#fa7300] text-black z-[5000000] pointer-events-none overflow-hidden"
        >
          <div className="absolute right-0 bottom-0 overflow-hidden px-4 md:px-8">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="block text-[40vw] md:text-[25vw] max-sm:text-[60vw] tracking-[-3vw] leading-[0.7] font-light"
            >
              {counter}
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
