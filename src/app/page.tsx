import { Navbar } from "@/components/layout/navbar";
import { Cta } from "@/components/sections/cta";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Metrics } from "@/components/sections/metrics";
import { OperatingLayer } from "@/components/sections/operating-layer";
import { Problem } from "@/components/sections/problem";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <OperatingLayer />
        <Problem />
        <Metrics />
        <Features />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
