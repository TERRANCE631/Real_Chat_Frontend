import { MdCastForEducation, MdWork } from "react-icons/md";
import { RevealOnScrol } from "../RevealOnScrol";
import { useGlobalState } from "../Context/Context";
import { ProjectCarf } from "./components/ProjectCarf";
import { ProjectList } from "../ProjectList";

export function About() {
  const { aboutRef } = useGlobalState();
  const { projects } = ProjectList();

  const frontEndTech = [
    "React.js",
    "TailwindCSS",
    "CSS",
    "HTML",
    "GSAP",
    "Photoshop",
    "Next.js",
    "TypeScript",
  ];

  const backEndTech = [
    "JSON-Server",
    "Node.js",
    "JSON-Server-Auth",
    "Firebase",
    "MySQL",
    "Authorization",
    "REST API"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <RevealOnScrol>
        <div className="max-w-3xl mx-auto z-1">
          <h2
            ref={aboutRef}
            className="text-3xl font-bold bg-gradient-to-tr from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center z-1"
          >
            About Me
          </h2>

          <div className="rounded-xl bg-black bg-opacity-70 shadow-inner shadow-blue-600 hover:border-blue-500 hover:shadow-blue-500 hover:shadow-lg p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <div className="w-full rounded-t-lg border-white/10 bg-gradient-to-b from-white/5 border-t to-transparent flex justify-center mb-8">
              <img
                src="./bg-img/bg-2.jpg"
                className="rounded-full relative rounded-t-3xl w-[16rem] h-[16rem] shadow-blue-700 shadow-lg border-2 border-blue-500 z-50"
                alt=""
              />
            </div>

            <p className="text-gray-200 my-4 tracking-wider font-thin bg-white text-transparent bg-clip-text md:text-normal text-center">
              Passionate developer with expertise in building scalable web
              applications and crafting innovative solutions. A self-driven,
              determined, self-motivated and self-Taught frontend developer.
            </p>
            <div className="border-t my-4 border-white/20" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:text-start text-center">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border-white/20 border-r border-t">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontEndTech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 cursor-pointer py-1 px-3 rounded-full hover:bg-blue-500/20
                    hover:shadow-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border-white/20 border-l border-t">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backEndTech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 cursor-pointer py-1 px-3 rounded-full hover:bg-blue-500/20
                    hover:shadow-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8">
            <div className="p-6 rounded-xl shadow-inner shadow-blue-600 border border-white/10 hover:-translate-y-1 transition-all bg-black bg-opacity-70 hover:border-blue-500 hover:shadow-blue-500 hover:shadow-lg">
              <h3 className="text-xl flex items-center gap-2 font-bold mb-4">
                <span className="text-blue-500 text-3xl">
                  <MdWork />
                </span>
                Work Experience
              </h3>
              <div className="">
                <h4 className="my-4 font-medium">
                  Web Developer at Bathlako Temo Services - Citrus farm
                </h4>
                <div className="border-t border-white/20 my-2" />
                <p className="tracking-wider font-thin bg-white text-transparent bg-clip-text">
                  During my WIL(Work Integrated Learning) duration at a citrus
                  farm company so called Bathlako Temo Services co-oparatives, I
                  developed and still maintaining the website. The perpose of
                  developing this website was to solve a google maps issue and
                  their preveous website wasn't responsive, too simple and bleak
                  for user experience. The farm is located at a farming section
                  (referring to an urban profile), google maps couldn't find the
                  area or any close area near the farm, therefore I decided to
                  test my problem solving skill.
                </p>
                <div className="my-5">
                  {projects
                    .filter((project) => project.id === 3)
                    .map((item) => (
                      <ProjectCarf key={item.id} item={item} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScrol>
    </section>
  );
}
