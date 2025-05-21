import { twMerge } from "tailwind-merge";

interface CutCornerButtonProps {
  title: string;
  url: string;
  className?: string;
}

export const CutCornerButton = ({
  title,
  url,
  className = "",
}: CutCornerButtonProps) => {
  return (
    <a
      href={url}
      className={twMerge(
        "relative cursor-pointer isolate px-4 py-2 font-extrabold uppercase font-heading text-small tracking-wide before:absolute after:absolute before:inset-0 before:z-[-2] before:bg-fuchsia-500/80 after:inset-0 after:bg-button after:z-[-1] cut-corner-btn text-center",
        className,
      )}
    >
      <span className="leading-6">{title}</span>
    </a>
  );
};
