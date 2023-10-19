import type { MetaFunction } from "@remix-run/node";

import {
  BrowseCategoriesSection,
  DiscoverMoreSection,
  HeroSection,
  HowItWorksSection,
  NFTHighlightSection,
  NavigationSection,
  TopCreatorsSection,
  TrendingCollectionSection,
} from "~/components/sections";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <header className="px-12 py-5">
        <NavigationSection />
      </header>
      <main>
        <HeroSection />
        <TrendingCollectionSection />
        <TopCreatorsSection />
        <BrowseCategoriesSection />
        <DiscoverMoreSection />
        <NFTHighlightSection />
        <HowItWorksSection />
      </main>
    </>
  );
}
