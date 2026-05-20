import { useState } from "react";
import { Menu, X } from "lucide-react"; // Ícones para abrir/fechar o menu

import Logo from "@/assets/Logo Site.svg";
import { Button } from "@/components/ui/button";
import { WhatsappLogoIcon } from "@phosphor-icons/react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Função para navegação e manipulação de âncoras
  // const handleNavigate = (path: string) => {
  //   if (path.startsWith("#")) {
  //     if (window.location.pathname !== "/") {
  //       navigate(`/${path}`); // ex: navegando para /#about
  //     } else {
  //       window.location.hash = path; // ex: #about
  //     }
  //   } else {
  //     navigate(path); // rotas como /login-estudante ou /admin
  //   }

  //   if (menuOpen) toggleMenu();
  // };

  return (
    <header className="w-full h-24 bg-transparent fixed lg:px-15 md:py-6 top-0 z-50 px-5">
      <div className="mx-auto flex items-center justify-between py-6">
        <a href="/" className="flex justify-center items-center cursor-pointer">
          <img className="w-28 md:w-44" src={Logo} alt="" />
        </a>

        <nav className="hidden md:flex md:items-center space-x-6">
          <a
            className="md:text-lg text-neutral-100 hover:text-base-blue font-semibold cursor-pointer"
            href="/"
          >
            Home
          </a>
          <a className="md:text-lg text-neutral-100 hover:text-base-blue font-semibold cursor-pointer">
            Sobre Nós
          </a>
          <a className="md:text-lg text-neutral-100 hover:text-base-blue font-semibold cursor-pointer">
            Projetos
          </a>
          <a className="md:text-lg text-neutral-100 hover:text-base-blue font-semibold cursor-pointer">
            Contatos
          </a>
          <Button
            className="w-46 p-6 text-lg text-white bg-transparent flex items-center gap-0 border border-neutral-200
           rounded-lg hover:bg-neutral-100 hover:text-black transition-colors duration-300 cursor-pointer"
          >
            <WhatsappLogoIcon className="mr-2 size-6" />
            Fale Conosco
          </Button>
        </nav>

        {/* Ícone para menu mobile */}
        <button
          className="md:hidden text-neutral-200"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="md:hidden mt-4 flex flex-col items-center space-y-4 py-6">
          <a
            className="md:text-lg text-neutral-200 hover:text-base-blue font-semibold cursor-pointer"
            href="/"
          >
            Home
          </a>
          <a className="md:text-lg text-neutral-200 hover:text-base-blue font-semibold cursor-pointer">
            Sobre Nós
          </a>
          <a className="md:text-lg text-neutral-200 hover:text-base-blue font-semibold cursor-pointer">
            Projetos
          </a>
          <a className="md:text-lg text-neutral-200 hover:text-base-blue font-semibold cursor-pointer">
            Contatos
          </a>
        </nav>
      )}
    </header>
  );
};
