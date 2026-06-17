import { Timeline } from "./components/Timeline";

export default function TimelineSection() {
  return (
    <section
      className="w-full py-16 md:py-32 bg-white/1 min-[35rem] h-auto
     text-white overflow-hidden"
    >
      <div className="container mx-auto px-6 space-y-14 md:space-y-28">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-center ">
            Uma jornada construída com método.
          </h2>

          <p className="text-sm md:text-md text-neutral-400">
            A metodologia é o que nos diferencia. Ela é a base de tudo o que
            fazemos, garantindo que cada etapa do processo seja cuidadosamente
            planejada e executada.
          </p>
        </div>

        <Timeline />
      </div>
    </section>
  );
}
