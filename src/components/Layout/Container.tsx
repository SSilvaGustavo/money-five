import { ReactNode, useContext } from "react";
import { AppContext } from "@/context/AppContext";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  const { isMobileHeaderOpen } = useContext(AppContext);
  return (
    <main
      className={`max-w-[1440px] mx-auto flex justify-center items-center ${className} ${
        isMobileHeaderOpen ? "blur-md" : ""
      }`}
    >
      {children}
    </main>
  );
}
