import { motion } from "motion/react";

const projects = [
  {
    title: "Sistema ERP",
    category: "Sistemas",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Landing Page Premium",
    category: "Web Site",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Dashboard Analytics",
    category: "Dashboard",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Sistema de Agendamentos",
    category: "Automação",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
];

export const Portfolio = () => {
  return (
    <section className="w-full py-16 md:py-32 px-6 bg-base overflow-hidden">
      <div className="container mx-auto flex flex-col gap-16">
        {/* HEADER */}
        <div className="flex flex-col gap-5 items-center text-center">
          <p className="text-neutral-200 uppercase tracking-[0.3rem] text-sm font-semibold">
            Portfólio
          </p>
          <h2 className="text-2xl md:text-6xl text-white leading-tight">
            Projetos desenvolvidos para transformar ideias em experiências
            digitais modernas.
          </h2>
          <p className="text-neutral-400 md:max-w-2xl text-sm md:text-md lg:text-lg">
            Cada projeto é construído com foco em performance, experiência do
            usuário e escalabilidade.
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-start gap-4">
          {["All", "Web Sites", "Sistemas", "Automações"].map(
            (filter, index) => (
              <button
                key={index}
                className="px-6 py-3 rounded-md border border-white/10
                bg-white/5 text-sm tracking-wide text-neutral-300 font-semibold
                hover:border-base-light hover:text-white 
                transition-all duration-300 cursor-pointer"
              >
                {filter}
              </button>
            ),
          )}
        </div>

        {/* GRID */}
        <div className="w-full md:max-w-[80%] mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 space-y-5">
            {projects.map((project, index) => {
              const isEven = index % 2 !== 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className={`
                   group flex flex-col gap-8
                   ${isEven ? "md:-mt-16" : ""}
                  `}
                >
                  {/* IMAGE */}
                  <div
                    className="md:w-[90%] h-[15rem] md:h-[32rem] relative overflow-hidden rounded-2xl
                      border border-white/10 flex bg-white/5 
                    "
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" />
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col gap-2 px-2">
                    <p className="text-sm uppercase tracking-[0.2rem] text-neutral-400">
                      {project.category}
                    </p>

                    <h3 className="md:text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
