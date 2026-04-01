import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { SystemFlow } from "@/components/sections/system-flow";
import { Steps } from "@/components/sections/steps";
import { Metrics } from "@/components/sections/metrics";
import { Features } from "@/components/sections/features";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Problem />
        <SystemFlow />
        <Steps />
        <Metrics />
        <Features />
        <Cta />
      </main>
      <Footer />
    </>
  );
}