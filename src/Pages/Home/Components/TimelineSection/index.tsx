import { Timeline } from "./components/Timeline";

export default function TimelineSection() {
  return (
    <section
      className="w-full py-32  bg-white/1 min-[35rem] h-auto
     text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 space-y-28">
        <h2 className="text-3xl md:text-5xl lg:text-6xl text-center ">
          Nossa Jornada de Inovação e Crescimento
        </h2>

        <Timeline />
      </div>
    </section>
  );
}
