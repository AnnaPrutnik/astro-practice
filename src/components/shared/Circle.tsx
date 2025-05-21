import type { PropsWithChildren } from "react";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface CircleProps {
  className?: string;
  animate?: boolean;
}

export const Circle = ({
  className = "",
  children,
  animate,
}: PropsWithChildren<CircleProps>) => {
  return (
    <div
      className={twMerge(
        "bg-zinc-900 size-[240px] inline-flex justify-center items-center rounded-full  relative outline-[6px] -outline-offset-[6px] outline-fuchsia-500/15 ",
        className,
      )}
    >
      <motion.div
        animate={{
          rotate: animate ? 360 : 0,
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
        className={twMerge(
          "absolute inset-0 rounded-full ",
          animate &&
            "border-[6px] border-transparent blur-lg border-t-fuchsia-500/70",
        )}
      ></motion.div>
      {children}
    </div>
  );
};
