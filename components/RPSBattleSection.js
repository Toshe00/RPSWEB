import Image from "next/image";

const RPSBattleSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 gap-8 bg-[#9DCAFE]">
      {/* Left Side - Text */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-4 lg:pl-[200px]">
        <h2 className="md:text-8xl font-bold italic [-webkit-text-stroke:1px_black] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          RPS <br></br><span className="block italic font-black">battle</span>
        </h2>
        <button className="bg-white text-black text-3xl font-bold italic px-12 py-7 border-l-4 border-b-4 border-pink-500 shadow-[6px_6px_0px_0px_black] transition-all duration-300 hover:bg-pink-400 lg:mb-16">
          Take your shot
        </button>
        <p className="text-lg text-gray-800 lg:w-[50%]">
          Yeah, we all know it. But this ain&apos;t recess anymore. It’s a P2E on Alephium.
          Skill, bluff, and an AI ready to slap you. Your move.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="lg:w-1/2 flex justify-center">
        <Image
          src="/images/three-hands.svg"
          alt="Three Robot Hands"
          width={1000}
          height={1000}
          className="w-full lg:w-[1700px] lg:h-[900px]"
        />
      </div>
    </div>
  );
};

export default RPSBattleSection;
