import { ArchitectureSection } from "@/components/architecture-section";
import { CodeExampleSection } from "@/components/code-example-section";
import { CtaSection } from "@/components/cta-section";
import { DeveloperLetter } from "@/components/developer-letter";
import { FeatureStrip } from "@/components/feature-strip";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { MouseGlow } from "@/components/mouse-glow";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <MouseGlow />
      <Navbar />
      <HeroSection />
      <FeatureStrip />
      <FeaturesSection />
      <HowItWorks />
      <CodeExampleSection />
      <ArchitectureSection />
      <CtaSection />
      <DeveloperLetter />
      <Footer />
    </main>
  );
}
