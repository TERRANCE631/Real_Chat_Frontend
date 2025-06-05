import { BiArrowToRight, BiLogoGithub } from "react-icons/bi";

export function ProjectCarf({ item }) {
  return (
    <div className="p-6 rounded-xl bg-black border border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 hover:border-blue-500/30 transition-all">
      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
      <div className="">
        <img src={item.project} alt="" className="object-cover object-center"/>
      </div>
      <p className="text-gray-400 my-4">{item.description}</p>
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center flex-wrap gap-2">
          {item.tech.map((tech, key) => (
            <span
              key={key}
              className="bg-blue-500/10 text-blue-500 cursor-pointer py-1 px-3 rounded-full hover:bg-blue-500/20
                            hover:shadow-lg"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-start flex-wrap items-center gap-2 mt-4">
          {item.fullstack && (
            <span
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500/10 text-purple-500 cursor-pointer py-1 px-3 rounded-full hover:bg-purple-500/20 hover:shadow-lg"
            >
              Fullstack
            </span>
          )}
          {!item.fullstack && (
            <span
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500/10 text-orange-500 cursor-pointer py-1 px-3 rounded-full hover:bg-orange-500/20 hover:shadow-lg"
            >
              Frontend
            </span>
          )}
          <div className="">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 flex items-center gap-2 hover:text-blue-300 transtion-colors my-4"
            >
              View Project <BiArrowToRight />
            </a>
          </div>
          <div className="flex items-center gap-2 justify-start">
              <a
                href={item.githubFrontend}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 ml-2 flex items-center gap-2 hover:text-blue-300 transtion-colors my-4"
              >
                GitHub - Frontend <BiLogoGithub className="scale-150"/>
              </a>
            {item.fullstack && (
              <a
                href={item.githubBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 ml-2 flex items-center gap-2 hover:text-blue-300 transtion-colors my-4"
              >
                GitHub - Backend <BiLogoGithub className="scale-150"/>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
