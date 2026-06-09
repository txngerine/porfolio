import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';

const marqueeText = "Akshay T.S -";
const heroTagline = "Creating things worth loving.";
const heroSubline = "Mobile • Web • Product";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30, mass: 1 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30, mass: 1 });

  const rotateX = useTransform(springY, [-40, 40], [10, -10]);
  const rotateY = useTransform(springX, [-40, 40], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      mouseX.set(x * 40);
      mouseY.set(y * 40);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-end p-4 md:p-8 overflow-hidden bg-black isolation-auto z-10">
      
      {/* Image Trail */}
      <ImageTrail mouseX={springX} mouseY={springY} rotateX={rotateX} rotateY={rotateY} />

      {/* Running Marquee Text in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen overflow-hidden flex whitespace-nowrap z-0 pointer-events-none">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex text-[50vw] tb:text-[25vw] dt:text-[15vw] tracking-[-0.8rem] uppercase leading-[0.9] text-[#131313] font-['PPNeueMontreal-Medium']"
        >
          {Array(4).fill(` ${marqueeText} `).map((text, i) => (
            <span key={i} className="pr-8">{text}</span>
          ))}
        </motion.div>
      </div>

      <motion.div className="relative z-20 flex flex-col items-center gap-3 mb-12">
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

const images = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1614064016629-28c92850937a?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&w=600&auto=format&fit=crop",
];

const ImageTrail = ({ mouseX, mouseY, rotateX, rotateY }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div ref={ref} className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
      <motion.div
        style={{ x: mouseX, y: mouseY, rotateX, rotateY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[25vw] h-[50vh] md:h-[65vh] perspective-1000 preserve-3d"
      >
        <motion.div style={{ y: parallaxY }} className="w-full h-full">
          <motion.div
            className="w-full h-full rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          >
            <motion.img
              src={images[0]}
              alt=""
              className="w-full h-full object-cover"
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;