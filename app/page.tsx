import Hero from "@/components/home/Hero";
import SocialProof from "@/components/home/SocialProof";
import SelfCheck from "@/components/home/SelfCheck";
import Framework from "@/components/home/Framework";
import CaseStudies from "@/components/home/CaseStudies";
import FeaturedTools from "@/components/home/FeaturedTools";
import WhoWeAre from "@/components/home/WhoWeAre";
import FAQ from "@/components/home/FAQ";
import Partners from "@/components/home/Partners";
import Newsletter from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <SelfCheck />
      <Framework />
      <CaseStudies />
      <FeaturedTools />
      <WhoWeAre />
      <FAQ />
      <Partners />
      <Newsletter />
    </>
  );
}
