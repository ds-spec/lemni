import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full h-full relative">
      <video key="video" src="/videos/acme.mp4" muted loop autoPlay />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <div className="flex flex-col items-center gap-14 w-full">
          <h1 className="text-8xl text-center font-inter">
            AI agents for all your <br /> customer interactions
          </h1>
          <p className="text-2xl text-center font-inter text-gray-400">
            With Lemni, you can set up custom Ai agents in minutes, so every
            <br />
            customer interaction stays personal—no matter how big you grow.
          </p>
          <div className="relative flex items-center gap-4">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full animated-gradient"></div>
              <button className="flex items-center gap-2 relative px-5 py-3 bg-[#000000e6] rounded-full shadow-2xl shadow-red-400 cursor-pointer transition-all">
                <p className="font-inter font-semibold text-xl">Try for free</p>
                <ArrowRight />
              </button>
            </div>
            <button className="flex items-center gap-2 px-5 py-3 bg-[#1c1c2666] rounded-full cursor-pointer hover:bg-[#37373d66] shadow-button">
              <p className="font-inter font-semibold text-xl">Watch Video</p>
              <Play color="#fff" fill="#fff" size={"1.2em"} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
