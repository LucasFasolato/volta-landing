import { Navbar } from "@/components/layout/navbar";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Metrics } from "@/components/sections/metrics";
import { Problem } from "@/components/sections/problem";
import { Steps } from "@/components/sections/steps";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Problem />
        <Steps />
        <Metrics />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
