import type { MetaFunction } from "@remix-run/node";

import { ArtistCard } from "~/components/artistcard";
import { Avatar } from "~/components/avatar";
import { Button } from "~/components/button";
import { RocketLaunchIcon } from "~/icons/rocketlaunch";
import { StorefrontIcon } from "~/icons/storefront";
import { UserIcon } from "~/icons/user";

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
        {/* NAV SECTION */}
        <nav className="flex justify-between">
          <div className="flex items-center gap-2.5">
            <StorefrontIcon className="text-[#A259FF]" />
            <h1 className="text-2xl">NFT Marketplace</h1>
          </div>
          <div className="flex items-center gap-2.5">
            <Button label="Marketplace" href="#" variant="text" />
            <Button label="Rankings" href="#" variant="text" />
            <Button label="Connect a wallet" href="#" variant="text" />
            <Button
              label="Sign Up"
              href="#"
              Icon={UserIcon}
              type="secondary"
              smallPadding
            />
          </div>
        </nav>
      </header>
      <main className="container mx-auto">
        {/* HERO SECTION */}
        <section className="grid grid-cols-2 items-center justify-items-center py-20 px-28 gap-[30px]">
          <div className="flex flex-col items-start gap-10 flex-[1_0_0]">
            <div className="flex flex-col gap-5">
              <h1 className="text-[67px] font-semibold capitalize leading-tight">
                Discover digital art & Collect NFTs
              </h1>
              <p className="text-[22px] capitalize">
                NFT marketplace UI created with Anima for Figma. Collect, buy
                and sell art from more than 20k NFT artists.
              </p>
            </div>
            <Button label="Get Started" href="#" Icon={RocketLaunchIcon} />
            <div className="flex self-stretch gap-[30px]">
              <div className="grow">
                <h4 className="text-[28px] capitalize">240k+</h4>
                <p className="text-[22px] capitalize">Total Sale</p>
              </div>
              <div className="grow">
                <h4 className="text-[28px] capitalize">100k+</h4>
                <p className="text-[22px] capitalize">Auctions</p>
              </div>
              <div className="grow">
                <h4 className="text-[28px] capitalize">240k+</h4>
                <p className="text-[22px] capitalize">Artists</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <img
              src="/assets/space_hero.png"
              alt="space hero"
              className="rounded-t-[20px] max-h-[401px]"
            />
            <div className="flex flex-col w-full p-5 rounded-b-[20px] bg-[#3B3B3B] gap-2.5">
              <h5 className="text-[22px] font-semibold">Space Walking</h5>
              <div className="flex gap-3">
                <Avatar name="animakid" />
                <p>Animakid</p>
              </div>
            </div>
          </div>
        </section>

        {/* TRENDING COLLECTION SECTION */}
        <section className="flex flex-col items-center py-20 gap-[60px]">
          <div className="flex flex-col items-start gap-2.5 w-[1046px]">
            <h3 className="text-[38px] font-semibold">Trending Collection</h3>
            <p className="text-[22px] capitalize">
              Checkout our weekly updated trending collection.
            </p>
          </div>
          <div className="flex justify-center gap-[30px]">
            <div className="flex flex-col gap-[15px] items-center">
              <img
                src="/assets/dog.png"
                alt="dog"
                className="rounded-[20px] max-h-[330px]"
              />
              <div className="grid grid-cols-3 gap-[15px]">
                <img
                  src="/assets/cat.png"
                  alt="cat"
                  className="rounded-[20px] max-h-[100px]"
                />
                <img
                  src="/assets/bear.png"
                  alt="bear"
                  className="rounded-[20px] max-h-[100px]"
                />
                <div className="h-full w-full flex items-center justify-center bg-[#A259FF] rounded-[20px]">
                  <h5 className="text-[22px] font-semibold">1025+</h5>
                </div>
              </div>
              <div className="w-full flex flex-col gap-2.5">
                <h5 className="text-[22px] font-semibold">DSGN Animals</h5>
                <div className="flex gap-3">
                  <Avatar name="MrFox" />
                  <p>MrFox</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] items-center">
              <img
                src="/assets/mushroom.png"
                alt="dog"
                className="rounded-[20px] max-h-[330px]"
              />
              <div className="grid grid-cols-3 gap-[15px]">
                <img
                  src="/assets/mushroom_2.png"
                  alt="cat"
                  className="rounded-[20px] max-h-[100px]"
                />
                <img
                  src="/assets/mushroom_3.png"
                  alt="bear"
                  className="rounded-[20px] max-h-[100px]"
                />
                <div className="h-full w-full flex items-center justify-center bg-[#A259FF] rounded-[20px]">
                  <h5 className="text-[22px] font-semibold">1025+</h5>
                </div>
              </div>
              <div className="self-start flex flex-col gap-2.5">
                <h5 className="text-[22px] font-semibold">Magic Mushrooms</h5>
                <div className="flex gap-3">
                  <Avatar name="shroomie" />
                  <p>Shroomie</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] items-center">
              <img
                src="/assets/robot.png"
                alt="dog"
                className="rounded-[20px] max-h-[330px]"
              />
              <div className="grid grid-cols-3 gap-[15px]">
                <img
                  src="/assets/robot_2.png"
                  alt="cat"
                  className="rounded-[20px] max-h-[100px]"
                />
                <img
                  src="/assets/robot_3.png"
                  alt="bear"
                  className="rounded-[20px] max-h-[100px]"
                />
                <div className="h-full w-full flex items-center justify-center bg-[#A259FF] rounded-[20px]">
                  <h5 className="text-[22px] font-semibold">1025+</h5>
                </div>
              </div>
              <div className="w-full flex flex-col gap-2.5">
                <h5 className="text-[22px] font-semibold">Disco Machines</h5>
                <div className="flex gap-3">
                  <Avatar name="BeKind2Robots" />
                  <p>BeKind2Robots</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TOP CREATORS SECTION */}
        <section className="flex flex-col items-center py-20 gap-[60px]">
          <div className="flex justify-between items-end w-[1046px]">
            <div>
              <h3 className="text-[38px] font-semibold">Top Creators</h3>
              <p className="text-[22px] capitalize">
                Checkout Top Rated Creators on the NFT Marketplace
              </p>
            </div>
            <Button
              label="View Rankings"
              type="secondary"
              variant="outlined"
              href="#"
              Icon={RocketLaunchIcon}
            />
          </div>
          <div className="grid grid-cols-4 grid-rows-3 gap-[30px]">
            <ArtistCard name="keepitreal" ranking={1} />
            <ArtistCard name="DigiLab" ranking={2} />
            <ArtistCard name="GravityOne" ranking={3} />
            <ArtistCard name="juanie" ranking={4} />
            <ArtistCard name="BlueWhale" ranking={5} />
            <ArtistCard name="MrFox" ranking={6} />
            <ArtistCard name="shroomie" ranking={7} />
            <ArtistCard name="robotica" ranking={8} />
            <ArtistCard name="RustyRobot" ranking={9} />
            <ArtistCard name="animakid" ranking={10} />
            <ArtistCard name="dotgu" ranking={11} />
            <ArtistCard name="ghiblier" ranking={12} />
          </div>
        </section>
      </main>
    </>
  );
}
