import { Layout, Main } from '@components/common';
import { useState, useEffect } from 'react';

export const MainLayout = ({ children }) => {
  // State
  const [scrollBtn, setScrollBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setScrollBtn(true);
      } else {
        setScrollBtn(false);
      }
    });
  }, []);

  return (
    <div className='h-screen w-screen flex flex-col justify-between max-w-[1920px] max-h-[1080px] mx-auto'>
      <Main.ScrollToTop scrollBtn={scrollBtn} />
      <div className='w-full h-full'>{children}</div>
      <Layout.Footer />
    </div>
  );
};
