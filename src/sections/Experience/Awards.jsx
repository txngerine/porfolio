import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import SplitText from '../../components/Shared/SplitText';

const Awards = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { margin: "200px" });
  const shouldReduceMotion = useReducedMotion();

  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-black text-[var(--primary)] tb:h-[500px] min-h-screen flex flex-col justify-end">
      
      {/* Background Masked Images Grid */}
      <div 
        className="absolute inset-0 z-0 flex items-start justify-center gap-[1rem] max-sm:gap-[0.5rem] p-2 md:p-4 pointer-events-none opacity-30 overflow-hidden"
        style={{ WebkitMaskImage: 'linear-gradient(0deg, transparent, #000 80%)' }}
      >
        {[1, 2, 3, 4, 5].map((col, index) => (
          <motion.div 
            key={col} 
            className="flex flex-col gap-[1rem] max-sm:gap-[0.5rem] w-[20vw] md:w-[15vw]"
            animate={(!shouldReduceMotion && isSectionInView) ? {
              y: index % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"]
            } : { y: index % 2 === 0 ? "0%" : "-50%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20 + index * 2
            }}
          >
            {[1, 2, 3, 4].map((img) => (
              <img 
                key={img}
                src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&auto=format&fit=crop" 
                alt="Award" 
                className="w-full aspect-square object-cover rounded-[10px]"
              />
            ))}
          </motion.div>
        ))}
      </div>

      {/* Text overlay at bottom */}
      <div className="absolute bottom-0 left-0 z-10 w-full p-[2rem] max-sm:p-[1rem]">
        <div ref={textRef} className="w-full flex flex-col max-sm:flex-col sm:flex-row justify-between items-start sm:items-end gap-8 sm:gap-0">
          <SplitText 
            text="I have already a variety of awards won" 
            className="text-[2.5rem] md:text-[3.2rem] lg:text-[4.5rem] font-light uppercase leading-[0.9] max-w-[60rem] w-full" 
            delay={0} 
          />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isTextInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-start sm:items-end gap-[2rem] max-sm:gap-[1rem]"
          >
            <img src="/images/awwardsLogo.svg" alt="awwards" className="w-[35vw] sm:w-[20vw] first:w-[35vw] sm:first:w-[15vw] h-auto" />
            <img src="/images/cssdLogo.svg" alt="cssd" className="w-[40vw] sm:w-[20vw] h-auto" />
          </motion.div>
        </div>

        <div className="w-full h-[1px] bg-[#131313] mt-[8rem] tb:mt-[5rem] max-sm:mt-[3rem]" />
      </div>
    </section>
  );
};

export default Awards;