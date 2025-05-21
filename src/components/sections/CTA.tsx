import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Container } from "../shared/Container";
import { CutCornerButton } from "../shared/CutCornerButton";
import { HexagonIcon } from "../icons/HexagonIcon";
import { Circle } from "../shared/Circle";
import { Image } from "../shared/Image";

import cubeid from "../../assets/images/cuboid.png";
import cylinder from "../../assets/images/cylinder.png";

export const CTA = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cubeRotate = useTransform(scrollYProgress, [0, 1], [45, -45]);
  const cylinderRotate = useTransform(scrollYProgress, [0, 1], [-45, 45]);

  return (
    <section className="py-56 overflow-clip" ref={sectionRef}>
      <Container>
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <HexagonIcon size={700} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <HexagonIcon size={1000} duration={15} reverse />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute left-0 -top-[400px]">
              <motion.div style={{ rotate: cubeRotate }}>
                <Image
                  src={cubeid.src}
                  alt="cubeid 3D image"
                  className="size-[140px]"
                />
              </motion.div>
            </Circle>
            <Circle className="absolute -left-[600px] -top-[70px]" animate>
              <motion.img
                src={cylinder.src}
                alt="cylinder 3D image"
                className="size-[140px]"
                style={{ rotate: cylinderRotate }}
              />
            </Circle>
          </div>
          <h2 className="font-heading font-black text-4xl text-center whitespace-pre-wrap md:text-5xl lg:text-6xl">
            {`Ready to \nget started?`}
          </h2>
          <p className="text-xl text-zinc-400 text-center mt-8 md:whitespace-pre-wrap">
            {`Start building using blockchain \ntechnology, with Blockgorge`}
          </p>
          <div className="flex justify-center mt-12">
            <CutCornerButton title="get started" url="#" />
          </div>
        </div>
      </Container>
    </section>
  );
};
