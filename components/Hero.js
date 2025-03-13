"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-[#9DCAFE] flex flex-col justify-center items-center overflow-hidden">
      {/* Hands */}
      <div className="absolute left-0 top-4 bottom-10 -ml-4 2xl:-ml-24 2xl:-top-10">
        <Image
          src="/images/left-hand.png"
          alt="Left Hand"
          width={600}
          height={600}
          className="w-[300px] h-[300px] object-center 2xl:w-[1400px] 2xl:h-[1400px] object-contain"
        />
      </div>

      <div className="absolute right-0 top-7 bottom-1 -mr-10 2xl:top-2">
        <Image
          src="/images/right-hand.png"
          alt="Right Hand"
          width={600}
          height={600}
          className="w-[300px] h-[300px] object-center 2xl:w-[1400px] 2xl:h-[1400px] 2xl:object-contain"
        />
        
      </div>


      {/* Play Button */}
      <a href="#" className="bg-white text-black text-3xl font-bold italic px-16 py-12 border-l-4 border-b-4 border-pink-500 shadow-[6px_6px_0px_0px_black] transition-all duration-300 hover:bg-pink-400 z-10">
        PLAY
      </a>

      {/* RPS Battle Text */}
      <h1 className="mt-6 text-5xl font-bold italic text-white">RPS battle</h1>

      {/* Bottom Hands */}
      <div className="absolute bottom-20 flex gap-10">
        <Image
          src="/images/hand1.png"
          alt="Hand 1"
          width={120} // Increased size
          height={120}
          className="w-auto h-28 2xl:w-[150px] 2xl:h-[150px]"
        />
        <Image
          src="/images/hand2.png"
          alt="Hand 2"
          width={120} // Increased size
          height={120}
          className="w-auto h-28 2xl:w-[150px] 2xl:h-[150px]"
        />
        <Image
          src="/images/hand3.png"
          alt="Hand 3"
          width={120} // Increased size
          height={120}
          className="w-auto h-28 2xl:w-[150px] 2xl:h-[150px]"
        />
      </div>
    </section>
  );
};

export default Hero;
