import { Container } from "../shared/Container";
import { feedbacks } from "../../assets/data/feedbacks";
import { Image } from "../shared/Image";
import { motion } from "framer-motion";

const feedbackForPage = feedbacks.slice(0, 3);

export const Testimonials = () => {
  const listVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <section className="py-24 bg-zinc-800 overflow-x-clip">
      <Container>
        <motion.ul
          className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-12"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {feedbackForPage.map(
            ({ text, name, role, company, avatar }, index) => (
              <motion.li
                key={index}
                className="md:nth-[n+3]:hidden lg:nth-3:block"
                variants={itemVariants}
              >
                <blockquote className="flex flex-col justify-between h-full">
                  <p className="font-heading text-3xl font-black mb-8 lg:text-4xl">
                    &ldquo;{text}&rdquo;
                  </p>

                  <cite className="block ">
                    <div className="flex gap-3 items-center">
                      <div className="size-16 bg-zinc-700 rounded-full overflow-clip">
                        <Image src={avatar.src} />
                      </div>
                      <div>
                        <p className="text-lg not-italic font-black">{name}</p>
                        <p className="text-zinc-400 not-italic">{`${role} - ${company}`}</p>
                      </div>
                    </div>
                  </cite>
                </blockquote>
              </motion.li>
            ),
          )}
        </motion.ul>
      </Container>
    </section>
  );
};
