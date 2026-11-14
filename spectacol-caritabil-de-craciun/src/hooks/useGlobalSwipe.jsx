import { useEffect, useRef } from 'react';

export const useGlobalSwipe = (onSwipeNext, onSwipePrev) => {
  const isLocked = useRef(false);

  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e) => {
      if (isLocked.current) return;

      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const deltaX = touchStartX - touchEndX;
      const deltaY = touchStartY - touchEndY;

      // Detectăm doar mișcările stânga-dreapta clare (ignorând scroll-ul în jos)
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        const target = e.target;
        
        // Nu trecem la altă pagină dacă dăm swipe prin carusele
        if (target.closest('.gallery-carousel') || target.closest('.carousel-track')) {
          return; 
        }

        // Blocăm swipe-ul timp de 600ms pentru a nu sări 2 pagini dintr-o dată
        isLocked.current = true;
        setTimeout(() => {
          isLocked.current = false;
        }, 600);

        // Swipe spre STÂNGA (degetul merge de la dreapta spre stânga)
        if (deltaX > 0) {
          onSwipeNext();
        } 
        // Swipe spre DREAPTA (degetul merge de la stânga spre dreapta)
        else {
          onSwipePrev();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onSwipeNext, onSwipePrev]);
};