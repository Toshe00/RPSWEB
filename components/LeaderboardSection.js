import Image from "next/image";

const LeaderboardSection = () => {
  const topPlayers = [
    { name: "Player 1", points: 1568, img: "https://picsum.photos/80/80" },
    { name: "Player 2", points: 1436, img: "https://picsum.photos/80/80?random=2" },
    { name: "Player 3", points: 1341, img: "https://picsum.photos/80/80?random=3" },
  ];

  const otherPlayers = [
    { rank: 4, points: 1218, img: "https://picsum.photos/40/40?random=4" },
    { rank: 5, points: 1118, img: "https://picsum.photos/40/40?random=5" },
    { rank: 6, points: 1118, img: "https://picsum.photos/40/40?random=6" },
  ];

  return (
    <div className="relative flex flex-col items-center text-center px-6 py-12 bg-[#9DCAFE] lg:pb-48">
      {/* Left Hand */}
      <Image
        src="/images/bottom-left-image.svg"
        alt="Left Hand"
        width={200}
        height={200}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden md:block xl:w-[600px] 2xl:w-[500px] lg:w-[300px]"
      />

      {/* Right Hand */}
      <Image
        src="/images/bottom-right-image.svg"
        alt="Right Hand"
        width={200}
        height={200}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:block xl:w-[600px] 2xl:w-[500px] lg:w-[300px]"
      />

      {/* Title & Description */}
      <h2 className="md:text-8xl font-bold italic [-webkit-text-stroke:1px_black] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Top Players</h2>
      <p className="text-lg text-gray-800 max-w-2xl my-4">
        Here, it&apos;s not just a leaderboard, it&apos;s the battlefield for real players.
        The smartest, the fastest, the ones who know that Rock Paper Scissors is more
        than luck. It’s bluff, instinct, nerves of steel, and a shot at stacking Alephium.
      </p>

      {/* Leaderboard Layout */}
      <div className="relative w-full flex justify-center items-end mt-12">
        {/* First Place (Center) */}
        <div className="flex flex-col items-center absolute top-0">
          <Image
            src={topPlayers[0].img}
            alt={topPlayers[0].name}
            width={240} // Doubled size
            height={240}
            className="rounded-full border-4 border-black w-[120px] h-[120px] lg:w-[200px] lg:h-[200px]"
          />
          <span className="lg:text-xl font-bold mt-4">{topPlayers[0].name}</span>
          <span className="bg-white border-4 px-4 py-2 text-base  text-black lg:px-6 lg:py-3 lg:text-lg font-bold mt-3 relative border-l-4 border-b-4 border-pink-500 shadow-[6px_6px_0px_0px_black] border-t-0 border-r-0">
            {topPlayers[0].points} POINTS
          </span>
        </div>

        {/* Second & Third Place (Spaced Out) */}
        <div className="flex justify-between w-full max-w-2xl mt-60 lg:mt-80">
          {[1, 2].map((index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={topPlayers[index].img}
                alt={topPlayers[index].name}
                width={200} // Doubled size
                height={200}
                className="rounded-full border-4 border-black w-[120px] h-[120px] lg:w-[200px] lg:h-[200px]"
              />
              <span className="lg:text-xl font-bold mt-4">{topPlayers[index].name}</span>
              <span className="bg-white border-4 px-4 py-2 text-base  text-black lg:px-6 lg:py-3 lg:text-lg font-bold mt-3 relative border-l-4 border-b-4 border-pink-500 shadow-[6px_6px_0px_0px_black] border-t-0 border-r-0">
                {topPlayers[index].points} POINTS
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Other Players List */}
      <div className="w-full max-w-md lg:max-w-4xl space-y-3 mt-8">
        {otherPlayers.map((player) => (
          <div
            key={player.rank}
            className="flex items-center justify-between px-4 py-2 lg:py-4 bg-white border-4 border-pink-400 border-t-black border-r-black border-t-2 border-r-2 rounded-full shadow-lg"
          >
            <div className="flex items-center gap-3">
              <Image src={player.img} alt={`Player ${player.rank}`} width={40} height={40} className="rounded-full border-2 border-black" />
              <span className="font-bold text-black">#{player.rank}</span>
            </div>
            <span className="font-bold text-black">{player.points} POINTS</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardSection;
