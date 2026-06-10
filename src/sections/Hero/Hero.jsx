import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ImageTrail from './ImageTrail';

const marqueeText = "Akshay Ts -";
const heroTagline = "Creating things worth loving.";
const heroSubline = "Mobile • Web • Product";

const Hero = () => {
  const marqueeRef = useRef(null);
  const marqueeContentRef = useRef(null);

  useEffect(() => {
    // Duplicate the marquee text to allow seamless loop
    const content = marqueeContentRef.current;
    if (content) {
      content.innerHTML += content.innerHTML;
    }
  }, []);

  return (
    <section className="HeroSection_hero__RIkBF relative">
      {/* Background lagging image trail */}
      <ImageTrail />

      {/* Background Marquee Text */}
      <div className="HeroSection_marquee__Nyhd4" ref={marqueeRef}>
        <motion.div 
          className="HeroSection_content__yt03e" 
          ref={marqueeContentRef}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 450, // slow marquee duration matching original
            ease: "linear"
          }}
        >
          &nbsp;{Array(15).fill(marqueeText).join(" ")}&nbsp;
        </motion.div>
      </div>

      {/* Bottom tagline text */}
      <motion.div className="HeroSection_tagline__ABpe1 relative z-10 flex flex-col items-center gap-3">
        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-[0.8rem] dt:text-[1rem] tracking-[0.05rem] uppercase font-light text-center leading-[1.1] text-[var(--primary)] drop-shadow-md"
        >
          {heroTagline}
        </motion.h5>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-[0.65rem] dt:text-[0.8rem] tracking-[0.15rem] uppercase font-light text-center text-[#a0a0a0]"
        >
          {heroSubline}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;