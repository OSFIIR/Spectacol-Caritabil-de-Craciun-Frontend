import { useEffect, useRef } from 'react';
import treeSvg from '../../assets/svg/brad-faq.svg'; // Pune calea corectă către bradul tău SVG
import './CustomCursor.scss';

// Acesta este hook-ul care urmărește mouse-ul
const useCustomCursor = (cursorRef) => {
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e) => {
      // translate3d folosește placa video pentru mișcare ultra-fluidă
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    // Ascultăm evenimentul de mișcare a mouse-ului
    window.addEventListener('mousemove', moveCursor);

    // Curățăm evenimentul când componenta este distrusă
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorRef]);
};

// Componenta care afișează bradul
const CustomCursor = () => {
  const cursorRef = useRef(null);
  
  // Apelăm hook-ul de mai sus
  useCustomCursor(cursorRef);

  return (
    <div className="custom-cursor" ref={cursorRef}>
      <img src={treeSvg} alt="cursor brad" className="cursor-tree" />
    </div>
  );
};

export default CustomCursor;