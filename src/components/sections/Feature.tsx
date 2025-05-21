import { Container } from "../shared/Container";
import { Slider } from "../slider/Slider";

export const Feature = () => {
  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <Container>
        <h2 className="font-black font-heading text-4xl text-center md:text-5xl lg:text-6xl">
          Discover the future of blockchain with Blockforge
        </h2>
        <Slider />
      </Container>
    </section>
  );
};
