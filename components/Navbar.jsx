import { ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full py-4 px-5 border-b-2 border-[#131519]">
      <div className="flex mx-auto justify-between items-center max-w-11/12 h-full">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.svg"
            width={40}
            height={40}
            alt="label-logo"
          />
          <h3 className="text-xl text-white font-mono">Lemni</h3>
        </div>
        {["Docs", "Blog", "Company", "Community", "Pricing"].map(
          (item, index) => (
            <a
              className="font-mono text-lg text-[#636475] hover:text-[#7d7e8e] cursor-pointer"
              href="/"
            >
              {item}
            </a>
          )
        )}
        <div className="flex items-center gap-3 text-white hover:text-[#7d7e8e]">
          <p className="font-mono text-lg cursor-pointer">Try For Free</p>
          <div className="bg-[#ccd1e9] p-1 rounded-full cursor-pointer">
            <ArrowRight color="#000" />
          </div>
        </div>
      </div>
    </div>
  );
}
