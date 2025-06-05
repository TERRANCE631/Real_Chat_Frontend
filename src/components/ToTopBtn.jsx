import React from "react";
import { BiSolidArrowToTop } from "react-icons/bi";
import { useWindowScroll } from "react-use";

export function ToTopBtn() {
  const { y: currentScrollY } = useWindowScroll();
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      {currentScrollY >= 2744 && (
        <section
          onClick={scrollToTop}
          role="button"
          className="fixed bottom-10 flex md:scale-[230%] scale-[250%] p-1 bg-black rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:border-2 hover:border-black bg-opacity-40 hover:text-black hover:bg-white shadow-black shadow-xl text-white flex-col right-8"
        >
          <BiSolidArrowToTop className="" />
        </section>
      )}
    </div>
  );
}
