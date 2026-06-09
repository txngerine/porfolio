import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './Buttons/Button';

const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Dribbble = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const row1X = useTransform(scrollYProgress, [0, 1], [-800, 800]);
  const row1Y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const row1Rotate = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const row2X = useTransform(scrollYProgress, [0, 1], [600, -600]);
  const row2Y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const row2Rotate = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const row3X = useTransform(scrollYProgress, [0, 1], [-400, 400]);
  const row3Y = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const row3Rotate = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  return (
    <section ref={container} className="relative h-screen w-full overflow-hidden bg-black text-[var(--primary)]">
      <div className="absolute inset-0 z-0 flex flex-col justify-center gap-6 md:gap-8 px-4 md:px-8 opacity-30">
        <motion.div
          className="flex justify-center gap-4 md:gap-8"
          style={{ x: row1X, y: row1Y, rotate: row1Rotate }}
        >
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
            className="w-[40vw] md:w-[30vw] h-[180px] md:h-[220px] object-cover rounded-[10px]"
          />
          <img
            src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600&auto=format&fit=crop"
            className="w-[40vw] md:w-[30vw] h-[180px] md:h-[220px] object-cover rounded-[10px]"
          />
        </motion.div>

        <motion.div
          className="flex justify-center gap-4 md:gap-8"
          style={{ x: row2X, y: row2Y, rotate: row2Rotate }}
        >
          <img
            src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=600&auto=format&fit=crop"
            className="w-[40vw] md:w-[30vw] h-[180px] md:h-[220px] object-cover rounded-[10px]"
          />
          <img
            src="https://images.unsplash.com/photo-1614064016629-28c92850937a?q=80&w=600&auto=format&fit=crop"
            className="w-[40vw] md:w-[30vw] h-[180px] md:h-[220px] object-cover rounded-[10px]"
          />
        </motion.div>

        <motion.div
          className="flex justify-center gap-4 md:gap-8"
          style={{ x: row3X, y: row3Y, rotate: row3Rotate }}
        >
          <img
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&auto=format&fit=crop"
            className="w-[40vw] md:w-[30vw] h-[180px] md:h-[220px] object-cover rounded-[10px]"
          />
          <img
            src="https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&w=600&auto=format&fit=crop"
            className="w-[40vw] md:w-[30vw] h-[180px] md:h-[220px] object-cover rounded-[10px]"
          />
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 flex flex-col items-center justify-center text-center h-full pointer-events-none"
      >
        <motion.span variants={fadeInUp} className="text-[0.7rem] tracking-[0.4rem] uppercase font-bold text-[var(--brand)] mb-4 pointer-events-auto">
          Follow on
        </motion.span>
        <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-[var(--brand)] drop-shadow-lg mb-4 pointer-events-auto">
          DRIBBBLE
        </motion.h2>
        <motion.h5 variants={fadeInUp} className="text-[0.8rem] md:text-[1rem] leading-[1] tracking-[0.05rem] uppercase font-light text-[var(--primary)] max-w-[25rem] pointer-events-auto">
          Check out my design work and creative projects on Dribbble.
        </motion.h5>
        <motion.div variants={fadeInUp} className="mt-8 pointer-events-auto">
          <Button href="https://dribbble.com/">View Dribbble</Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Dribbble;
