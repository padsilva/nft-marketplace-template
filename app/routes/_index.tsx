import type { MetaFunction } from "@remix-run/node";

import {
  BrowseCategories,
  Hero,
  Navigation,
  TopCreators,
  TrendingCollection,
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
        <Navigation />
      </header>
      <main className="container mx-auto">
        <Hero />
        <TrendingCollection />
        <TopCreators />
        <BrowseCategories />
      </main>
    </>
  );
}
