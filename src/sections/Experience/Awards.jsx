import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SplitText from '../../components/Shared/SplitText';

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="relative overflow-hidden bg-black text-[var(--primary)] pt-12 md:pt-24 min-h-screen flex flex-col justify-end">
      
      {/* Background Masked Images Grid */}
      <div 
        className="absolute inset-0 z-0 flex items-start justify-center gap-2 md:gap-4 p-2 md:p-4 pointer-events-none opacity-30 overflow-hidden"
        style={{ WebkitMaskImage: 'linear-gradient(0deg, transparent, #000 80%)' }}
      >
        {[1, 2, 3, 4, 5].map((col, index) => (
          <motion.div 
            key={col} 
            className="flex flex-col gap-2 md:gap-4 w-[20vw] md:w-[15vw]"
            animate={{
              y: index % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"]
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20 + index * 2 // slightly different speeds
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

      <div className="w-full relative z-10 px-4 md:px-8 pb-8 md:pb-16 mt-[20vh] md:mt-[40vh]">
        <div className="w-full h-[1px] bg-[#131313] mb-8 md:mb-16" />
        
        <div ref={ref} className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <SplitText 
            text="I have already a variety of awards won" 
            className="text-[2.5rem] md:text-[3.2rem] lg:text-[4.5rem] font-light uppercase leading-[0.9] max-w-[60rem] w-full" 
            delay={0} 
          />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-start md:items-end gap-4 md:gap-8"
          >
            <div className="text-xl md:text-2xl lg:text-3xl font-light tracking-[0.2rem] uppercase opacity-50">AWWWARDS</div>
            <div className="text-xl md:text-2xl lg:text-3xl font-light tracking-[0.2rem] uppercase opacity-50">CSSDA</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
