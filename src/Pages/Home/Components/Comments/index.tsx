import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const comentsArray = [
  {
    name: "Rafael",
    text: "O Weslei conseguiu traduzir exatamente o que a gente queria para o site da nossa empresa. Sempre muito atencioso, explicou cada etapa com paciência e entregou tudo com muito capricho.",
    id: 1,
  },
  {
    name: "Claudia",
    text: "Eu não entendia nada de tecnologia e mesmo assim o Weslei fez tudo parecer simples. Ele ouviu nossas ideias, deu sugestões valiosas e entregou um site leve, bonito e fácil de usar.",
    id: 2,
  },
  {
    name: "Otávio",
    text: "Trabalhar com o Weslei foi tranquilo do início ao fim. Sempre disponível, entregou o projeto no prazo e com uma qualidade impressionante. Dá pra ver que ele faz com paixão.",
    id: 3,
  },
  {
    name: "Sheila",
    text: "O site da nossa empresa precisava de uma cara nova, e o Weslei trouxe exatamente isso. Ele tem um olhar muito sensível para o design e uma organização que passa muita segurança.",
    id: 4,
  },
  {
    name: "Luiz Paulo",
    text: "Tínhamos uma ideia, mas não sabíamos como colocá-la no ar. O Weslei abraçou o projeto, pensou em cada detalhe e foi além do esperado. Foi mais que um serviço técnico, foi parceria.",
    id: 5,
  },
  {
    name: "Larissa",
    text: "O site da minha clínica estava parado há muito tempo. O Weslei ouviu minha história, entendeu o propósito do meu trabalho e criou algo que realmente representa quem eu sou. Gratidão define.",
    id: 6,
  },
];

export const Coments = () => {
  return (
    <section className="w-full h-auto flex items-center bg-base justify-center">
      <div className="container mx-auto py-25 p-6 md:px-0 space-y-5 flex flex-col md:flex-row items-center justify-center gap-7">
        <div
          className="w-full flex flex-col items-center justify-start gap-3"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="self-start">
            <h4 className="text-white text-sm">Testemunhos</h4>
            <h1 className="text-white text-2xl md:text-5xl">
              O que dizem <br /> sobre nosso trabalho
            </h1>
          </div>
          <p className="text-white text-sm md:text-md m-0 md:w-3/4 self-start">
            Confira o feedback de nossos clientes e parceiros. Eles compartilham
            suas experiências e como nossas soluções ajudaram a transformar seus
            projetos em sucesso.
          </p>
          <button className="w-46 self-start bg-white/5 px-8 py-4 mt-2 rounded-xl text-white font-bold">
            Saiba Mais!
          </button>
        </div>

        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <CarouselContent>
            {comentsArray.map((coments) => {
              return (
                <CarouselItem
                  key={coments.id}
                  className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center"
                >
                  <div className="w-full h-72 p-6 flex flex-col items-start justify-center gap-3 rounded-md shadow-sm bg-white/5">
                    <p className="text-lg font-semibold text-white">
                      {coments.name}
                    </p>
                    <p className="text-sm text-white">{coments.text}</p>
                    <div className="flex flex-col items-start justify-center gap-3">
                      <div className="flex">
                        <Star className="size-4 text-yellow-400" />
                        <Star className="size-4 text-yellow-400" />
                        <Star className="size-4 text-yellow-400" />
                        <Star className="size-4 text-yellow-400" />
                        <Star className="size-4 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
