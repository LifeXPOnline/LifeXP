import { useState, useEffect } from 'react';

const useIsLargeScreen = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024); // breakpoint for window > 1024px

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener('resize', checkScreenSize);

    // when done, remove eventlistener
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return isLargeScreen;
};

export default useIsLargeScreen;
