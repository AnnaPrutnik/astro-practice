import { Container } from "../shared/Container";

import type { CollectionEntry } from "astro:content";

import { CutCornerButton } from "../shared/CutCornerButton";

import { BlogList } from "../shared/BlogList";

interface LatestPostsProps {
  latestPosts: CollectionEntry<"blog">[];
}

export const LatestPosts = ({ latestPosts }: LatestPostsProps) => {
  return (
    <section className="py-60">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-black text-4xl text-center md:text-5xl">
            Your portal to everything blockchain
          </h2>
          <p className="text-xl text-zinc-400 text-center mt-8">
            Keep up with the newest trends, updates, and insights in the
            blockchain world, update weekly.
          </p>
        </div>
        <BlogList list={latestPosts} />
        <div className="flex justify-center mt-48 ">
          <CutCornerButton title="read the blog" url="/blog" />
        </div>
      </Container>
    </section>
  );
};
