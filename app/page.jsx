import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#0D0D12]">
      <Navbar />
      <HeroSection />
    </div>
  );
}
