import { useEffect, useState } from 'react';

const useIsScroll = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop =
            window.scrollY || document.documentElement.scrollTop;
          const enterThreshold = 50; // scroll down threshold
          const exitThreshold = 25; // scroll up threshold

          setIsScroll((prev) => {
            if (!prev && scrollTop >= enterThreshold) return true;
            if (prev && scrollTop < exitThreshold) return false;
            return prev;
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isScroll;
};

export default useIsScroll;
