import { HeroContent } from "../shared/HeroContent";
import { InteriorHero } from "../shared/InteriorHero";

import type { CollectionEntry } from "astro:content";

interface HeroBlogProps {
  latestPost: CollectionEntry<"blog">;
}

export const HeroBlog = ({ latestPost }: HeroBlogProps) => {
  const {
    data: { title, description },
    slug,
  } = latestPost;
  return (
    <HeroContent
      topText="Latest Post"
      title={title}
      text={description}
      btnTitle="read more"
      btnUrl={`/blog/${slug}`}
      className="relative"
    >
      <InteriorHero />
    </HeroContent>
  );
};
