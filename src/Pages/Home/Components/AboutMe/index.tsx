import { DesktopIcon } from "@phosphor-icons/react";
import { Code, SquareDashedBottomCode } from "lucide-react";

export const AboutMe = () => {
  return (
    <section
      className="w-full h-auto min-h-[40rem] bg-base flex flex-col 
    items-center justify-center"
    >
      <div className="container space-y-18 lg:space-y-23 p-6 py-16">
        <div className="space-y-5">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-white text-center">
            Na Tideon Tech acreditamos que a tecnologia não é apenas código é
            estratégia, estrutura e visão de futuro.
          </h1>
          <p className="text-sm lg:text-lg text-white text-center">
            Criamos{" "}
            <span className="font-bold">
              sites, plataformas e sistemas web{" "}
            </span>{" "}
            pensados para transformar ideias em produtos digitais sólidos. Cada
            projeto é desenvolvido com{" "}
            <span className="font-bold">
              foco em performance, escalabilidade e experiência do usuário
            </span>
            , garantindo soluções modernas e eficientes. Mais do que desenvolver
            software, nosso objetivo é construir ferramentas que impulsionam
            negócios no mundo digital.
          </p>
        </div>

        {/* <TimelineSection /> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 ">
          <div
            className="h-60 p-6 flex flex-col justify-center rounded-xl 
          border border-white/10 bg-white/5 backdrop-blur-sm 
          hover:scale-[1.03] transition-transform duration-300 "
          >
            <Code className="w-13 h-13 text-white mb-4" />
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Desenvolvimento Web
              </h3>
              <p className="text-neutral-400">
                Criamos sites, plataformas e sistemas web sob medida com foco em
                performance, escalabilidade e experiência do usuário.
              </p>
            </div>
          </div>

          <div
            className="h-60 p-6 flex flex-col justify-center rounded-xl 
          border border-white/10 bg-white/5 backdrop-blur-sm 
          hover:scale-[1.03] transition-transform duration-300"
          >
            <SquareDashedBottomCode className="w-13 h-13 text-white mb-4" />
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Sistemas e Automação
              </h3>
              <p className="text-neutral-400">
                Desenvolvemos sistemas personalizados e integrações que
                automatizam processos e otimizam a operação do seu negócio.
              </p>
            </div>
          </div>

          <div
            className="h-60 p-6 flex flex-col justify-center rounded-xl 
          border border-white/10 bg-white/5 backdrop-blur-sm 
          hover:scale-[1.03] transition-transform duration-300"
          >
            <DesktopIcon className="w-13 h-13 text-white mb-4" />
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Soluções Digitais
              </h3>
              <p className="text-neutral-400">
                Construímos produtos digitais completos unindo tecnologia,
                estratégia e design para impulsionar empresas no mundo digital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
