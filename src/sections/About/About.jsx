import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../../components/Buttons/Button';
import SplitText from '../../components/Shared/SplitText';

const aboutText = "I am a Full Stack Developer based in Kochi, Kerala, with experience building and publishing mobile applications and web platforms for startups, businesses, and personal products. Having completed over 30 applications across Android, iOS, and web, I specialize in creating scalable, high-performance solutions using Flutter, the MERN stack, Firebase, Node.js, and modern development practices. My passion lies in transforming ideas into intuitive digital products that solve real-world problems.";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section id="about" className="p-4 md:p-8 min-h-screen relative w-full overflow-hidden flex items-center justify-center">
      
      {/* Background Image/Pattern */}
      <div className="absolute inset-0 bg-[url('/images/overlay.webp')] bg-cover bg-center opacity-30 mix-blend-overlay pointer-events-none" />

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
