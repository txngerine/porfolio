import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SplitText from '../components/Shared/SplitText';
import Button from '../components/Buttons/Button';

const stats = [
  { number: '30+', label: 'Applications Built' },
  { number: '4+', label: 'Years Experience' },
  { number: '15+', label: 'Happy Clients' },
  { number: '10+', label: 'Technologies' },
];

const skills = [
  { name: 'Flutter', level: 'Expert' },
  { name: 'React', level: 'Advanced' },
  { name: 'Node.js', level: 'Advanced' },
  { name: 'Firebase', level: 'Expert' },
  { name: 'MongoDB', level: 'Advanced' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'React Native', level: 'Intermediate' },
  { name: 'Python', level: 'Intermediate' },
  { name: 'AWS', level: 'Intermediate' },
  { name: 'GraphQL', level: 'Intermediate' },
];

const experience = [
  {
    period: '2024 — Present',
    role: 'Senior Full Stack Developer',
    company: 'Freelance / Self-Employed',
    description: 'Building and deploying production-grade mobile and web applications for startups and businesses. End-to-end delivery from concept to app store publishing.',
  },
  {
    period: '2022 — 2024',
    role: 'Full Stack Developer',
    company: 'Tech Startup, Kochi',
    description: 'Led development of cross-platform mobile applications using Flutter and Node.js. Managed CI/CD pipelines and mentored junior developers.',
  },
  {
    period: '2021 — 2022',
    role: 'Junior Developer',
    company: 'Digital Agency, Kochi',
    description: 'Developed responsive web applications and contributed to REST API design. Collaborated on client projects across various industries.',
  },
  {
    period: '2020 — 2021',
    role: 'Freelance Developer',
    company: 'Self-Employed',
    description: 'Started freelance journey building websites and small-scale applications. Gained foundational experience in full-stack development.',
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
        <section className="w-full px-4 md:px-8 py-16 sm:py-32">
          <div className="max-w-[80rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6 }}
              className="text-[0.7rem] tracking-[0.4rem] uppercase font-bold text-[var(--brand)] mb-8"
            >
              My Story
            </motion.div>
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="w-full md:w-[35%] flex-shrink-0"
              >
                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/images/overlay.webp')] bg-cover bg-center opacity-30 mix-blend-overlay pointer-events-none z-10" />
                  <img
                    src="/images/hero.png"
                    alt="Akshay T.S"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-xl ring-1 ring-[var(--brand)]/20" />
                </div>
              </motion.div>
              <div className="flex-1">
                <SplitText
                  text="My journey into programming started during my teenage years, driven by a genuine passion for technology and creativity. I was fascinated by how ideas could be transformed into real products that people use every day. What began as curiosity quickly turned into countless hours of learning, experimenting, and building projects, constantly pushing myself to understand how great software is created. In 2019, I discovered Flutter, and it completely changed the direction of my development journey. The ability to create beautiful, high-performance applications across multiple platforms from a single codebase instantly captured my attention. Beyond the technology itself, I was drawn to the idea of crafting experiences that felt intuitive, polished, and enjoyable for users. Since then, Flutter has remained at the core of my work, enabling me to build applications that combine performance, functionality, and thoughtful design. As my experience grew, so did my interest in building complete digital products. This led me to explore backend development and the MERN ecosystem, where I gained a deeper understanding of modern web architecture and scalable application development. Working with MongoDB, Express.js, React, and Node.js allowed me to move beyond frontend experiences and create full-stack solutions, from APIs and databases to complex web platforms and business systems. Over the years, I've had the opportunity to work on a diverse range of products, including mobile applications, SaaS platforms, attendance management systems, social networks, business tools, and startup solutions. Every project has strengthened my belief that great products are built through a balance of technology, user experience, and attention to detail. Today, as an independent Full Stack Developer based in Kochi, Kerala, I specialize in building modern mobile and web experiences using Flutter, the MERN stack, Firebase, and other modern technologies. I enjoy being involved throughout the entire product lifecycle—from shaping ideas and designing architectures to development, deployment, and continuous improvement. What motivates me most is the ability to create products that make a meaningful impact. Technology is constantly evolving, and I embrace every opportunity to learn, improve, and push my craft further. For me, development is more than a profession—it's a passion that continues to inspire me to create things worth loving."
                  className="text-[1rem] sm:text-[1.6rem] md:text-[2rem] lg:text-[2.5rem] font-light leading-[1.1] uppercase"
                  delay={0.2}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-6 sm:mt-12"
                >
                  <p className="text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] tracking-[0.05rem] uppercase font-light max-w-[50rem] leading-[1.2] text-[#a0a0a0]">
                    My approach combines technical excellence with a deep understanding of user experience. I believe great software is built at the intersection of clean architecture and thoughtful design — every project I take on gets my full attention from concept to deployment.
                  </p>
                </motion.div>
              </div>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
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
                    {stat.number}
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
                  <div className="text-[0.65rem] sm:text-[0.55rem] tracking-[0.15rem] uppercase font-bold text-[#707070] mt-2">
                    {skill.level}
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
              text="My professional journey"
              className="text-[1.4rem] sm:text-[2.2rem] md:text-[2.75rem] font-light uppercase leading-[0.9] max-w-[40rem] mb-8 sm:mb-16"
              delay={0.2}
            />
            <div className="relative">
              <div className="absolute left-[7px] sm:left-[9px] top-0 bottom-0 w-[1px] bg-[#252525]" />
              <div className="flex flex-col gap-10 sm:gap-16">
                {experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="relative pl-10 sm:pl-12"
                  >
                    <div className="absolute left-0 top-1 w-[15px] sm:w-[19px] h-[15px] sm:h-[19px] rounded-full bg-[var(--brand)] border-[3px] border-black" />
                    <div className="text-[0.65rem] sm:text-[0.6rem] md:text-[0.7rem] tracking-[0.3rem] uppercase font-bold text-[var(--brand)] mb-3">
                      {exp.period}
                    </div>
                    <h3 className="text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] font-light uppercase leading-[0.9] mb-2">
                      {exp.role}
                    </h3>
                    <div className="text-[0.7rem] sm:text-[0.8rem] tracking-[0.1rem] uppercase font-light text-[#a0a0a0] mb-4">
                      {exp.company}
                    </div>
                    <p className="text-[0.75rem] sm:text-[0.8rem] tracking-[0.05rem] uppercase font-light max-w-[45rem] leading-[1.2] text-[#707070]">
                      {exp.description}
                    </p>
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
