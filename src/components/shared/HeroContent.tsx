import type { PropsWithChildren } from "react";
import { CutCornerButton } from "./CutCornerButton";
import { Container } from "./Container";
import { twMerge } from "tailwind-merge";

interface HeroContentProps {
  topText: string;
  title: string;
  text: string;
  btnTitle: string;
  btnUrl?: string;
  className?: string;
}

export const HeroContent = ({
  title,
  text,
  topText,
  btnTitle,
  className = "",
  btnUrl = "#",
  children,
}: PropsWithChildren<HeroContentProps>) => {
  return (
    <section className={twMerge("py-24 md:py-52 overflow-x-clip ", className)}>
      <Container>
        <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
          {topText}
        </p>

        <h1 className="font-heading font-black text-5xl text-center mt-4 max-w-2xl mx-auto md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="text-center text-xl mt-6 text-zinc-400 md:text-2xl max-w-xl md:mx-auto">
          {text}
        </p>
        <div className="flex justify-center mt-10 ">
          <CutCornerButton title={btnTitle} url={btnUrl} />
        </div>
        {children}
      </Container>
    </section>
  );
};
