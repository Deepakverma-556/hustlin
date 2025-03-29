import BreakingNews from "@/components/BreakingNews";
import Faqs from "@/components/Faqs";
import Hero from "@/components/Hero";
import LatestTweets from "@/components/LatestTweets";
import Minting from "@/components/Minting";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <BreakingNews />
      <LatestTweets />
      <Minting />
      <Roadmap />
      <Team />
      <Faqs/>
    </>
  );
}
