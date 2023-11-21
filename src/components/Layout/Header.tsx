"use client"

import {
  ForwardedRef,
  HTMLAttributes,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import { AppContext } from "@/context/AppContext";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

interface NavLinkProps {
  className?: string;
  onClick?: () => void;
}

interface MobileHeaderProps extends HTMLAttributes<HTMLDivElement> {
  ref: ForwardedRef<HTMLDivElement>;
  className?: string;
  onLinkClick?: () => void;
  onIconClick?: () => void;
}

const NavLink = ({ className, onClick }: NavLinkProps) => {
  const menuItems = ["grafico", "noticias", "ferramentas", "sobre", "tutoriais"];
  return (
    <ol className="flex flex-col gap-5 lg:flex-row lg:gap-24 items-center">
      {menuItems.map((item) => (
        <li className="[counter-increment:item] items-reveal" key={item}>
          <Link
            href={`/${item}`}
            className={`relative group ${className ?? ""}`}
            onClick={onClick}
          >
            <div className="group flex flex-col items-center justify-center text-xl gap-1 lg:gap-0 lg:flex-row lg:text-base before:text-primary-100 before:text-right">
              <span className="text-slate-350 font-medium group-hover:text-primary-100 capitalize transition-colors">
                {item}
              </span>
            </div>
            <span className="h-[2px] w-0 bg-primary-100 absolute left-0 bottom-0 group-hover:w-4/5 transition-[width] hidden lg:inline-block"></span>
          </Link>
        </li>
      ))}
          <Link href={'/login'} className="py-2 px-6 rounded-md bg-primary-100 text-sm text-white hover:scale-105 transition-all">
            Login
          </Link>
    </ol>
  );
};

const MobileHeader = (props: MobileHeaderProps) => {
  const { ref, className, onLinkClick, onIconClick, ...rest } = props;

  return (
    <aside
      {...rest}
      ref={ref}
      className={`flex justify-center items-center fixed top-0 bottom-0 right-0 w-[75dvw] max-w-sm h-screen bg-slate-850 backdrop-blur-md translate-x-0 transition-transform ${
        className ?? ""
      }`}
    >
      <div className="">
        <AiOutlineClose
          size={40}
          className="absolute text-teal-300 top-4 right-6"
          onClick={onIconClick}
        />
        <nav className="flex flex-col space-y-6">
          <NavLink onClick={onLinkClick} className="" />
        </nav>
      </div>
    </aside>
  );
};

export function Header() {
  const { isMobile, isMobileHeaderOpen, setIsMobileHeaderOpen } =
    useContext(AppContext);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setPrevScrollPos(currentScrollPos);
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
    };

    const scrollBlock = () => {
      if (isMobileHeaderOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileHeaderOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    scrollBlock();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [prevScrollPos, menuRef, setIsMobileHeaderOpen, isMobileHeaderOpen]);

  const toggleMenu = () => {
    setIsMobileHeaderOpen(!isMobileHeaderOpen);
  };

  return (
    <header
      className={`transition duration-300 text-lg w-full z-50 backdrop-blur-md ${
        prevScrollPos === 0 ? "" : "fixed shadow-xl shadow-slate-950/25"
      } ${
        visible ? "visible" : "-translate-y-full shadow-xl shadow-slate-950"
      } ${isMobileHeaderOpen ? "" : "overflow-hidden"}`}
    >
      {!isMobile ? (
        <div className="w-full flex items-center justify-between py-3 px-32">
          <Link href={"/"} className="animate-fade-in-bottom">
            <Image
              src={logo}
              alt=""
              className="w-40"
            />
          </Link>
          <nav className="flex font-semibold cursor-pointer pr-16 animate-[fade-in-bottom_0.5s_ease-out_0.7s_both] space-x-8">
            <NavLink/>
          </nav>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <Image
            src={logo}
            alt=""
            className="w-28"
          />
          <AiOutlineMenu
            size={40}
            className={`mr-4 text-teal-300 transition-all duration-300 menu-icon`}
            onClick={toggleMenu}
          />
          <MobileHeader
            ref={menuRef}
            aria-hidden={isMobileHeaderOpen ? "false" : "true"}
            tabIndex={isMobileHeaderOpen ? 1 : -1}
            className={`${isMobileHeaderOpen ? "visible" : "translate-x-full"}`}
            onLinkClick={() => setIsMobileHeaderOpen(false)}
            onIconClick={toggleMenu}
          />
        </div>
      )}
    </header>
  );
}
