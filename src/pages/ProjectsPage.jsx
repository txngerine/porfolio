import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SplitText from '../components/Shared/SplitText';
import Button from '../components/Buttons/Button';

const projects = [
  {
    title: 'NTunes',
    tagline: 'Music Streaming Reimagined',
    description: 'A feature-rich music streaming application with Nothing OS inspired UI, built for seamless audio experiences across devices.',
    categories: ['Flutter', 'Music Streaming', 'Nothing OS Inspired UI'],
    image: 'https://images.unsplash.com/photo-1614064016629-28c92850937a?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    year: '2024',
  },
  {
    title: 'AttendGo',
    tagline: 'Smart Attendance Management',
    description: 'A comprehensive attendance management system leveraging Firebase for real-time tracking, reporting, and team management.',
    categories: ['Flutter', 'Attendance Management', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    year: '2024',
  },
  {
    title: 'Korlinks',
    tagline: 'Business Networking Platform',
    description: 'A professional networking platform connecting businesses through intelligent matching and seamless API integrations.',
    categories: ['Flutter', 'Business Networking', 'API Integration'],
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    year: '2023',
  },
  {
    title: 'PinWalls',
    tagline: 'Social Discovery Platform',
    description: 'A visually-driven social platform for discovering and sharing curated content, powered by Firebase real-time infrastructure.',
    categories: ['Flutter', 'Social Platform', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    year: '2023',
  },
  {
    title: 'ShopEase',
    tagline: 'E-Commerce Made Simple',
    description: 'A full-featured e-commerce mobile application with cart management, payment gateway integration, and order tracking.',
    categories: ['Flutter', 'E-Commerce', 'Payment Gateway'],
    image: 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    year: '2023',
  },
  {
    title: 'TaskFlow',
    tagline: 'Project Management Reimagined',
    description: 'A collaborative project management tool with real-time updates, Kanban boards, and team analytics.',
    categories: ['Flutter', 'Project Management', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    year: '2022',
  },
];

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const ProjectsPage = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Navbar />
      <main ref={mainRef} className="bg-black text-[var(--primary)]" style={{ gap: 0, paddingBottom: 0 }}>
        {/* Hero */}
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/overlay.webp')] bg-cover bg-center opacity-20 mix-blend-overlay pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen overflow-hidden whitespace-nowrap pointer-events-none z-0">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
              className="flex text-[50vw] tb:text-[25vw] dt:text-[18vw] tracking-[-0.8rem] uppercase leading-[0.9] text-[#131313] font-['PPNeueMontreal-Medium']"
            >
              {Array(4).fill(' Projects ').map((t, i) => (
                <span key={i} className="pr-8">{t}</span>
              ))}
            </motion.div>
          </div>
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[0.7rem] tracking-[0.4rem] uppercase font-bold text-[var(--brand)] mb-6"
            >
              My Work
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
              className="text-[2rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-light uppercase leading-[1] sm:leading-[0.85] tracking-[-0.05rem]"
            >
              Selected<span className="text-[var(--brand)]">.</span>Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[0.75rem] sm:text-[0.85rem] md:text-[1rem] tracking-[0.05rem] uppercase font-light max-w-[28rem] sm:max-w-[34rem] mt-6 leading-[1.2]"
            >
              Mobile and web applications built with modern technologies — from concept to production
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-[1px] h-12 bg-[var(--primary)] opacity-40"
            />
          </motion.div>
        </section>

        {/* Projects List */}
        <section className="w-full px-4 md:px-8 py-16 sm:py-32">
          <div className="max-w-[80rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6 }}
              className="text-[0.7rem] tracking-[0.4rem] uppercase font-bold text-[var(--brand)] mb-8"
            >
              Featured Work
            </motion.div>
            <SplitText
              text="Every project is a new story"
              className="text-[1.4rem] sm:text-[2.2rem] md:text-[2.75rem] font-light uppercase leading-[0.9] max-w-[40rem] mb-8 sm:mb-16"
              delay={0.2}
            />
            <div className="flex flex-col gap-12 sm:gap-24">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
                  className="group relative w-full rounded-xl overflow-hidden"
                >
                  <a href={project.link} className="block relative w-full h-[40vh] sm:h-[60vh] md:h-[70vh] overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full p-4 md:p-10">
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                          <div className="text-[0.65rem] sm:text-[0.6rem] tracking-[0.3rem] uppercase font-bold text-[var(--brand)] mb-2">
                            {project.year}
                          </div>
                          <h2 className="text-[1.5rem] sm:text-[2.5rem] md:text-[3.5rem] font-light uppercase leading-[1] sm:leading-[0.85]">
                            {project.title}
                          </h2>
                          <p className="text-[0.9rem] sm:text-[1rem] tracking-[0.05rem] uppercase font-light text-[#a0a0a0] mt-2">
                            {project.tagline}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.categories.map((cat) => (
                            <span
                              key={cat}
                              className="text-[0.65rem] sm:text-[0.6rem] tracking-[0.1rem] uppercase px-3 sm:px-4 py-2 bg-[rgba(48,48,48,0.173)] backdrop-blur-[10px] rounded-[5px] text-white"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="mt-6 px-2">
                    <p className="text-[0.8rem] sm:text-[0.9rem] tracking-[0.05rem] uppercase font-light text-[#707070] leading-[1.2] max-w-[50rem]">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full px-4 md:px-8 py-20 sm:py-40 border-t border-[#252525]">
          <div className="max-w-[80rem] mx-auto text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={fadeUp} className="text-[0.7rem] tracking-[0.4rem] uppercase font-bold text-[var(--brand)] mb-6">
                Let's Work Together
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-[1.6rem] sm:text-[2.8rem] md:text-[4rem] lg:text-[5rem] font-light uppercase leading-[1.1] sm:leading-[0.85] max-w-[50rem] mx-auto mb-10">
                Have a project in mind? Let's build something great.
              </motion.h2>
              <motion.div variants={fadeUp}>
                <Button href="/contact">Start a Conversation</Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;
