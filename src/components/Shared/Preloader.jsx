import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const hellos = [
  '你好', 'こんにちは', '안녕하세요', 'नमस्ते', 'مرحبا',
  'Hola', 'Bonjour', 'Ciao', 'Hallo', 'Olá',
  'Здравствуйте', 'สวัสดี', 'Hej', 'Merhaba', 'Sawubona',
  'Բարև', 'Mingalaba', 'Xin chào', 'Habari', 'Halló',
  'Buna', 'Dia dhuit', 'Saluton', 'Bongu', 'Namaskara',
  'Kamusta', 'Salam', 'Tungjatjeta', 'Salama', 'Privet',
  'Hello',
];

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      if (i < hellos.length) {
        setIndex(i);
      } else {
        clearInterval(interval);
        setTimeout(() => setIsVisible(false), 600);
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
          className="fixed top-0 left-0 w-full h-full bg-black text-[#d41b1b] z-[5000000] pointer-events-none overflow-hidden flex items-center justify-center"
        >
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.06, ease: [0.76, 0, 0.24, 1] }}
            className="block text-[clamp(2.5rem,18vw,12rem)] tracking-[-0.05em] leading-[0.8] font-light max-w-full px-4 whitespace-nowrap overflow-hidden"
          >
            {hellos[index]}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
