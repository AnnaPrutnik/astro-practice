import { useRef } from "react";
import { Container } from "../shared/Container";
import { featuresGridTexts } from "../../assets/data/featuresGridTexts";
import { CutCornerButton } from "../shared/CutCornerButton";
import { TextButton } from "../shared/TextButton";
import { Image } from "../shared/Image";
import { motion, useScroll, useTransform } from "framer-motion";

import torusImage from "../../assets/images/torus-knot.png";
import hemisphereImage from "../../assets/images/hemisphere.png";
import coneImage from "../../assets/images/cone.png";

export const FeatureGrid = () => {
  const torusRef = useRef(null);
  const firstHemisphereRef = useRef(null);
  const coneRef = useRef(null);
  const secondHemisphereRef = useRef(null);

  const { scrollYProgress: torusYProgress } = useScroll({
    target: torusRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: firstHemisphereYProgress } = useScroll({
    target: firstHemisphereRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: coneYProgress } = useScroll({
    target: coneRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: secondHemisphereYProgress } = useScroll({
    target: secondHemisphereRef,
    offset: ["start end", "end start"],
  });

  const torusTranslate = useTransform(torusYProgress, [0, 1], [100, -100]);
  const torusRotate = useTransform(torusYProgress, [0, 1], [30, -30]);

  const firstHemisphereTranslate = useTransform(
    firstHemisphereYProgress,
    [0, 1],
    [50, -50],
  );
  const firstHemisphereRotate = useTransform(
    firstHemisphereYProgress,
    [0, 1],
    [10, -50],
  );

  const coneTranslate = useTransform(coneYProgress, [0, 1], [100, -100]);
  const coneRotate = useTransform(coneYProgress, [0, 1], [12, 45]);

  const secondHemisphereTranslate = useTransform(
    secondHemisphereYProgress,
    [0, 1],
    [50, -50],
  );
  const secondHemisphereRotate = useTransform(
    secondHemisphereYProgress,
    [0, 1],
    [-20, 20],
  );

  return (
    <section className="py-24 overflow-x-clip">
      <Container>
        <div className="flex flex-col gap-56 md:gap-48 lg:gap-80">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <h2 className="font-black font-heading text-4xl md:text-5xl lg:text-6xl">
                Empowering the future of blockchain
              </h2>
              <p className="text-lg lg:text-2xl text-zinc-400 mt-8">
                Blockforge provides robust and secure infrastructure to support
                the next generation of decentralized applications
              </p>
              <ul className="flex flex-col gap-8 mt-12">
                {featuresGridTexts.map((text, index) => (
                  <li className="flex items-center gap-3" key={index}>
                    <span className="inline-flex shrink-0 items-center justify-center size-8 rounded-full outline-4 -outline-offset-4 outline-fuchsia-500/10">
                      <span className="size-1.5 bg-fuchsia-500 rounded-full" />
                    </span>
                    <span className="text-xl font-bold">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-8 mt-12">
                <CutCornerButton title="get started" url="#" />
                <TextButton title="Learn more" />
              </div>
            </div>
            <div>
              <div className="hidden md:inline-flex relative">
                <motion.div
                  ref={torusRef}
                  style={{
                    rotate: torusRotate,
                    y: torusTranslate,
                  }}
                >
                  <Image
                    src={torusImage.src}
                    alt="torus knot 3d image"
                    className="size-96 h-auto max-w-none"
                  />
                </motion.div>

                <motion.div
                  ref={firstHemisphereRef}
                  className="size-96 absolute top-3/4 -z-1 scale-x-[-1] "
                  style={{
                    rotate: firstHemisphereRotate,
                    y: firstHemisphereTranslate,
                  }}
                >
                  <Image src={hemisphereImage.src} alt="hemisphere 3d image" />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="hidden md:block relative">
              <div className="inline-flex absolute right-0">
                <motion.div
                  ref={coneRef}
                  style={{
                    rotate: coneRotate,
                    y: coneTranslate,
                  }}
                >
                  <Image
                    src={coneImage.src}
                    alt="cone 3d image "
                    className="size-96 max-w-none"
                  />
                </motion.div>
                <motion.div
                  className="w-96 absolute top-3/4 -z-1 right-0"
                  ref={secondHemisphereRef}
                  style={{
                    rotate: secondHemisphereRotate,
                    y: secondHemisphereTranslate,
                  }}
                >
                  <Image src={hemisphereImage.src} alt="hemisphere 3d image" />
                </motion.div>
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="font-black font-heading text-4xl md:text-5xl lg:text-6xl text-pretty">
                Blockforge leads the way.
              </h2>

              <p className="text-lg lg:text-2xl text-zinc-400 mt-6">
                Blockforge is dedicated to supporting the evolution of Web3
                applications by delivering the necessary infrastructure and
                security to Web3
              </p>
              <p className="text-lg lg:text-2xl text-zinc-400 mt-6">
                Blockforge champions Web3 for everyone. As a decentralized
                blockchain scaling platform, Blockforge enables developers to
                create scalable, user-friendly dApps with low transaction costs,
                all while ensuring robust security.
              </p>

              <div className="flex gap-8 mt-12">
                <CutCornerButton title="get started" url="#" />
                <TextButton title="Learn more" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
