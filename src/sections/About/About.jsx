import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../../components/Buttons/Button';
import SplitText from '../../components/Shared/SplitText';
import useContentStore from '../../store/useContentStore';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const { aboutText } = useContentStore();

  return (
    <section id="about" className="p-4 md:p-8 min-h-screen relative w-full overflow-hidden flex items-center justify-center">
      
      {/* Background Image/Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay pointer-events-none" />

      <div className="glass-panel w-full min-h-[calc(100vh-4rem)] p-8 md:p-16 lg:p-24 flex flex-col items-center justify-center text-center relative z-10">
        
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[0.7rem] tracking-[0.4rem] uppercase font-bold text-[var(--brand)] mb-8"
        >
          About
        </motion.div>
        
        <SplitText 
          text={aboutText} 
          className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.75rem] font-light leading-[1.1] uppercase max-w-[68rem] text-[var(--primary)] mb-12 text-center justify-center" 
          delay={0.2} 
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
        >
          <Button href="#about">More About Me</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
