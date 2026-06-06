import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden bg-black text-[var(--primary)]">
      <div className="relative px-4 md:px-8 flex flex-col gap-8 pb-32 pt-20">
        
        <div className="flex flex-col md:flex-row items-start">
          <div className="flex-1 mb-8 md:mb-0">
            <p className="text-[0.8rem] md:text-[1rem] leading-[1.2] tracking-[0.05rem] uppercase font-light">
              Prinsengracht 123, <br/>
              1016 GV Amsterdam, <br/>
              The Netherlands
            </p>
            <a href="mailto:hello@kaeldonovan.com" className="block mt-3 md:mt-4 text-[0.7rem] tracking-[0.1rem] uppercase w-fit hover:text-[var(--brand)] transition-colors duration-700">
              hello@kaeldonovan.com
            </a>
          </div>
          
          <div className="flex-1 flex flex-col items-start gap-4">
            {['Home', 'About', 'Projects', 'Contact'].map((link) => (
              <a 
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.75rem] font-light uppercase leading-[0.9] hover:text-[var(--brand)] transition-colors duration-700"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#252525]" />

        <div className="flex flex-col md:flex-row items-start md:items-center gap-16 md:gap-0">
          <div className="flex-1">
            <p className="text-[0.7rem] tracking-[0.1rem] uppercase">
              © All rights reserved / 2024
            </p>
          </div>
          <div className="flex-1 flex flex-col md:flex-row flex-wrap gap-4 md:gap-12">
            {['Instagram', 'Linkedin', 'Dribbble', 'Framer'].map((social) => (
              <a 
                key={social}
                href="#"
                className="text-[0.7rem] tracking-[0.1rem] uppercase hover:text-[var(--brand)] transition-colors duration-700"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Big Name */}
      <div className="w-full">
        <h2 className="text-[14.8vw] tracking-[-1vw] uppercase leading-[0.75] font-light text-gradient-brand text-center pb-8">
          Kael Donovan
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
