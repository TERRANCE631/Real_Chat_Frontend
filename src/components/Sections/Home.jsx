import gsap from "gsap";
import { RevealOnScrol } from "../RevealOnScrol";
import { useGSAP } from "@gsap/react";
import { TiLocationArrow } from "react-icons/ti";
import { useGlobalState } from "../Context/Context";

export function Home() {
  const random = gsap.utils.random(-360, 360, 20);

  useGSAP(() => {
    gsap.from("#shake", {
      x: 30,
      y: 50,
      repeat: -1,
      duration: 50,
      rotate: random,
      yoyoEase: true,
    });
  });
  useGSAP(() => {
    gsap.to("#rotate", {
      x: 3,
      y: -30,
      repeat: -1,
      duration: 90,
      rotate: random,
      yoyoEase: true,
    });
  });
  const { homeRef, projectsRef, contactRef, linkToPage } = useGlobalState();

  return (
    <section
      ref={homeRef}
      className="min-h-screen flex items-center justify-center"
    >
      <RevealOnScrol>
        <div className="text-center z-10 px-4 relative">
          <h1 className="text-3xl font-circular-web md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right z-1">
            Hi, i'm Terrance
          </h1>
          <p className="text-gray-200 font-general text-md mb-8 max-w-lg mx-auto">
            A fullstack developer who loves learning and crafting scalable
            web application. My goal is to build solutions that offer both
            exceptional performance and delightful user experience
          </p>

          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={() => linkToPage(projectsRef)}
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 
              hover:shadow-blue-500 hover:bg-blue-500/10 z-1 shadow-blue-500 shadow-lg"
            >
              <p className="flex items-center md:text-md text-xs">
                <span className="mr-2">
                  <TiLocationArrow />
                </span>
                View Projects
              </p>
            </button>
            <button
              onClick={() => linkToPage(contactRef)}
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 
              hover:shadow-blue-500 hover:bg-blue-500/10 z-1 shadow-blue-500 shadow-lg"
            >
              <p className="md:text-md text-xs">Contact Me</p>
            </button>
          </div>

          <div className="h-full w-full flex justify-center items-center">
            <img
              src="./bg-img/bg-1.jpeg"
              className="rounded-full absolute lg:w-[40rem] md:w-[30rem] -z-10 lg:-right-[30rem] lg:-top-[20rem] md:-right-[20rem] md:-top-[20rem] -top-[10rem] -right-[8rem] opacity-60"
              alt="bg_img"
            />
            <img
              id="shake"
              src="./bg-img/xlg_stone.png"
              className="rounded-full absolute -bottom-[50rem] -left-[4rem] rotate-[220deg] md:hidden -z-10 opacity-30 "
              alt="bg_img"
            />
            <img
              id="rotate"
              src="./bg-img/sm_stone.png"
              className="rounded-full absolute -bottom-[25rem] left-[15rem] 2xl:hidden -rotate-[25deg] -z-10 opacity-50"
              alt="bg_img"
            />
            <img
              id="shake"
              src="./bg-img/lg_stone.png"
              className="rounded-full absolute w-[3rem] left-[15rem] lg:left-[30rem] md:left-[30rem] rotate-[25deg] -z-10 opacity-40"
              alt="bg_img"
            />
            <img
              id="shake"
              src="./bg-img/xlg_stone.png"
              className="rounded-full absolute w-[2rem] -top-[5rem] right-[15rem] -rotate-[25deg] -z-10 opacity-30"
              alt="bg_img"
            />
            <section>
              <img
                id="shake"
                src="./bg-img/xlg_stone.png"
                className="rounded-full absolute w-[2rem] top-[20rem] left-[5rem] -rotate-[25deg] -z-10 opacity-50"
                alt="bg_img"
              />
              <img
                id="rotate"
                src="./bg-img/xlg_stone.png"
                className="rounded-full absolute w-[4rem] -top-[15rem] -left-[0rem] -rotate-[25deg] -z-10 opacity-40"
                alt="bg_img"
              />
            </section>
          </div>
        </div>
      </RevealOnScrol>
    </section>
  );
}
