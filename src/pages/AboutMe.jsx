import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SplitText from '../components/Shared/SplitText';
import Button from '../components/Buttons/Button';

const stats = [
  { label: 'Applications Delivered', value: 20, suffix: '+' },
  { label: 'Years Building with Flutter', value: 4, suffix: '+' },
  { label: 'Years Industry Experience', value: 2, suffix: '+' },
  { label: 'Client & Business Projects', value: 15, suffix: '+' },
  { label: 'Technologies Mastered', value: 10, suffix: '+' },
];

const skills = [
  { name: 'Flutter', level: 5 },
  { name: 'Dart', level: 5 },
  { name: 'React', level: 4 },
  { name: 'Next.js', level: 4 },
  { name: 'JavaScript', level: 4 },
  { name: 'Node.js', level: 4 },
  { name: 'Express.js', level: 4 },
  { name: 'MongoDB', level: 4 },
  { name: 'Firebase', level: 5 },
  { name: 'Django REST Framework', level: 3 },
  { name: 'AWS', level: 3 },
  { name: 'Git', level: 4 },
  { name: 'Figma', level: 3 },
  { name: 'Postman', level: 3 },
  { name: 'Riverpod', level: 4 },
  { name: 'Bloc', level: 4 },
];

const experience = [
  {
    period: 'Jan 2025 — Present',
    role: 'Senior Flutter Developer',
    company: 'CodeCarrots Technologies',
    description: 'Leading the development of scalable cross-platform applications using Flutter. Working closely with designers, backend developers, and stakeholders to deliver high-quality mobile experiences while focusing on performance, architecture, maintainability, and user experience.',
  },
  {
    period: 'Jun 2024 — Dec 2024',
    role: 'Junior Developer',
    company: 'Digicue',
    description: 'Contributed to the development of mobile and web applications, implementing new features, integrating APIs, optimizing user interfaces, and collaborating with development teams to deliver production-ready solutions.',
  },
  {
    period: 'Dec 2023 — May 2024',
    role: 'Flutter Developer Intern',
    company: '',
    description: 'Started my professional journey in the industry by working on real-world Flutter applications. Gained hands-on experience in mobile development, state management, API integration, debugging, and modern development workflows.',
  },
  {
    period: '2020 — 2023',
    role: 'Computer Science Student & Aspiring Developer',
    company: '',
    description: 'While pursuing my studies, I dedicated much of my time to learning software development and building personal projects. During this period, I discovered Flutter, developed a strong passion for mobile application development, explored full-stack technologies, and laid the foundation for my career as a developer. Through continuous learning, experimentation, and project building, I gained practical experience with Flutter, Firebase, JavaScript, React, Node.js, and modern software development practices.',
  },
];

const storyParagraphs = [
  'My journey into programming started during my teenage years, driven by a genuine passion for technology and creativity. I was fascinated by how ideas could be transformed into real products that people use every day. What began as curiosity quickly turned into countless hours of learning, experimenting, and building projects, constantly pushing myself to understand how great software is created.',
  'In 2019, I discovered Flutter, and it completely changed the direction of my development journey. The ability to create beautiful, high-performance applications across multiple platforms from a single codebase instantly captured my attention. Beyond the technology itself, I was drawn to the idea of crafting experiences that felt intuitive, polished, and enjoyable for users. Since then, Flutter has remained at the core of my work, enabling me to build applications that combine performance, functionality, and thoughtful design.',
  'As my experience grew, so did my interest in building complete digital products. This led me to explore backend development and the MERN ecosystem, where I gained a deeper understanding of modern web architecture and scalable application development. Working with MongoDB, Express.js, React, and Node.js allowed me to move beyond frontend experiences and create full-stack solutions, from APIs and databases to complex web platforms and business systems.',
  'Over the years, I\'ve had the opportunity to work on a diverse range of products, including mobile applications, SaaS platforms, attendance management systems, social networks, business tools, and startup solutions. Every project has strengthened my belief that great products are built through a balance of technology, user experience, and attention to detail. Today, as an independent Full Stack Developer based in Kochi, Kerala, I specialize in building modern mobile and web experiences using Flutter, the MERN stack, Firebase, and other modern technologies. I enjoy being involved throughout the entire product lifecycle — from shaping ideas and designing architectures to development, deployment, and continuous improvement. What motivates me most is the ability to create products that make a meaningful impact. Technology is constantly evolving, and I embrace every opportunity to learn, improve, and push my craft further. For me, development is more than a profession — it\'s a passion that continues to inspire me to create things worth loving.',
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

function CountUp({ end, suffix = '+' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = null;
    const duration = 2000;
    const animate = (now) => {
      if (!start) start = now;
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const AboutMe = () => {
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
              {Array(4).fill(' About Me ').map((t, i) => (
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
              About Me
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
              className="text-[2rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-light uppercase leading-[1] sm:leading-[0.85] tracking-[-0.05rem]"
            >
              Akshay T<span className="text-[var(--brand)]">.</span>S
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[0.75rem] sm:text-[0.85rem] md:text-[1rem] tracking-[0.05rem] uppercase font-light max-w-[24rem] sm:max-w-[30rem] mt-6 leading-[1.2]"
            >
              Creating things worth loving.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-[0.65rem] sm:text-[0.7rem] tracking-[0.15rem] uppercase font-light text-[#a0a0a0] mt-2"
            >
              Mobile • Web • Product
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

        {/* Story */}
        <section className="w-full px-4 md:px-8 py-16 sm:py-32 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--brand)]/20 to-transparent" />
          <div className="max-w-[80rem] mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[var(--brand)]/30 to-transparent origin-left"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6 }}
                className="text-[0.7rem] tracking-[0.4rem] uppercase font-bold text-[var(--brand)] flex-shrink-0"
              >
                My Story
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[var(--brand)]/30 to-transparent origin-right"
              />
            </div>
            <div className="flex flex-col gap-20 md:gap-32">
              {/* Row 1: Image left + text right */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="flex flex-col md:flex-row items-center gap-10 md:gap-20"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
                  className="w-full md:w-[40%] flex-shrink-0"
                >
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)]/5 to-transparent z-10 pointer-events-none" />
                    <img
                      src="/images/story.jpg"
                      alt=""
                      className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-[var(--brand)]/30 transition-all duration-700 pointer-events-none" />
                  </div>
                </motion.div>
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-[0.5rem] tracking-[0.3rem] uppercase font-bold text-[var(--brand)]/60">01</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-[var(--brand)]/30 to-transparent" />
                    </div>
                    <p className="text-[clamp(0.85rem,1.3vw,1.1rem)] font-light leading-[1.9] text-[var(--primary)]/85">
                      {storyParagraphs[0]}
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Row 2: Text left + image right */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
                  className="w-full md:w-[40%] flex-shrink-0"
                >
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)]/5 to-transparent z-10 pointer-events-none" />
                    <img
                      src="/images/story-2.jpg"
                      alt=""
                      className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-[var(--brand)]/30 transition-all duration-700 pointer-events-none" />
                  </div>
                </motion.div>
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-[0.5rem] tracking-[0.3rem] uppercase font-bold text-[var(--brand)]/60">02</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-[var(--brand)]/30 to-transparent" />
                    </div>
                    <p className="text-[clamp(0.85rem,1.3vw,1.1rem)] font-light leading-[1.9] text-[var(--primary)]/85">
                      {storyParagraphs[1]}
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Row 3: Remaining paragraphs full width */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="max-w-[48rem] mx-auto"
              >
                <div className="flex items-center gap-3 mb-10">
                  <div className="h-px flex-1 bg-gradient-to-l from-[var(--brand)]/30 to-transparent" />
                  <span className="text-[0.5rem] tracking-[0.3rem] uppercase font-bold text-[var(--brand)]/60">03</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[var(--brand)]/30 to-transparent" />
                </div>
                <div className="space-y-10">
                  {storyParagraphs.slice(2).map((text, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-10%' }}
                      transition={{ duration: 0.6, delay: i * 0.15, ease: [0.19, 1, 0.22, 1] }}
                    >
                      <p className="text-[clamp(0.85rem,1.3vw,1.1rem)] font-light leading-[1.9] text-[var(--primary)]/80">
                        {text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Stats */}
        <section className="w-full px-4 md:px-8 py-16 sm:py-32 border-t border-[#252525]">
          <div className="max-w-[80rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6 }}
              className="text-[0.7rem] tracking-[0.4rem] uppercase font-bold text-[var(--brand)] mb-8 sm:mb-16 text-center"
            >
              By the Numbers
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] font-light uppercase leading-[0.85] text-[var(--brand)]">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[0.65rem] sm:text-[0.7rem] tracking-[0.2rem] uppercase font-light mt-4 text-[#a0a0a0]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="w-full px-4 md:px-8 py-16 sm:py-32 border-t border-[#252525]">
          <div className="max-w-[80rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6 }}
              className="text-[0.7rem] tracking-[0.4rem] uppercase font-bold text-[var(--brand)] mb-8"
            >
              Skills & Technologies
            </motion.div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-8 sm:mb-16">
              <SplitText
                text="Tools I use to bring ideas to life"
                className="text-[1.4rem] sm:text-[2.2rem] md:text-[2.75rem] font-light uppercase leading-[0.9] max-w-[40rem]"
                delay={0.2}
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="glass-panel p-4 sm:p-6 text-center group hover:border-[var(--brand)] transition-all duration-500"
                  style={{ borderRadius: '10px', background: 'rgba(45,45,45,0.349)', backdropFilter: 'blur(20px)' }}
                >
                  <div className="text-[0.75rem] sm:text-[0.9rem] md:text-[1rem] tracking-[0.08rem] uppercase font-light group-hover:text-[var(--brand)] transition-colors duration-500 break-words">
                    {skill.name}
                  </div>
                  <div className="flex items-center justify-center gap-1 mt-3">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <div
                        key={dot}
                        className={`w-[6px] h-[6px] rounded-full transition-all duration-500 ${
                          dot <= skill.level
                            ? 'bg-[var(--brand)]'
                            : 'bg-[#353535]'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="w-full px-4 md:px-8 py-16 sm:py-32 border-t border-[#252525]">
          <div className="max-w-[80rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6 }}
              className="text-[0.7rem] tracking-[0.4rem] uppercase font-bold text-[var(--brand)] mb-8"
            >
              Experience
            </motion.div>
            <SplitText
              text="My Professional Journey"
              className="text-[1.4rem] sm:text-[2.2rem] md:text-[2.75rem] font-light uppercase leading-[0.9] max-w-[40rem] mb-8 sm:mb-16"
              delay={0.2}
            />
            <div className="relative">
              <div className="absolute left-[7px] sm:left-[9px] top-0 bottom-0 w-[1px] bg-[#252525]" />
              <div className="flex flex-col gap-6 sm:gap-8">
                {experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="relative pl-10 sm:pl-12 group"
                  >
                    <div className="absolute left-0 top-1 w-[15px] sm:w-[19px] h-[15px] sm:h-[19px] rounded-full bg-[var(--brand)] border-[3px] border-black z-10 transition-transform duration-500 group-hover:scale-125" />
                    <div
                      className="glass-panel p-6 sm:p-8 transition-all duration-500 group-hover:border-[var(--brand)]/30"
                      style={{ borderRadius: '12px', background: 'rgba(35,35,35,0.5)', backdropFilter: 'blur(20px)' }}
                    >
                      <div className="text-[0.65rem] sm:text-[0.6rem] md:text-[0.7rem] tracking-[0.3rem] uppercase font-bold text-[var(--brand)] mb-3">
                        {exp.period}
                      </div>
                      <h3 className="text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] font-light uppercase leading-[0.9] mb-2">
                        {exp.role}
                      </h3>
                      {exp.company && (
                        <div className="text-[0.7rem] sm:text-[0.8rem] tracking-[0.1rem] uppercase font-light text-[#a0a0a0] mb-4">
                          {exp.company}
                        </div>
                      )}
                      <p className="text-[0.75rem] sm:text-[0.8rem] tracking-[0.05rem] uppercase font-light max-w-[45rem] leading-[1.2] text-[#707070] group-hover:text-[#a0a0a0] transition-colors duration-500">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
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

export default AboutMe;
