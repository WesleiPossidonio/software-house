import { WhatsappLogoIcon } from "@phosphor-icons/react";
import Logo from "@/assets/Logo Site.svg";

export const Footer = () => {
  return (
    <footer className="w-full min-h-[20rem] h-auto flex items-center justify-center bg-base">
      <div className="container mx-auto grid grid-cols-5 items-start gap-8 md:gap-4 px-6 py-12">
        <div className="col-span-5 md:col-span-2 flex flex-col items-start justify-start gap-2 mt-5 order-5 md:order-1">
          <img src={Logo} alt="" className="w-36" />
          <p className="text-sm text-white/80 w-[70%]">
            Uma empresa dedicada a fornecer soluções inovadoras e de qualidade.
          </p>

          <div className=" col-span-5 md:col-span-1 flex items-center justify-center gap-2 mt-2">
            <span className="bg-white/80 w-8 h-8 rounded-full flex items-center justify-center">
              <WhatsappLogoIcon className="size-6 text-base" />
            </span>
            <span className="bg-white/80 w-8 h-8 rounded-full"></span>
            <span className="bg-white/80 w-8 h-8 rounded-full"></span>
          </div>
        </div>

        <div className=" col-span-5 md:col-span-1 flex flex-col items-start justify-start gap-2 md:gap-8">
          <h4 className="text-lg font-semibold text-white">Navegação</h4>

          <div className="flex flex-col items-start justify-start gap-2">
            <a href="#home" className="text-sm text-white/80">
              Home
            </a>
            <a href="#home" className="text-sm text-white/80">
              Sobre Nós
            </a>
            <a href="#home" className="text-sm text-white/80">
              Projetos
            </a>
            <a href="#home" className="text-sm text-white/80">
              Contatos
            </a>
          </div>
        </div>

        <div className=" col-span-5 md:col-span-1 flex flex-col items-start justify-center gap-2 md:gap-8">
          <h4 className="text-lg font-semibold text-white">Contatos</h4>

          <div className="flex flex-col items-start justify-start gap-2">
            <a
              href="mailto:contato@tideon.com.br"
              type="email"
              className="text-sm text-white/80"
            >
              <span className="text-white"> Email: </span> contato@tideon.com.br
            </a>
            <a
              href="tel:+5511999999999"
              type="tel"
              className="text-sm text-white/80"
            >
              <span className="text-white"> Telefone: </span> (11) 99999-9999
            </a>
          </div>
        </div>

        <div className=" col-span-5 md:col-span-1 flex flex-col items-start justify-center gap-2 md:gap-8">
          <h4 className="text-lg font-semibold text-white">Privacidade</h4>
          <p className="text-sm text-white/80">
            Respeitamos a privacidade dos nossos usuários e nos comprometemos a
            proteger suas informações pessoais.
          </p>
        </div>
      </div>
    </footer>
  );
};
