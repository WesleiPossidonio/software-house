import { motion } from "framer-motion";

interface AnimatedTitleProps {
  text: string;
}

export const AnimatedTitle = ({ text }: AnimatedTitleProps) => {
  const words = text.split(" ");

  return (
    <h1 className="text-2xl md:text-4xl lg:text-6xl text-white text-center leading-tight">
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-3"
          initial={{
            y: 80,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 1,
            delay: index * 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
};
