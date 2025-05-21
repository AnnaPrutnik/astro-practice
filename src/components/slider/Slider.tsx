import { useEffect, useState } from "react";
import { featuresCards } from "../../assets/data/featureCards";
import { SliderCard } from "./SliderCard";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const Slider = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timeout = setTimeout(() => {
      setSelectedCard((prev) =>
        prev === featuresCards.length - 1 ? 0 : prev + 1,
      );
    }, 2000);
    return () => clearTimeout(timeout);
  }, [selectedCard, isHovered]);
  return (
    <>
      <div className="mt-36 flex lg:mt-48">
        <ul className="flex flex-none gap-8">
          {featuresCards.map((props, index) => (
            <motion.li
              style={{
                x: `calc((-100% - 2rem) * ${selectedCard})`,
              }}
              key={index}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="transition-all duration-500 ease-in-out"
            >
              <SliderCard {...props} />
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-10">
        <ul className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
          {featuresCards.map((_, index) => (
            <li
              className={twMerge(
                "size-2.5  rounded-full cursor-pointer",
                index === selectedCard ? "bg-zinc-300" : "bg-zinc-500",
              )}
              key={index}
              onClick={() => setSelectedCard(index)}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
