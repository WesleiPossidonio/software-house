import Autoplay from "embla-carousel-autoplay";

import LogoCriard from "@/assets/logoCriard.png";
import LogoCartorio from "@/assets/download.jpeg";
import LogoIs53 from "@/assets/Logo-is53.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const Companies = () => {
  return (
    <section className="w-full h-30 max-h-auto bg-base p-8 flex items-center justify-center gap-6">
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
