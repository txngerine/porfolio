import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[1000] flex items-start justify-between py-6 px-4 md:px-8 mix-blend-difference text-[var(--primary)] pointer-events-auto">
        <a href="/" className="text-sm md:text-base font-light tracking-wide uppercase hidden md:block hover:text-[var(--brand)] transition-colors duration-700">
          Kael Donovan
        </a>
        
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group pointer-events-auto"
        >
          <div className="w-[140px] h-[5px] rounded-full bg-[var(--primary)] transition-all duration-700 group-hover:w-[160px]" />
          <span className="text-[0.6rem] tracking-[0.07rem] uppercase">
            {isOpen ? 'Close' : 'Menu'}
          </span>
        </div>

        <a href="#contact" className="text-sm md:text-base font-light tracking-wide uppercase hidden md:block hover:text-[var(--brand)] transition-colors duration-700">
          Contact
        </a>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)', visibility: 'hidden' }}
            animate={{ clipPath: 'inset(0 0 0% 0)', visibility: 'visible' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="fixed z-[999] w-[calc(100%-20px)] top-[10px] left-[10px] rounded-lg glass-panel flex flex-col items-center justify-end pt-36 pb-12 pointer-events-auto"
          >
            <ul className="flex flex-col items-center gap-3 w-full group/list">
              {['Home', 'About me', 'Projects', 'Contact'].map((item) => (
                <li key={item} className="overflow-hidden">
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    onClick={() => setIsOpen(false)}
                    className="text-[1.8rem] md:text-[2.75rem] font-light uppercase leading-[0.9] block opacity-100 transition-opacity duration-700 group-hover/list:opacity-30 hover:!opacity-100"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
