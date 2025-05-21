import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import type { CollectionEntry } from "astro:content";
import { Card } from "./Card";
import { Tag } from "./Tag";

import { getPostColorFromCategory } from "../../utils/postsUtils";

interface BlogListProps {
  list: CollectionEntry<"blog">[];
}

export const BlogList = ({ list }: BlogListProps) => {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start end", "end end"],
  });

  const yShift = useTransform(scrollYProgress, [0, 1], [0, -80]);
  return (
    <ul className="mt-16 gap-8 grid grid-cols-1 md:grid-cols-2" ref={listRef}>
      {list.map(({ data: { title, description, category }, slug }, index) => {
        const cardColor = getPostColorFromCategory(category);
        return (
          <motion.li
            key={index}
            className="md:even:mt-20 md:even:-mb-20 h-full"
            style={{ y: index % 2 === 1 ? yShift : 0 }}
          >
            <a href={`/blog/${slug}`}>
              <Card
                className="h-full p-8 md:p-10 max-w-xs md:max-w-full flex flex-col justify-between "
                btnText="read more"
                btnUrl={`/blog/${slug}`}
                title={title}
                text={description}
                color={cardColor}
              >
                <div>
                  <Tag color={cardColor} text={category} />
                </div>
              </Card>
            </a>
          </motion.li>
        );
      })}
    </ul>
  );
};
