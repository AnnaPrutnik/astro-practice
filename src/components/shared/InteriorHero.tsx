import { HexagonIcon } from "../icons/HexagonIcon";

export const InteriorHero = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1">
        <HexagonIcon size={800} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1">
        <HexagonIcon size={1200} reverse duration={30} />
      </div>
    </>
  );
};
