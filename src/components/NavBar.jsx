import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import { useGlobalState } from "./Context/Context";

export function NavBar({ menuOpen, setMenuOpen }) {
  const [isIndicaterActive, setIsIndicaterActive] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const audioElementRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // audio button function
  function toggleAudioIndicater() {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicaterActive((prev) => !prev);
  }

  // useEffect for playing the audio
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  const NavContainerRef = useRef(null);

  // var for window scrolling useEffects
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const { y: currentScrollY } = useWindowScroll();

  // useEffect for window scrolling, when exis y changes
  useEffect(() => {
    const navbarElement = NavContainerRef.current;

    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navbarElement.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navbarElement.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navbarElement.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);
  console.log(currentScrollY);

  // useEffect for animation
  useEffect(() => {
    gsap.to(NavContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.5,
    });
  }, [isNavVisible]);

  const { linkToPage, homeRef, contactRef, aboutRef, projectsRef } =
    useGlobalState();

  const navList = [
    { title: "About", link: aboutRef },
    { title: "Contact", link: contactRef },
    { title: "Projects", link: projectsRef },
  ];

  return (
    <nav
      ref={NavContainerRef}
      className="fixed top-0 w-full z-40 backdrop-blur-xl border-b border-white/10 shadow-lg"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a ref={homeRef} className="font-mono text-xl font-bold text-white">
            Terrance<span className="text-blue-500">.tech</span>
          </a>

          <button
            onClick={toggleAudioIndicater}
            className="ml-10 flex items-center space-x-0.5 md:hidden"
          >
            <audio ref={audioElementRef} loop src="./audio/loop.mp3" />

            {[1, 2, 3, 4].map((bar) => (
              <div
                key={bar}
                className={`indicator-line ${isIndicaterActive ? "active" : ""}`}
                style={{ animationDelay: `${bar * 0.1}s` }}
              />
            ))}
          </button>

          <div
            className={`w-7 h-5 relative cursor-pointer z-40 md:hidden ${menuOpen ? "hidden" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navList.map((links, i) => (
              <a
                key={i}
                onClick={() => linkToPage(links.link)}
                role="button"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {links.title}
              </a>
            ))}
          </div>

          <button
            onClick={toggleAudioIndicater}
            className="mx-2 md:flex items-center space-x-0.5 hidden"
          >
            <audio ref={audioElementRef} loop src="/audio/loop.m4a" />

            {[1, 2, 3, 4, 5].map((bar) => (
              <div
                key={bar}
                className={`indicator-line ${isIndicaterActive ? "active" : ""}`}
                style={{ animationDelay: `${bar * 0.1}s` }}
              />
            ))}
          </button>
        </div>
      </div>
    </nav>
  );
}
