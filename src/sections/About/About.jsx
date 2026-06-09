import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../../components/Buttons/Button';
import SplitText from '../../components/Shared/SplitText';

const aboutText = "I'm Akshay T.S, a Full Stack Developer who loves turning ideas into products people enjoy using. From mobile apps to web platforms, I build fast, modern, and meaningful digital experiences with Flutter, MERN, and Firebase—bringing creativity, technology, and a little bit of magic together in every project.";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section id="about" className="p-4 md:p-8 min-h-screen relative w-full overflow-hidden flex items-center justify-center">
      
      {/* Background Image/Pattern */}
      <div className="absolute inset-0 bg-[url('/images/overlay.webp')] bg-cover bg-center opacity-30 mix-blend-overlay pointer-events-none" />

      <div className="relative w-full min-h-[calc(100vh-4rem)] p-8 md:p-16 lg:p-24 flex flex-col items-center justify-center text-center z-10 overflow-hidden rounded-[20px] border border-[#252525] hover:border-[var(--brand)]/20 transition-all duration-700">
        
        {/* Liquid glass background layers */}
        <div className="absolute inset-0 bg-[rgba(20,20,20,0.6)] backdrop-blur-[60px] -webkit-backdrop-blur-[60px]" />
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-[0.03] pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 30% 50%, var(--brand) 0%, transparent 50%), radial-gradient(circle at 70% 50%, var(--brand-light) 0%, transparent 50%)',
          }}
        />
        <motion.div
          animate={{
            x: ['-10%', '10%', '-10%'],
            y: ['-10%', '10%', '-10%'],
          }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, var(--brand) 0%, transparent 70%)`,
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
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
            <Button href="/about-me">More About Me</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
