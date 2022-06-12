import { useEffect, useMemo, useState } from 'react';

const getWindowDimension = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
};

const useWindowDimension = () => {
  const [dimension, setDimension] = useState(getWindowDimension());
  const handleResize = useMemo(
    () => () => {
      setDimension(getWindowDimension());
    },
    []
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimension;
};

export default useWindowDimension;
