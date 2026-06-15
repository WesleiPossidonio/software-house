import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { SatelliteDish, Plug, Wifi } from "lucide-react";

const steps = [
  {
    title: "Order Your Kit",
    description:
      "Get your NovaLink dish and router shipped directly to your door — no technician needed.",
    icon: SatelliteDish,
  },
  {
    title: "Set It Up",
    description:
      "Plug it in, power it up, and point it at the sky. The smart dish aligns itself automatically.",
    icon: Plug,
  },
  {
    title: "Connect Instantly",
    description:
      "Stream, work, game, and browse with speeds that rival fiber — wherever you are.",
    icon: Wifi,
  },
  {
    title: "Connect Instantly",
    description:
      "Stream, work, game, and browse with speeds that rival fiber — wherever you are.",
    icon: Wifi,
  },
];

export const Timeline = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const height = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section ref={ref} className="relative   text-white overflow-hidden">
      {/* linha base */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-neutral-500 -translate-x-1/2" />

      {/* linha animada */}
      <motion.div
        style={{ scaleY: height }}
        className="origin-top absolute left-1/2 top-0 w-[2px] h-full bg-neutral-50 -translate-x-1/2"
      />

      <div className="max-w-6xl mx-auto md:px-6 space-y-28">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className="grid grid-cols-2 items-center gap-12 relative"
            >
              {/* TEXT */}
              <motion.div
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`
                    ${isLeft ? "text-right md:pr-12" : "order-2 md:pl-12"}
                     text-left
                    `}
              >
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm max-w-md mx-auto md:mx-0">
                  {step.description}
                </p>
              </motion.div>

              {/* ICON */}
              <div
                className={`flex ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                } justify-center`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* ponto */}
                  <span className="absolute left-1/2 top-1/2 w-3 h-3 bg-base-blue rounded-full -translate-x-1/2 -translate-y-1/2 z-10" />

                  {/* ícone */}
                  <div className="bg-white/5 border border-white/30 rounded-xl p-6 shadow-lg backdrop-blur-md">
                    <Icon className="text-base-blue w-6 h-6" />
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
