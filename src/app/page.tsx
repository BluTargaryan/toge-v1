import IntroVideo from "./components/sections/IntroVideo";
import Hero from "./components/sections/Hero";
import Feed from "./components/sections/Feed";
export default function Home() {
  return (
 <main className="section-container edge-padding">
  <IntroVideo />
  <Hero />
  <Feed />
 </main>
  );
}
