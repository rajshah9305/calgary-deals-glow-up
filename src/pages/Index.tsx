
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PremiumPreview from "@/components/PremiumPreview";
import FeaturedSection from "@/components/FeaturedSection";
import CommunityStats from "@/components/CommunityStats";
import Footer from "@/components/Footer";
import ThreeBackground from "@/components/ThreeBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ThreeBackground />
      <Header />
      <main>
        <Hero />
        <PremiumPreview />
        <FeaturedSection />
        <CommunityStats />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
