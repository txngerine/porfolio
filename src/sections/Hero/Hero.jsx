import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import useContentStore from '../../store/useContentStore';

const Hero = () => {
  const { marqueeText, heroTagline, heroHighlight, heroSubtext, heroImage } = useContentStore();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring for the "flow and move" effect
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30, mass: 1 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30, mass: 1 });

  // 3D Tilt calculation
  const rotateX = useTransform(springY, [-40, 40], [10, -10]);
  const rotateY = useTransform(springX, [-40, 40], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Calculate offset from center of screen as a percentage (-1 to 1)
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      
      // Constrain to a minimum distance (e.g., +/- 40px)
      mouseX.set(x * 40);
      mouseY.set(y * 40);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-end p-4 md:p-8 overflow-hidden bg-black isolation-auto z-10 perspective-1000">
      
      {/* Running Marquee Text in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen overflow-hidden flex whitespace-nowrap z-0 pointer-events-none">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex text-[50vw] md:text-[25vw] lg:text-[15vw] tracking-[-0.8rem] uppercase leading-[0.9] text-[#1a1a1a]"
        >
          {Array(4).fill(` ${marqueeText} `).map((text, i) => (
            <span key={i} className="pr-8">{text}</span>
          ))}
        </motion.div>
      </div>

      {/* Single Smooth Parallax Image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none z-10 preserve-3d">
        <motion.div 
          style={{ x: springX, y: springY, rotateX, rotateY }}
          className="relative preserve-3d"
        >
          <motion.div 
            className="w-[80vw] md:w-[25vw] h-[50vh] md:h-[65vh] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          >
            <motion.img 
              src={heroImage} 
              alt="Hero background" 
              className="w-full h-full object-cover"
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.h5 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="relative z-20 text-[0.8rem] md:text-[1rem] tracking-[0.05rem] uppercase font-light max-w-[21rem] text-center leading-[1.1] mb-12 text-[var(--primary)] drop-shadow-md"
      >
        {heroTagline}
      </motion.h5>

      {/* Hero Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 1 }}
        className="relative z-20 text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] font-semibold tracking-[0.02rem] uppercase text-[var(--brand)] mb-2 drop-shadow-lg"
      >
        {heroHighlight}
      </motion.div>

      {/* Hero Subtext */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-20 text-[0.6rem] md:text-[0.8rem] tracking-[0.1rem] uppercase font-light max-w-[30rem] text-center leading-[1.2] mb-8 text-[var(--primary)] opacity-80 drop-shadow-md"
      >
        {heroSubtext}
      </motion.div>
    </section>
  );
};

export default Hero;
