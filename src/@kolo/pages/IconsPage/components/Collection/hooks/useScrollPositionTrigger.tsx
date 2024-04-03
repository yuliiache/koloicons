import {useEffect, useState} from 'react';

export const useScrollPositionTrigger = () => {
  const [isAbsolutePosition, setIsAbsolutePosition] = useState(false);

  useEffect(() => {
    function updatePosition() {
      setIsAbsolutePosition(window.scrollY >= window.innerHeight / 6); //Temporary solution
    }

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return isAbsolutePosition;
};
