import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { staggerContainer, staggerChild } from '../utils/motion';
import SplitReveal from '../utils/SplitReveal';

const cards = [
  { img: '/images/dribble1.jpeg', x: -600, y: -260, rotate: -15 },
  { img: '/images/dribble2.jpeg', x: 600, y: -260, rotate: 15 },
  { img: '/images/dribble3.jpeg', x: -600, y: 260, rotate: -15 },
  { img: '/images/dribble4.jpeg', x: 600, y: 260, rotate: 15 },
];

const SplitCard = ({ img, scrollYProgress, offsetX, offsetY, rotate }) => {
  const shouldReduceMotion = useReducedMotion();

  const x = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : offsetX]);
  const y = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : offsetY]);
  const rot = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : rotate]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.6, shouldReduceMotion ? 1 : 0.25]);

  return (
    <motion.img
      src={img}
      alt=""
      style={{ x, y, rotate: rot, opacity }}
      className="absolute w-[40vw] md:w-[22vw] h-[180px] md:h-[260px] object-cover rounded-[12px]"
    />
  );
};

const Dribbble = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-black overflow-hidden border-b border-[#252525]"
    >
      {/* 4 cards split from center on scroll */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {cards.map((card, i) => (
          <SplitCard
            key={i}
            img={card.img}
            scrollYProgress={scrollYProgress}
            offsetX={card.x}
            offsetY={card.y}
            rotate={card.rotate}
          />
        ))}
      </div>

      <motion.div
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 flex flex-col items-center justify-center text-center h-full pointer-events-none"
      >
        <motion.div variants={staggerChild} className="pointer-events-auto">
          <div className="text-[0.7rem] tracking-[0.4rem] uppercase font-bold text-[var(--brand)]">Follow on</div>
        </motion.div>

        <motion.div variants={staggerChild} className="mt-4">
          <img
            alt="dribbble"
            src="/images/dribble.webp"
            className="w-[150px] h-auto mx-auto"
          />
        </motion.div>

        <SplitReveal
          text="Energizing the digital landscape, our creativity shines in bespoke websites."
          className="text-xl md:text-2xl font-light uppercase text-white max-w-sm leading-[1.1] mt-4"
          as="h5"
        />

        <motion.div variants={staggerChild} className="mt-8 pointer-events-auto">
          <motion.a
            href="https://dribbble.com/zaidkhan3419"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-orange whitespace-nowrap inline-block"
          >
            View Dribbble
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Dribbble;
