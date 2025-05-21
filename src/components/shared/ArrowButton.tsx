import { twMerge } from "tailwind-merge";

interface ArrowButtonProps {
  className?: string;
}
export const ArrowButton = ({ className }: ArrowButtonProps) => {
  return (
    <button
      className={twMerge(
        "text-zinc-500 group-hover:text-zinc-300 transition duration-300 -translate-x-2 group-hover:translate-x-0",
        className,
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        ></path>
      </svg>
    </button>
  );
};
