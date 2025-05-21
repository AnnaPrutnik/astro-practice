import { motion, useScroll, useTransform } from "framer-motion";
import { HeroContent } from "../shared/HeroContent";

import { HexagonIcon } from "../icons/HexagonIcon";
import { Image } from "../shared/Image";
import { Circle } from "../shared/Circle";

import icosahedron from "../../assets/images/icosahedron.png";
import cube from "../../assets/images/cube.png";
import cubeid from "../../assets/images/cuboid.png";
import torus from "../../assets/images/torus.png";
import { useRef } from "react";

export const Hero = () => {
  const hedronRef = useRef(null);
  const cubeRef = useRef(null);
  const toresRef = useRef(null);
  const cuboidRef = useRef(null);

  const { scrollYProgress: hedronYProgress } = useScroll({
    target: hedronRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: cubeYProgress } = useScroll({
    target: cubeRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: toresYProgress } = useScroll({
    target: cubeRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: cuboidYProgress } = useScroll({
    target: cuboidRef,
    offset: ["start end", "end start"],
  });

  const hedronRotate = useTransform(hedronYProgress, [0, 1], [30, -45]);
  const cubeRotate = useTransform(cubeYProgress, [0, 1], [800, -45]);
  const toresRotate = useTransform(toresYProgress, [0, 1], [-540, 700]);
  const cuboidRotate = useTransform(cuboidYProgress, [0, 1], [20, -20]);
  return (
    <HeroContent
      topText="Introducing Blockforge"
      title="The Future of Blockchain is Here"
      text="Blockforge is pioneering smart contract integrity with cutting-edge data solutions."
      btnTitle="get started"
    >
      <div className="flex justify-center mt-24 -z-1">
        <div className="inline-flex relative z-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <HexagonIcon size={1100} reverse duration={40} />
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <HexagonIcon size={1800} duration={20} />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute left-[200px] -top-[900px]">
              <motion.div style={{ rotate: cubeRotate }}>
                <Image
                  src={cube.src}
                  alt="cube 3D image"
                  className="size-[140px]"
                />
              </motion.div>
            </Circle>
            <Circle className="absolute left-[200px] top-[270px]" animate>
              <motion.div ref={cuboidRef} style={{ rotate: cuboidRotate }}>
                <Image
                  src={cubeid.src}
                  alt="cubeid 3D image"
                  className="size-[140px]"
                />
              </motion.div>
            </Circle>
            <Circle className="absolute -left-[600px] -top-[80px]">
              <motion.img
                src={torus.src}
                alt="torus 3D image"
                className="size-[140px]"
                style={{ rotate: toresRotate }}
                ref={toresRef}
              />
            </Circle>
          </div>

          <motion.div
            className="inline-flex"
            ref={hedronRef}
            style={{
              rotate: hedronRotate,
            }}
          >
            <img
              src={icosahedron.src}
              alt="hero decoration"
              aria-hidden
              className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hue-rotate-[240deg]"
            />
            <img
              src={icosahedron.src}
              alt="icosahedron 3D image"
              className="w-[500px]"
            />
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center mt-40 md:mt-80 gap-4">
        <div className="h-10 w-5 outline-[6px] outline-fuchsia-500/10 inline-flex rounded-full pt-2 justify-center">
          <motion.div
            initial={{
              y: 0,
              opacity: 1,
            }}
            animate={{
              y: 12,
              opacity: 0.2,
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 1,
              repeatType: "loop",
            }}
            className="h-3 w-1 bg-fuchsia-500 rounded-full"
          ></motion.div>
        </div>
        <p className="uppercase text-zinc-500 font-extrabold tracking-wider">
          Scroll to learn more
        </p>
      </div>
    </HeroContent>
  );
};
