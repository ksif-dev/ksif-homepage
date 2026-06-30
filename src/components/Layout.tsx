import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({ children }: { children: ReactNode }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { pathname } = useLocation();

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally triggers on pathname change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Header />
      <main className="pt-14">{children}</main>
      <Footer />

      {/* Scroll to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="맨 위로"
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#e60000] text-white flex items-center justify-center transition-colors hover:bg-[#cc0000] z-50 ${
          showScrollTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <svg
          width="20"
          aria-hidden="true"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 15V5M5 10L10 5L15 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
};
