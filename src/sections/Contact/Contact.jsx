import { motion } from 'framer-motion';
import Button from '../../components/Buttons/Button';
import SplitText from '../../components/Shared/SplitText';

const Contact = () => {
  return (
    <section id="contact" className="p-4 md:p-8 h-screen w-full relative overflow-hidden bg-[var(--background)]">
      
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/overlay.webp')] bg-cover bg-center opacity-30 mix-blend-overlay pointer-events-none" />

      <div className="glass-panel w-full h-full flex flex-col justify-center items-center text-center p-[2rem] tb:p-[6rem_2rem] max-sm:p-[4rem_1rem] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="text-[0.7rem] tracking-[0.4rem] uppercase font-bold text-[var(--brand)] mb-4"
        >
          Book a call
        </motion.div>

        <SplitText 
          text="Let's Build Something Amazing Together" 
          className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.75rem] font-light leading-[0.9] uppercase max-w-[35rem] w-full mt-[1rem] max-sm:mt-[0.8rem] text-[var(--primary)] text-center justify-center" 
          delay={0.2} 
        />

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[0.8rem] md:text-[1rem] tracking-[0.05rem] uppercase font-light max-w-[28rem] mt-4 mb-8 text-[var(--primary)] leading-[1]"
        >
          Whether you're a startup founder, business owner, or someone with a great app idea, I'm always excited to collaborate on meaningful products. From mobile apps to full-stack web platforms, let's discuss how we can bring your vision to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="mt-4"
        >
          <Button href="mailto:akshaits4@gmail.com">
            Send an email
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
