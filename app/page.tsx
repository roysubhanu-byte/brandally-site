import Hero from "@/components/home/Hero";
import SocialProof from "@/components/home/SocialProof";
import WhatWeDo from "@/components/home/WhatWeDo";
import PaidAdsCallout from "@/components/home/PaidAdsCallout";
import FeaturedTools from "@/components/home/FeaturedTools";
import WhoWeAre from "@/components/home/WhoWeAre";
import FAQ from "@/components/home/FAQ";
import Newsletter from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <WhatWeDo />
      <PaidAdsCallout />
      <FeaturedTools />
      <WhoWeAre />
      <FAQ />
      <Newsletter />
    </>
  );
}
