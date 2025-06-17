export default function Home() {
  return (
    <div className="w-full h-screen bg-[#0D0D12]">
      {/* <Navbar />
      <HeroSection /> */}
      <div
        style={{ backgroundSize: "200%" }}
        className="absolute w-full h-full animate-background animated-bg-gradient bg-gradient-to-l from-blue-500 via-pink-300 to-blue-500 "
      />
      <div className="grid grid-cols-10 grid-rows-10 w-full h-full">
        {Array.from({ length: 110 }).map((_, index) => (
          <div key={index} className="tile w-full h-full outline-tile"></div>
        ))}
      </div>
    </div>
  );
}
