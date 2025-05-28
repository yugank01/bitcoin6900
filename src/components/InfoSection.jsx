import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";
import btc from "../assets/img1.png";

const info = [
  {
    title: "S69",
    description:
      "Satoshi Reborn as a Cyborg. Back from the future to finish the mission.",
  },
  {
    title: "a signal",
    description: "No Whitepaper. Just Prophecy. Not a product",
  },
];

const InfoSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="w-full bg-black/70 px-4 py-16 text-red-600 orbitron-black font-bold text-sm sm:text-base tracking-wide"
    >
      <div className="mx-auto flex flex-col-reverse lg:flex-row gap-8 lg:gap-0">
        {/* LEFT: TEXT */}
        <div className="flex-1 space-y-6">
          {info.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 border-t border-red-600 pt-4"
            >
              <div className="sm:w-[25%] orbitron-gradient uppercase mb-2 sm:mb-0 glow-red">
                {item.title}
              </div>
              <div className="sm:w-[75%] text-white whitespace-pre-line glow-red text-xl sm:text-2xl">
                {inView ? (
                  <Typewriter
                    words={[item.description]}
                    loop={1}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={0}
                    delaySpeed={1000}
                  />
                ) : (
                  <span className="opacity-0">{item.description}</span>
                )}
              </div>
            </div>
          ))}
          <div className="border-t border-red-600 mt-4" />
        </div>

        {/* RIGHT: IMAGE */}
        <div className="w-full lg:w-[300px] xl:w-[500px] shrink-0 flex justify-center items-center">
          <img
            src={btc}
            alt="btc 6900"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
