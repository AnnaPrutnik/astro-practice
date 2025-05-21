import { Image } from "../shared/Image";

import { Card } from "../shared/Card";

interface SliderCardProps {
  title: string;
  description: string;
  imageSrc: ImageMetadata;
  color?: string;
}

export const SliderCard = ({
  description,
  imageSrc,
  title,
  color,
}: SliderCardProps) => {
  return (
    <Card
      color={color}
      className="p-8 md:p-10 max-w-xs md:max-w-md"
      btnText="learn more"
      title={title}
      text={description}
      btnUrl="#"
    >
      <div className="flex justify-center -mt-28 mb-12">
        <div className="inline-flex relative">
          <Image
            src={imageSrc.src}
            alt={title}
            className="size-40 group-hover:-translate-y-6 transition duration-300"
          />

          <div
            className="absolute h-4 w-full top-[calc(100%_+_16px)] bg-zinc-950/70 rounded-[100%] [mask-image:radial-gradient(closest-side,_black,_transparent)]
              group-hover:bg-zinc-950/30 transition duration-300"
          ></div>
        </div>
      </div>
    </Card>
  );
};
