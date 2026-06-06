import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../../components/Buttons/Button';
import SplitText from '../../components/Shared/SplitText';

const projects = [
  {
    title: 'NTunes',
    categories: ['Flutter', 'Music Streaming', 'Nothing OS Inspired UI'],
    image: 'https://images.unsplash.com/photo-1614064016629-28c92850937a?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'AttendGo',
    categories: ['Flutter', 'Attendance Management', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'Korlinks',
    categories: ['Flutter', 'Business Networking Platform', 'API Integration'],
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'PinWalls',
    categories: ['Flutter', 'Social Platform', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="projects" className="py-24 px-4 md:px-8 bg-black text-[var(--primary)] relative">
      <div className="w-full border-b border-[#252525] pb-8 mb-12 lg:mb-32">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[0.7rem] tracking-[0.4rem] uppercase font-bold text-[var(--brand)] mb-8"
        >
          Creations
        </motion.div>
        
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end flex-wrap gap-8">
          <SplitText 
            text="A look into my latest projects" 
            className="text-[2.5rem] md:text-[3.2rem] lg:text-[4.5rem] font-light uppercase leading-[0.9] max-w-[50rem] w-full" 
            delay={0.2} 
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button href="/projects/">All Projects</Button>
          </motion.div>
        </div>
      </div>

      <div className="mt-12 md:mt-20 lg:mt-32 flex flex-col items-center">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="sticky top-[10vh] w-[100%] lg:w-[65vw] h-[80vh] rounded-[15px] overflow-hidden group block mb-24 last:mb-0 shadow-2xl"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110"
            />
            <div className="absolute top-0 w-full flex flex-col sm:flex-row justify-between p-4 md:p-8 gap-6 z-10 pointer-events-none">
              <div className="overflow-hidden">
                <h3 className="text-[1.2rem] md:text-[1.8rem] tracking-[0.08rem] uppercase font-light text-white drop-shadow-lg -translate-y-[150%] transition-transform duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">
                  {project.title}
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 pointer-events-auto">
                {project.categories.map((cat, i) => (
                  <h5 
                    key={i} 
                    className="text-[0.7rem] tracking-[0.1rem] uppercase w-fit px-4 py-3 bg-[rgba(48,48,48,0.173)] backdrop-blur-[10px] rounded-[5px] inline-block overflow-hidden -translate-y-1/2 opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:opacity-100 group-hover:translate-y-0 text-white"
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    {cat}
                  </h5>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
