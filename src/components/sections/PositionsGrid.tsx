import type { CollectionEntry } from "astro:content";
import { Container } from "../shared/Container";
import { Card } from "../shared/Card";
import {
  getColorFromPositionType,
  getColorFromPositionCategory,
} from "../../utils/postsUtils";
import { Tag } from "../shared/Tag";
import { motion } from "framer-motion";

interface PositionsGridProps {
  lists: CollectionEntry<"positions">[];
}

export const PositionsGrid = ({ lists }: PositionsGridProps) => {
  return (
    <section className="py-30 -mt-5 backdrop-blur-md">
      <Container>
        <ul className="flex flex-col gap-8 max-w-2xl mx-auto">
          {lists.map(
            (
              { data: { title, description, type, remote, category } },
              index,
            ) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeIn",
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <a href="/contact">
                  <Card
                    btnText="apply now"
                    title={title}
                    text={description}
                    btnUrl="/contact"
                    color={getColorFromPositionCategory(category)}
                    className="h-full p-8 md:p-10 max-w-xs md:max-w-full flex flex-col justify-between"
                  >
                    <ul className="flex gap-4">
                      {remote && (
                        <li>
                          <Tag text={"Remote"} />
                        </li>
                      )}
                      <li>
                        <Tag
                          color={getColorFromPositionType(type)}
                          text={type}
                        />
                      </li>
                    </ul>
                  </Card>
                </a>
              </motion.li>
            ),
          )}
        </ul>
      </Container>
    </section>
  );
};
