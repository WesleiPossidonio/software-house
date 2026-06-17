import ImageBg from "@/assets/bgCallAction.jpg";
import { Button } from "@/components/ui/button";

export const CallAction = () => {
  return (
    <section
      className="w-full h-[26rem] p-6 md:p-15 flex flex-col justify-center 
      items-start relative gap-4 md:gap-2 bg-cover bg-fixed bg-center 
      bg-parallaxDescktop bg-no-repeat my-0 mx-auto overflow-hidden"
      style={{ backgroundImage: `url(${ImageBg})` }}
    >
      <div className="absolute inset-0 bg-base/60 z-8" />
      <div className="container mx-auto z-10 text-center space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-6xl text-white ">
            Transforme sua ideia em uma experiência digital de alto impacto.
          </h2>
          <p className="md:w-[80%] mx-auto text-neutral-200 text-sm md:text-md lg:text-lg">
            Criamos soluções digitais modernas, escaláveis e pensadas para
            impulsionar negócios no mundo digital. Vamos construir algo incrível
            juntos.
          </p>
        </div>
        <Button
          className="w-56 md:w-66 p-6 md:p-8 border border-white bg-transparent text-md md:text-lg text-white 
          hover:bg-white hover:text-black rounded-lg transition-all duration-300 cursor-pointer"
        >
          Solicitar Projeto
        </Button>
      </div>
    </section>
  );
};
