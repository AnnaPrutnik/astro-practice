import type { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  priority?: string;
}

export const Image = ({
  className = "",
  alt,
  src,

  ...props
}: ImageProps) => {
  return <img src={src} alt={alt} className={className} {...props} />;
};
