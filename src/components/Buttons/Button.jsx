const Button = ({ children, href, className = '' }) => {
  const isExternal = href?.startsWith('http');
  
  return (
    <a 
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className={`inline-block text-center px-8 py-4 rounded-lg bg-[var(--brand)] text-[var(--primary)] uppercase text-sm font-bold tracking-[0.1rem] leading-[1.6] transition-all duration-500 hover:shadow-[inset_0_-30px_20px_hsla(0,0%,100%,.2)] shadow-[inset_0_-20px_20px_hsla(0,0%,100%,.2)] text-shadow-brand ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;
