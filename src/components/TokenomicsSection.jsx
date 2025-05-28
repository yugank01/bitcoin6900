import stack from "../assets/video3.mp4";

const info = [
  {
    title: "Buy tax",
    description: "0%",
  },
  {
    title: "Sell tax",
    description: "0%",
  },
  {
    title: "contract safety",
    description: "RENOUNCED",
  },
  {
    title: "Liquidity Pool",
    description: "BURNED IN CHAOS",
  },
  {
    title: "Contract address",
    description: `0x7c7074a51a316bf0ad19a9ef91aa7fc40d64a626`,
  },
];

export default function TokenomicsSection() {
  return (
    <section className="bg-black/40 text-white flex items-center justify-center px-4 md:px-12 pt-16 pb-32">
      {/* Main content */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row justify-between gap-12">
        {/* Left: Tokenomics text + stacked images */}
        <div className="w-full flex flex-col items-start">
          <h1 className="text-5xl sm:text-8xl lg:text-[10rem] orbitron-black glow-red font-extrabold text-red-600 text-center uppercase leading-none tracking-tight mb-6">
            Tokenomics
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full">
            <div className="relative w-full md:w-1/2">
              <video
                src={stack}
                autoPlay
                loop
                muted
                playsInline
                className="w-[90%] md:w-[500px] max-w-full rounded-lg shadow-5xl brightness-110 contrast-125 saturate-150"
              />
            </div>

            <div className="w-full md:w-1/2 flex-1 space-y-6 text-red-600 font-bold">
              {info.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 border-t border-red-600 pt-4"
                >
                  <div className="sm:w-[25%] uppercase mb-2 sm:mb-0 glow-red">
                    {item.title}
                  </div>
                  <div className="sm:w-[75%] glow-red text-xl sm:text-2xl break-words">
                    {item.description}
                  </div>
                </div>
              ))}
              <div className="border-t border-red-600 mt-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
