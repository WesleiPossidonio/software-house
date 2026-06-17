import { DesktopIcon } from "@phosphor-icons/react";
import { Code, SquareDashedBottomCode } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedTitle } from "@/assets/components/AnimatedTitle";

export const AboutMe = () => {
  return (
    <section
      className="w-full h-auto min-h-[40rem] bg-white/1 flex flex-col 
      items-center justify-center py-10"
    >
      <motion.div className="container space-y-18 lg:space-y-23 p-6 py-6 md:py-20">
        <div className="space-y-5">
          <AnimatedTitle text="Na Tideon Tech acreditamos que a tecnologia não é apenas código, é estratégia, estrutura e visão de futuro." />
          <p className="text-neutral-400 text-sm md:text-md lg:text-lg text-center mx-auto">
            Desenvolvemos sites, plataformas e sistemas web que unem{" "}
            <span className="font-bold">
              estratégia, desempenho e escalabilidade.{" "}
            </span>{" "}
            Cada solução é construída para resolver desafios reais e acompanhar
            a evolução do negócio ao longo do tempo. Porque, no final, software
            não deve apenas funcionar.{" "}
            <span className="font-bold">
              Ele deve impulsionar o futuro da empresa que o utiliza.
            </span>
          </p>
        </div>

        {/* <TimelineSection /> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 ">
          <div
            className="h-60 p-6 flex flex-col justify-center rounded-xl 
            border border-white/5 bg-white/2 backdrop-blur-sm
            hover:scale-[1.03] transition-transform duration-300 "
          >
            <Code className="w-13 h-13 text-white mb-4" />
            <div>
              <h3 className="md:text-xl font-semibold text-white mb-3">
                Desenvolvimento Web
              </h3>
              <p className="text-neutral-400 text-sm md:text-md">
                Criamos sites, plataformas e sistemas web sob medida com foco em
                performance, escalabilidade e experiência do usuário.
              </p>
            </div>
          </div>

          <div
            className="h-60 p-6 flex flex-col justify-center rounded-xl 
            border border-white/5 bg-white/2 backdrop-blur-sm 
            hover:scale-[1.03] transition-transform duration-300"
          >
            <SquareDashedBottomCode className="w-13 h-13 text-white mb-4" />
            <div>
              <h3 className="md:text-xl font-semibold text-white mb-3">
                Sistemas e Automação
              </h3>
              <p className="text-neutral-400 text-sm md:text-md">
                Desenvolvemos sistemas personalizados e integrações que
                automatizam processos e otimizam a operação do seu negócio.
              </p>
            </div>
          </div>

          <div
            className="h-60 p-6 flex flex-col justify-center rounded-xl 
            border border-white/5 bg-white/2 backdrop-blur-sm 
            hover:scale-[1.03] transition-transform duration-300"
          >
            <DesktopIcon className="w-13 h-13 text-white mb-4" />
            <div>
              <h3 className="md:text-xl font-semibold text-white mb-3">
                Soluções Digitais
              </h3>
              <p className="text-neutral-400 text-sm md:text-md">
                Construímos produtos digitais completos unindo tecnologia,
                estratégia e design para impulsionar empresas no mundo digital.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
