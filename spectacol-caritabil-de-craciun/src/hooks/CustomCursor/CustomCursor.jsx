import { useEffect, useRef, useState } from 'react';
import treeSvg from '../../assets/svg/brad-faq.svg';
import './CustomCursor.scss';

const useCustomCursor = (cursorRef, isDesktop) => {
  useEffect(() => {
    const cursor = cursorRef.current;
    
    // Dacă nu e desktop sau nu există cursorul, ne oprim aici
    if (!cursor || !isDesktop) return;

    const moveCursor = (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    const handleMouseDown = () => {
      cursor.classList.add('cursor-clicked');
    };

    const handleMouseUp = () => {
      cursor.classList.remove('cursor-clicked');
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorRef, isDesktop]);
};

const CustomCursor = () => {
  const cursorRef = useRef(null);
  
  // Detectăm dacă dispozitivul are un mouse real (Desktop/Laptop)
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.matchMedia('(pointer: fine)').matches : true
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const handleChange = (e) => setIsDesktop(e.matches);
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  useCustomCursor(cursorRef, isDesktop);

  // Dacă NU este desktop (adică este pe telefon/tabletă), nu afișăm nimic!
  if (!isDesktop) return null;

  return (
    <div className="custom-cursor" ref={cursorRef}>
      <img src={treeSvg} alt="cursor brad" className="cursor-tree" />
    </div>
  );
};

export default CustomCursor;