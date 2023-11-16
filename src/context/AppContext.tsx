"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

interface AppContextProps {
  isDesktop: boolean;
  setIsDesktop: (isDesktop: boolean) => void;
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
  isMobileHeaderOpen: boolean;
  setIsMobileHeaderOpen: (isMobileHeaderOpen: boolean) => void;
  isPageLoaded: boolean;
  setPageLoaded: (isPageLoaded: boolean) => void;
}

export const AppContext = createContext<AppContextProps>({
  isDesktop: false,
  setIsDesktop: () => {},
  isMobile: false,
  setIsMobile: () => {},
  isMobileHeaderOpen: true,
  setIsMobileHeaderOpen: () => {},
  isPageLoaded: true,
  setPageLoaded: () => {},
});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false);
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/") {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const desktopMediaQuery = window.matchMedia("(min-width: 1280px)");
      setIsDesktop(desktopMediaQuery.matches);

      const mobileMediaQuery = window.matchMedia("(max-width: 1023px)");
      setIsMobile(mobileMediaQuery.matches);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        isDesktop,
        setIsDesktop,
        isMobile,
        setIsMobile,
        isMobileHeaderOpen,
        setIsMobileHeaderOpen,
        isPageLoaded,
        setPageLoaded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
