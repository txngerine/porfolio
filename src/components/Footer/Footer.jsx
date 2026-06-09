const Footer = () => {
  return (
    <>
      <footer className="w-full overflow-hidden bg-black text-[var(--primary)]">
        <div className="relative px-4 md:px-8 flex flex-col gap-8 pb-32 pt-20">
          
          <div className="flex flex-col md:flex-row items-start">
            <div className="flex-1 mb-8 md:mb-0">
              <p className="text-[0.8rem] md:text-[1rem] leading-[1.2] tracking-[0.05rem] uppercase font-light">
                Based in Kochi, Kerala, India
              </p>
              <a href="mailto:akshayts@example.com" className="block mt-3 md:mt-4 text-[0.7rem] tracking-[0.1rem] uppercase w-fit hover:text-[var(--brand)] transition-colors duration-700">
                akshayts@example.com
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
                © All rights reserved / 2026
              </p>
            </div>
            <div className="flex-1 flex flex-col md:flex-row flex-wrap gap-[0.75rem] tb:gap-[3rem]">
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

        <div className="w-full">
          <h2 className="text-[14.8vw] tracking-[-1vw] uppercase leading-[0.75] font-light text-gradient-brand text-center pb-8">
            Akshay Ts
          </h2>
        </div>
      </footer>

      <div className="fixed z-[100] bottom-5 right-5">
        <a
          href="https://frontendzaid.lemonsqueezy.com/buy/d7f52646-3c4b-40f4-8154-b3af9ee85952"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center px-5 py-[0.9rem] rounded-lg bg-[#f8f8f8] text-black uppercase text-[0.7rem] leading-[1.6] font-bold tracking-[0.08rem] transition-all duration-500 hover:drop-shadow-[0_0_10px_#f44e00] hover:shadow-[inset_0_-30px_20px_hsla(0,0%,100%,.2)]"
        >
          Get The Template
        </a>
      </div>
    </>
  );
};

export default Footer;
