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
              <a href="mailto:akshaits4@gmail.com" className="block mt-3 md:mt-4 text-[0.7rem] tracking-[0.1rem] uppercase w-fit hover:text-[var(--brand)] transition-colors duration-700">
                akshaits4@gmail.com
              </a>
            </div>
            
            <div className="flex-1 flex flex-col items-start gap-4">
              {[['Home', '/'], ['About', '/about-me'], ['Projects', '/projects'], ['Contact', '/contact']].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.75rem] font-light uppercase leading-[0.9] hover:text-[var(--brand)] transition-colors duration-700"
                >
                  {label}
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
              {[['Bluesky', 'https://bsky.app/profile/akshaits.bsky.social'], ['Instagram', 'https://www.instagram.com/akshaiiii.i/'], ['LinkedIn', 'https://www.linkedin.com/in/akshai-t-s']].map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.7rem] tracking-[0.1rem] uppercase hover:text-[var(--brand)] transition-colors duration-700"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-[14.8vw] tracking-[-1vw] uppercase leading-[0.75] font-light text-gradient-brand text-center pb-8">
            Akshay T.S
          </h2>
        </div>
      </footer>

    </>
  );
};

export default Footer;
