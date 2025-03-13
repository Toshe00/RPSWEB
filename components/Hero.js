"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-[#9DCAFE] flex flex-col justify-center items-center overflow-hidden">
      {/* Hands */}
      <div className="absolute left-0 top-0 md:top-1/2 transform md:-translate-y-1/2">
        <Image
          src="/images/left-hand2.png"
          alt="Left Hand"
          width={1192}
          height={1080}
          className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] xl:w-[1000px] xl:h-[1000px] object-cover"
        />
      </div>

      <div className="absolute right-0 top-0 md:top-1/2 transform md:-translate-y-1/2">
        <Image
          src="/images/right-hand2.png"
          alt="Right Hand"
          width={940}
          height={998}
          className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] xl:w-[850px] xl:h-[850px] object-cover"
        />
      </div>

      {/* Play Button */}
      <a
        href="#"
        className="bg-white text-black text-xl md:text-3xl font-bold italic px-12 py-6 md:px-16 md:py-8 border-l-4 border-b-4 border-pink-500 shadow-[4px_4px_0px_0px_black] transition-all duration-300 hover:bg-pink-400 z-10 mt-12"
      >
        PLAY
      </a>

      {/* RPS Battle Text */}
      <h1 className="mt-4 text-3xl md:text-5xl font-bold italic text-white drop-shadow-md">
        RPS battle
      </h1>

      {/* Bottom Hands */}
      <div className="absolute bottom-8 md:bottom-16 flex gap-4 md:gap-8">
        <Image
          src="/images/hand1.png"
          alt="Hand 1"
          width={200}
          height={200}
          className="w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 object-contain hover:scale-110 transition-all duration-300"
        />
        <Image
          src="/images/hand2.png"
          alt="Hand 2"
          width={200}
          height={200}
          className="w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 object-contain hover:scale-110 transition-all duration-300"
        />
        <Image
          src="/images/hand3.png"
          alt="Hand 3"
          width={200}
          height={200}
          className="w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 object-contain hover:scale-110 transition-all duration-300"
        />
      </div>
    </section>
  );
};

export default Hero;
