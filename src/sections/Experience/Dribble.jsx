import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../../components/Buttons/Button';

const Dribble = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section ref={container} className="relative px-4 md:px-8 h-screen w-full flex items-center justify-center overflow-hidden bg-black text-[var(--primary)] pointer-events-none">
      
      {/* Background Images */}
      <div className="absolute inset-0 z-0 w-full h-full opacity-40">
        <div className="flex flex-col gap-4 py-8">
          <div className="flex justify-center gap-4 w-full">
            <motion.img style={{ y: y1 }} src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop" className="w-[calc(50vw-1.5rem)] md:w-[calc(50vw-2.5rem)] h-[250px] md:h-[50vh] object-cover rounded-[10px]" />
            <motion.img style={{ y: y2 }} src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600&auto=format&fit=crop" className="w-[calc(50vw-1.5rem)] md:w-[calc(50vw-2.5rem)] h-[250px] md:h-[50vh] object-cover rounded-[10px]" />
          </div>
          <div className="flex justify-center gap-4 w-full">
            <motion.img style={{ y: y2 }} src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=600&auto=format&fit=crop" className="w-[calc(50vw-1.5rem)] md:w-[calc(50vw-2.5rem)] h-[250px] md:h-[50vh] object-cover rounded-[10px]" />
            <motion.img style={{ y: y1 }} src="https://images.unsplash.com/photo-1614064016629-28c92850937a?q=80&w=600&auto=format&fit=crop" className="w-[calc(50vw-1.5rem)] md:w-[calc(50vw-2.5rem)] h-[250px] md:h-[50vh] object-cover rounded-[10px]" />
          </div>
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[21rem] pointer-events-auto">
        <div className="text-[0.7rem] tracking-[0.4rem] uppercase font-bold text-[var(--brand)] mb-4">
          Follow on
        </div>
        
        <h2 className="text-4xl font-bold uppercase tracking-widest text-[var(--brand)] drop-shadow-lg mb-4">
          DRIBBBLE
        </h2>

        <h5 className="text-[0.8rem] md:text-[1rem] leading-[1] tracking-[0.05rem] uppercase font-light text-[var(--primary)]">
          Check out my design work and creative projects on Dribbble.
        </h5>

        <div className="mt-8">
          <Button href="https://dribbble.com/">View Dribbble</Button>
        </div>
      </div>
    </section>
  );
};

export default Dribble;
