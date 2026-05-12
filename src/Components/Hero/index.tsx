import { useState } from "react";
import BgImage from "../../assets/Hero.png";
import HeroVideo from "../../assets/video-hero.mp4";
import { Button } from "../../components/ui/button";

export const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative w-full h-svh flex flex-col items-start justify-center gap-9 p-4 md:p-12 overflow-hidden">
      {/* Imagem fallback */}
      {!videoLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BgImage})` }}
        />
      )}

      {/* Video background */}
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src={HeroVideo} type="video/mp4" />
      </video>

      {/* Overlay opcional para contraste */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col gap-6 md:gap-9">
        <p className="text-white text-3xl md:text-7xl font-semibold leading-11 md:leading-19">
          Soluções digitais <br />
          inteligentes para impulsionar <br />
          seu negócio ao próximo nível
        </p>

        <Button
          className="w-36 md:w-60 h-13 md:h-14 bg-transparent border border-white text-lg md:text-xl rounded-lg
          text-white hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
        >
          Saiba Mais
        </Button>
      </div>
    </section>
  );
};
