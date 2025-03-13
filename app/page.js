import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import RPSBattleSection from "@/components/RPSBattleSection";
import LeaderboardSection from "@/components/LeaderboardSection";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <RPSBattleSection />
      <LeaderboardSection />
    </div>
  );
}
