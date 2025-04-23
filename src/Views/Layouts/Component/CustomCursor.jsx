import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.2,
        ease: "power2.out"
      });

      gsap.to(dotRef.current, {
        x: e.clientX - 3,
        y: e.clientY - 3,
        duration: 0.2,
        ease: "power2.out"
      });
    };

    const handleClick = (e) => {
      const ripple = document.createElement("div");
      ripple.className = "click-ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);

      gsap.to(ripple, {
        scale: 4,
        opacity: 0,
        duration: 0.6,
        ease: "power1.out",
        onComplete: () => ripple.remove()
      });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef}></div>
      <div className="cursor-dot" ref={dotRef}></div>
    </>
  );
};

export default CustomCursor;
