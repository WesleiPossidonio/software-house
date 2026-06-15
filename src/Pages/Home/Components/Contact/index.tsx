import ImageBg from "@/assets/bgCallAction.jpg";
import { Button } from "@/assets/components/ui/button";
import { Input } from "@/assets/components/ui/input";
import { Textarea } from "@/assets/components/ui/textarea";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-[32rem] p-6 md:p-15 flex flex-col md:flex-row justify-center 
      items-start gap-4 md:gap-2 bg-cover bg-fixed bg-center relative
      bg-parallaxDescktop bg-no-repeat my-0 mx-auto "
      style={{ backgroundImage: `url(${ImageBg})` }}
    >
      <div className="absolute inset-0 bg-base/60 z-8" />
      <div className="container mx-auto flex items-center justify-between z-10">
        <h1 className="text-4xl mt-45">Entre em contato conosco</h1>

        <form
          action=""
          className="w-full md:w-[30rem] h-[38rem] flex flex-col items-start justify-center  p-8
          border border-white/8 z-10 -mt-27 bg-base rounded-md shadow-2xl"
        >
          <p>Preencha o formulário abaixo para entrar em contato conosco.</p>
          <Input
            type="text"
            placeholder="Nome"
            className="w-full mt-6 p-5 border-0 border-b border-gray-300 focus:ring-0 focus:border-primary transition-colors duration-300"
          />
          <Input
            type="email"
            placeholder="Email"
            className="w-full mt-6 p-5 border-0 border-b border-gray-300 focus:ring-0 focus:border-primary transition-colors duration-300"
          />
          <Input
            type="text"
            placeholder="Assunto"
            className="w-full mt-6 p-5 border-0 border-b border-gray-300 focus:ring-0 focus:border-primary transition-colors duration-300"
          />
          <Textarea
            placeholder="Mensagem"
            className=" w-full h-[8rem] mt-6 border-0 border-b border-gray-300
            rounded-none focus-visible:ring-0 focus-visible:border-primary shadow-none"
          />
          <Button
            type="submit"
            className="w-60 h-11 mt-8 px-4 py-2 text-md bg-neutral-300 text-black rounded-md hover:bg-primary/90 transition-colors duration-300"
          >
            Enviar
          </Button>
        </form>
      </div>
    </section>
  );
};
