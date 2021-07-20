import { useEffect, useState } from 'react';

export const useWindowsSize = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleWidnowResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleWidnowResize);

    return () => window.removeEventListener('resize', handleWidnowResize);
  }, []);

  return dimensions;
};
