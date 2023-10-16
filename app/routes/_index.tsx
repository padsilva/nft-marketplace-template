import type { MetaFunction } from "@remix-run/node";

import {
  BrowseCategoriesSection,
  DiscoverMoreSection,
  HeroSection,
  NavigationSection,
  TopCreatorsSection,
  TrendingCollectionSection,
} from "~/components/sections";
import { EyeIcon } from "~/icons";

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
      <main className="container mx-auto">
        <HeroSection />
        <TrendingCollectionSection />
        <TopCreatorsSection />
        <BrowseCategoriesSection />
        <DiscoverMoreSection />
      </main>
    </>
  );
}
