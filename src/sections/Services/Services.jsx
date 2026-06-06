import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Button from '../../components/Buttons/Button';
import SplitText from '../../components/Shared/SplitText';

const services = [
  {
    title: 'Strategy',
    number: '01',
    items: ['Product Discovery', 'Technical Consultation', 'Requirements Analysis', 'Architecture Planning', 'Optimization']
  },
  {
    title: 'Design & Experience',
    number: '02',
    items: ['UI/UX Implementation', 'Design Systems', 'Responsive Interfaces', 'User Flows', 'Micro-interactions']
  },
  {
    title: 'Development',
    number: '03',
    items: ['Flutter', 'MERN Stack', 'REST APIs', 'Firebase', 'Backend Development', 'Testing']
  },
  {
    title: 'Deployment & Growth',
    number: '04',
    items: ['Cloud Infrastructure', 'App Store Publishing', 'CI/CD', 'Monitoring', 'Maintenance', 'Scaling']
  }
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="services" className="py-24 px-4 md:px-8 bg-[var(--background)] text-[var(--primary)] relative">
      <div className="w-full border-b border-[#252525] pb-8 mb-12 lg:mb-20">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[0.7rem] tracking-[0.4rem] uppercase font-bold text-[var(--brand)] mb-8"
        >
          Capabilities
        </motion.div>
        
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end flex-wrap gap-8">
          <SplitText 
            text="Tailored Solutions for Your Unique Vision" 
            className="text-[2.5rem] md:text-[3.2rem] lg:text-[4.5rem] font-light uppercase leading-[0.9] max-w-[60rem] w-full" 
            delay={0.2} 
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button href="#contact">Get in touch</Button>
          </motion.div>
        </div>
      </div>

      <div ref={ref} className="relative h-[200vh] w-full hidden md:block perspective-1000 mt-20">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center">
          {services.map((service, index) => {
            // Calculate final fan out positions
            const xFinal = (index - 1.5) * 25; // -37.5vw, -12.5vw, 12.5vw, 37.5vw
            const rotateFinal = (index - 1.5) * 10; // -15deg, -5deg, 5deg, 15deg

            // useScroll for scroll linked fan out
            const { scrollYProgress } = useScroll({
              target: ref,
              offset: ["start center", "end end"]
            });

            const x = useTransform(scrollYProgress, [0, 1], ["0vw", `${xFinal}vw`]);
            const rotate = useTransform(scrollYProgress, [0, 1], [0, rotateFinal]);

            return (
              <motion.div
                key={index}
                style={{ x, rotate, xOrigin: "50%", y: "-50%" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[22vw] h-[65vh] group cursor-pointer"
              >
                {/* Floating wrapper */}
                <motion.div
                  animate={{ y: ["-5%", "5%", "-5%"] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: index * 0.2 }}
                  className="w-full h-full relative perspective-1000"
                >
                  {/* Flipping wrapper (CSS driven) */}
                  <div className="w-full h-full relative preserve-3d transition-transform duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden bg-[#131313] rounded-[15px] overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop" 
                        className="w-full h-full object-cover opacity-50" 
                        alt="card bg" 
                      />
                    </div>
                    
                    {/* Back */}
                    <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-[#131313] rounded-[15px] p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="text-[1.2rem] lg:text-[1.8rem] tracking-[0.08rem] uppercase font-light">{service.title}</h3>
                        <ul className="my-4">
                          {service.items.map((item, i) => (
                            <li key={i} className="text-[0.7rem] lg:text-[0.9rem] leading-[1] tracking-[0.05rem] uppercase font-light py-3 border-b border-dashed border-[#373737]">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <h2 className="text-[1.8rem] lg:text-[2.75rem] leading-[0.9] font-light uppercase text-[var(--brand)] text-right">
                        {service.number}
                      </h2>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile view - simple grid */}
      <div className="grid grid-cols-1 md:hidden gap-6 mt-12">
        {services.map((service, index) => (
          <div key={index} className="bg-[#131313] p-8 rounded-[15px] flex flex-col">
            <h3 className="text-[1.5rem] tracking-[0.08rem] uppercase font-light">{service.title}</h3>
            <ul className="my-4">
              {service.items.map((item, i) => (
                <li key={i} className="text-[0.9rem] leading-[1] tracking-[0.05rem] uppercase font-light py-3 border-b border-dashed border-[#373737]">
                  {item}
                </li>
              ))}
            </ul>
            <h2 className="text-[2rem] font-light uppercase text-[var(--brand)] text-right mt-auto">
              {service.number}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
