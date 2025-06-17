export default function Home() {
  return (
    <div className="w-full h-screen bg-[#0D0D12]">
      {/* <Navbar />
      <HeroSection /> */}
      <div
        style={{ backgroundSize: "500%" }}
        className="absolute w-full h-full animate-background bg-gradient-to-l from-blue-500 via-pink-300 to-blue-500 "
      />
      <div className="tile grid grid-cols-10 grid-rows-10 w-full h-full gap-1">
        {Array.from({ length: 110 }).map((_, index) => (
          <div key={index} className="w-full h-full"></div>
        ))}
      </div>
    </div>
  );
}
