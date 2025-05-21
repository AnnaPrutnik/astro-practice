import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  className?: string;
}

export const Container = ({
  children,
  className = "",
}: PropsWithChildren<ContainerProps>) => {
  return (
    <div
      className={twMerge(
        "min-w-[320px] mx-auto p-6 md:p-8 lg:p-[88px]",
        className,
      )}
    >
      {children}
    </div>
  );
};
