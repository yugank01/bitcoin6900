import telegram from "../assets/telegram.svg";
import twi from "../assets/x.svg";
import uniswap from "../assets/Uniswap.svg";
import dexscreener from "../assets/Dexscreener.svg";
// import ethscan from "../assets/ethscan.svg";
import dextool from "../assets/Dextool.svg";

export default function BuySection() {
  return (
    <div className="bg-black/70 text-center py-8 px-4">
      {/* Button Row */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button className="px-5 py-2 border-3 border-red-600 text-red-600 md:text-3xl font-extrabold orbitron-black rounded-xl hover:bg-red-600 hover:text-black transition-all duration-200 tracking-wider glow-red">
          BUY NOW ON UNISWAP
        </button>
      </div>

      {/* Icon Row */}
      <div className="flex justify-center gap-6 md:gap-8 flex-wrap text-red-600">
        <a target="_blank" href="https://t.me/Bitcoin6900_portal">
          <img src={telegram} alt="telegram" className="w-16 h-16" />
        </a>
        <a target="_blank" href="https://x.com/Bitcoin_6900">
          <img src={twi} alt="x" className="w-16 h-16" />
        </a>
        <a
          target="_blank"
          href="https://app.uniswap.org/#/swap?&chain=mainnet&use=v2&outputCurrency=0x7c7074a51a316bf0ad19a9ef91aa7fc40d64a626"
        >
          <img src={uniswap} alt="uniswap" className="w-16 h-16" />
        </a>
        <a
          target="_blank"
          href="https://dexscreener.com/ethereum/0x5a0b29e11e7bf46ef31b1f4d5a2aadefbfd83afc"
        >
          <img src={dexscreener} alt="dex screener" className="w-16 h-16" />
        </a>
        <a
          target="_blank"
          href="https://www.dextools.io/app/en/ether/pair-explorer/0x5a0b29e11e7bf46ef31b1f4d5a2aadefbfd83afc"
        >
          <img src={dextool} alt="DexTool" className="w-16 h-16" />
        </a>
      </div>
    </div>
  );
}
