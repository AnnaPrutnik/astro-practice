import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "../shared/Container";
import { Image } from "../shared/Image";
import { CutCornerButton } from "../shared/CutCornerButton";

import logo from "../../assets/images/logo.svg";
import { navLinks } from "../../assets/data/navLinks";
import { HexagonIcon } from "../icons/HexagonIcon";
import { twMerge } from "tailwind-merge";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  const onToggleMenu = () => setIsOpen((prev) => !prev);
  return (
    <>
      <header className="sticky top-0 bg-zinc-900/50 backdrop-blur-lg h-24 md:h-28 z-40">
        <Container className="flex justify-between items-center lg:p-9">
          <div className="flex justify-between">
            <Image src={logo.src} alt="logo" priority={"true"} />
          </div>
          <div className="flex gap-4 items-center">
            <CutCornerButton
              title="get started"
              className="hidden md:block"
              url="#"
            />
            <button
              aria-label="burger menu"
              className="relative size-10 cursor-pointer"
              onClick={onToggleMenu}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div
                  className={twMerge(
                    "w-5 h-0.5 bg-zinc-300 transition-transform duration-300",
                    isOpen ? "rotate-45" : " -translate-y-1",
                  )}
                ></div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div
                  className={twMerge(
                    " w-5 h-0.5 bg-zinc-300 transition-transform duration-300",
                    isOpen ? "-rotate-45" : "translate-y-1",
                  )}
                ></div>
              </div>
            </button>
          </div>
        </Container>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed size-full top-0 left-0 z-30 bg-zinc-900"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, ease: "backOut" }}
          >
            <div className="absolute inset-2 rounded-md bg-zinc-800 mt-24 md:mt-28 z-0 overflow-clip">
              <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10">
                <HexagonIcon size={700} />
              </div>
              <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10">
                <HexagonIcon size={1100} />
              </div>
              <div className="h-full flex justify-center items-center">
                <nav>
                  <ul className="flex flex-col items-center gap-12 md:gap-16">
                    {navLinks.map(({ href, title }, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: "linear",
                          delay: 0.25 * index,
                        }}
                      >
                        <a
                          href={href}
                          className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-zinc-500 hover:text-zinc-300 transition duration-300"
                        >
                          {title}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
