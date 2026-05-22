import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import ImageBg from "@/assets/bgCallAction.jpg";
import LogoCriard from "@/assets/logoCriard.png";
import LogoCartorio from "@/assets/download.jpeg";
import LogoIs53 from "@/assets/Logo-is53.svg";

export const Companies = () => {
  return (
    <section
      className="w-full h-[12rem] p-6 md:p-15 flex flex-col justify-center items-start relative
      gap-4 md:gap-2 bg-cover bg-fixed bg-center bg-parallaxDescktop bg-no-repeat my-0 mx-auto overflow-hidden"
      style={{ backgroundImage: `url(${ImageBg})` }}
    >
      <div className="absolute inset-0 bg-base/60" />
      <div className="container mx-auto">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="items-center">
            <CarouselItem className="md:basis-1/4 flex items-center justify-center w-full">
              {" "}
              <img className="w-10" src={LogoIs53} alt="" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/4 flex items-center justify-center w-full">
              <img className="w-27" src={LogoCriard} alt="" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/4 flex items-center justify-center w-full">
              <img className="w-28" src={LogoCartorio} alt="" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/4 flex items-center justify-center w-full">
              {" "}
              <img className="w-10" src={LogoIs53} alt="" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
