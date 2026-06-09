import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SplitText from '../components/Shared/SplitText';
import Button from '../components/Buttons/Button';

const contactMethods = [
  { label: 'Email', value: 'akshaits4@gmail.com', href: 'mailto:akshaits4@gmail.com' },
  { label: 'Bluesky', value: '@akshaits.bsky.social', href: 'https://bsky.app/profile/akshaits.bsky.social' },
  { label: 'Instagram', value: '@akshaiiii.i', href: 'https://www.instagram.com/akshaiiii.i/' },
  { label: 'LinkedIn', value: 'Akshai T S', href: 'https://www.linkedin.com/in/akshai-t-s' },
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

const ContactPage = () => {
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
              {Array(4).fill(' Get in Touch ').map((t, i) => (
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
              Contact
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
              className="text-[2rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-light uppercase leading-[1] sm:leading-[0.85] tracking-[-0.05rem]"
            >
              Let's talk<span className="text-[var(--brand)]">.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[0.75rem] sm:text-[0.85rem] md:text-[1rem] tracking-[0.05rem] uppercase font-light max-w-[28rem] sm:max-w-[34rem] mt-6 leading-[1.2]"
            >
              Have a project, idea, or just want to say hi? I'd love to hear from you.
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

        {/* Contact Info */}
        <section className="w-full px-4 md:px-8 py-16 sm:py-32">
          <div className="max-w-[80rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6 }}
              className="text-[0.7rem] tracking-[0.4rem] uppercase font-bold text-[var(--brand)] mb-8"
            >
              Reach Out
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              <SplitText
                text="I'm always open to new opportunities, collaborations, and conversations. Whether you have a project in mind or just want to connect, feel free to reach out."
                className="text-[1.4rem] sm:text-[1.6rem] md:text-[2rem] lg:text-[2.5rem] font-light leading-[1.1] uppercase max-w-[40rem]"
                delay={0.2}
              />
              <div className="flex flex-col gap-6 sm:gap-8">
                {contactMethods.map((method, i) => (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="border-b border-[#252525] pb-4"
                  >
                    <div className="text-[0.65rem] sm:text-[0.6rem] tracking-[0.3rem] uppercase font-bold text-[var(--brand)] mb-2">
                      {method.label}
                    </div>
                    <a
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : '_self'}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="text-[1rem] sm:text-[1.5rem] md:text-[1.8rem] font-light uppercase leading-[1.1] sm:leading-[0.9] hover:text-[var(--brand)] transition-colors duration-500 break-words"
                    >
                      {method.value}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Email CTA */}
        <section className="w-full px-4 md:px-8 py-20 sm:py-40 border-t border-[#252525]">
          <div className="max-w-[80rem] mx-auto text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={fadeUp} className="text-[0.7rem] tracking-[0.4rem] uppercase font-bold text-[var(--brand)] mb-6">
                Send a Message
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-[1.6rem] sm:text-[2.8rem] md:text-[4rem] lg:text-[5rem] font-light uppercase leading-[1.1] sm:leading-[0.85] max-w-[50rem] mx-auto mb-10">
                I'll get back to you within 24 hours.
              </motion.h2>
              <motion.div variants={fadeUp}>
                <Button href="mailto:akshaits4@gmail.com">Send an Email</Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
