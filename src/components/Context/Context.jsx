import React, { useRef } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const GlobalContext = createContext(null);

export function GlobalState({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");
  const fullText = "<Terrance />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          setIsLoading(true);
        }, 300);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [isLoading]);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const homeProjectsRef = useRef(null);
  const contactRef = useRef(null);
  const linkToPage = (pageRef) => {
    pageRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const value = {
    text,
    isLoading,
    linkToPage,
    homeRef,
    aboutRef,
    projectsRef,
    contactRef,
    homeProjectsRef,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  return context;
};

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}
