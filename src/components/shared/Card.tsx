import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { TextButton } from "./TextButton";
import { ArrowButton } from "./ArrowButton";

interface CardProps {
  color?: string;
  className?: string;
  btnText: string;
  title: string;
  text: string;
  btnUrl: string;
}

export const Card = ({
  color,
  className,
  btnText,
  btnUrl,
  text,
  title,
  children,
}: PropsWithChildren<CardProps>) => {
  return (
    <div className={twMerge("relative group ", className)}>
      <div
        className={twMerge(
          "absolute size-16 rounded-xl  top-1.5 right-1.5 -z-10 blur-lg bg-fuchsia-500 opacity-0 group-hover:opacity-100 transition duration-300",
          color === "lime" && "bg-lime-500",
          color === "cyan" && "bg-cyan-500",
          color === "violet" && "bg-violet-500",
        )}
      ></div>
      <div
        className={twMerge(
          "absolute size-16 rounded-xl  top-1.5 right-1.5 -z-10  transition duration-300 bg-fuchsia-500 group-hover:bg-fuchsia-400",
          color === "lime" && "bg-lime-500 group-hover:bg-lime-400",
          color === "cyan" && "bg-cyan-500 group-hover:bg-cyan-400",
          color === "violet" && "bg-violet-500 group-hover:bg-violet-400",
        )}
      ></div>
      <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,_transparent,_transparent_40px,black_40px)]"></div>
      {children}
      <h3 className="font-heading font-black text-3xl">{title}</h3>
      <p className="text-l text-zinc-400 mt-4">{text}</p>
      <div className="flex justify-between mt-12">
        <TextButton color={color} title={btnText} url={btnUrl} />
        <ArrowButton />
      </div>
    </div>
  );
};
