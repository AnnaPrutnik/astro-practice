import { twMerge } from "tailwind-merge";
interface TextButtonProps {
  title: string;
  url: string;
  color?: string;
}

export const TextButton = ({ title, color, url }: TextButtonProps) => {
  return (
    <a
      href={url}
      className={twMerge(
        "text-sm font-heading uppercase font-extrabold tracking-wider text-fuchsia-500",
        color === "lime" && "text-lime-500",
        color === "cyan" && "text-cyan-500",
        color === "violet" && "text-violet-500",
      )}
    >
      {title}
    </a>
  );
};
