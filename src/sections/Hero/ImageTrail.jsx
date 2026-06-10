import { useEffect, useRef } from 'react';

const ImageTrail = () => {
  const trailRef = useRef(null);
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    
    let winSize = { width: window.innerWidth, height: window.innerHeight };
    const handleResize = () => {
      winSize = { width: window.innerWidth, height: window.innerHeight };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const lerp = (a, b, n) => (1 - n) * a + n * b;
    const mapRange = (val, inMin, inMax, outMin, outMax) => {
      return (val - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    };

    const totalTrailElements = 9;
    const trailElems = trailRef.current.querySelectorAll(".trail__img");
    
    const imgTransforms = Array.from({ length: totalTrailElements }, () => ({
      x: 0,
      y: 0,
      rz: 0
    }));

    let animationFrameId;

    const renderLoop = () => {
      imgTransforms.forEach((trans, idx) => {
        const factor = 0.02 * idx + 0.05;
        const targetX = mapRange(mousePos.current.x, 0, winSize.width, -200, 200);
        const targetY = mapRange(mousePos.current.y, 0, winSize.height, -70, 70);
        const targetRz = mapRange(mousePos.current.x, 0, winSize.width, -10, 10);

        trans.x = lerp(trans.x, targetX, factor);
        trans.y = lerp(trans.y, targetY, factor);
        trans.rz = lerp(trans.rz, targetRz, factor);

        if (trailElems[idx]) {
          trailElems[idx].style.transform = `translate(${trans.x}px, ${trans.y}px) rotateZ(${trans.rz}deg)`;
        }
      });

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="ImageTrail_content__mP5mu z-0 pointer-events-none absolute inset-0 flex items-center justify-center">
      <div 
        ref={trailRef}
        className="ImageTrail_trail__FEu9c"
      >
        {Array.from({ length: 9 }).map((_, idx) => {
          const opacity = idx === 8 ? 1 : (idx + 1) / 9;
          return (
            <img 
              key={idx}
              className="trail__img" 
              src="/images/heroimg2.png" 
              style={{ opacity, aspectRatio: '1600/2192' }}
              alt="trail element"
              loading="eager"
              fetchpriority="high"
              decoding="sync"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageTrail;
