import { RevealOnScrol } from "../RevealOnScrol";
import { ProjectList } from "../ProjectList";
import { useGlobalState } from "../Context/Context";
import { ProjectCarf } from "./components/ProjectCarf";

export function Projects() {
  const { projects } = ProjectList();
  const { projectsRef } = useGlobalState();

  return (
    <section
      ref={projectsRef}
      className="min-h-screen bg-gradient-to-t from-white/10 to-black flex items-center justify-center py-20"
    >
      <RevealOnScrol>
        <div className="max-w-5xl shadow-inner shadow-blue-600 hover:border-blue-500 hover:shadow-blue-500 hover:shadow-lg hover:-translate-y-0.5 duration-200 mx-auto px-4 border p-4 rounded-xl border-white/10">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-tr from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            {projects.map((item) => (
              <ProjectCarf key={item.id} item={item} />
            ))}
          </div>
        </div>
      </RevealOnScrol>
    </section>
  );
}
