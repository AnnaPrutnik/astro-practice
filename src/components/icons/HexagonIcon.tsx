import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

interface HexagonIconProps {
  className?: string;
  size?: number;
  reverse?: boolean;
  duration?: number;
}

export const HexagonIcon = ({
  className = "",
  size = 800,
  reverse = false,
  duration = 10,
}: HexagonIconProps) => {
  const pathRef = useRef<SVGPathElement>(null);
  const [totalPathLength, setTotalPathLength] = useState<number>(0);

  useLayoutEffect(() => {
    const pathLength = pathRef.current?.getTotalLength();
    if (pathLength) {
      const scaledPathLength = (pathLength * size) / 82;
      setTotalPathLength(scaledPathLength);
    }
  }, []);
  return (
    <div className="relative">
      <svg
        width="82"
        height="72"
        viewBox="0 0 82 72"
        fill="none"
        strokeWidth="6"
        xmlns="http://www.w3.org/2000/svg"
        className={twMerge("text-fuchsia-500/10 -rotate-6", className)}
        style={{
          width: size,
          height: size,
        }}
      >
        <path
          d="M3.44337 38.5C2.55021 36.953 2.55021 35.047 3.44338 33.5L20.0566 4.72501C20.9498 3.178 22.6004 2.22501 24.3868 2.22501H57.6132C59.3996 2.22501 61.0502 3.178 61.9434 4.72501L78.5566 33.5C79.4498 35.047 79.4498 36.953 78.5566 38.5L61.9434 67.275C61.0502 68.822 59.3996 69.775 57.6132 69.775H24.3867C22.6004 69.775 20.9498 68.822 20.0566 67.275L3.44337 38.5Z"
          vectorEffect="non-scaling-stroke"
          stroke="currentColor"
          ref={pathRef}
        ></path>
      </svg>
      {totalPathLength > 0 && (
        <motion.svg
          width="82"
          height="72"
          viewBox="0 0 82 72"
          fill="none"
          strokeWidth="6"
          xmlns="http://www.w3.org/2000/svg"
          className={twMerge(
            "text-fuchsia-500/30 blur-md -rotate-6 absolute inset-0",
            className,
          )}
          initial={{
            strokeDashoffset: 0,
          }}
          animate={{
            strokeDashoffset: reverse ? totalPathLength : totalPathLength * -1,
          }}
          transition={{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            strokeDasharray: `500 ${totalPathLength - 500}`,

            width: size,
            height: size,
          }}
        >
          <path
            d="M3.44337 38.5C2.55021 36.953 2.55021 35.047 3.44338 33.5L20.0566 4.72501C20.9498 3.178 22.6004 2.22501 24.3868 2.22501H57.6132C59.3996 2.22501 61.0502 3.178 61.9434 4.72501L78.5566 33.5C79.4498 35.047 79.4498 36.953 78.5566 38.5L61.9434 67.275C61.0502 68.822 59.3996 69.775 57.6132 69.775H24.3867C22.6004 69.775 20.9498 68.822 20.0566 67.275L3.44337 38.5Z"
            vectorEffect="non-scaling-stroke"
            stroke="currentColor"
          ></path>
        </motion.svg>
      )}
    </div>
  );
};
