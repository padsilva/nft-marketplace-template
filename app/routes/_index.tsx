import type { MetaFunction } from "@remix-run/node";

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
      <main>
        {/* HERO SECTION */}
        <div className="grid grid-cols-2 items-center justify-items-center py-20 px-32 gap-[30px]">
          <div className="flex flex-col items-start gap-10">
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
          <div className="flex flex-col items-center">
            <img
              src="/assets/space_hero.png"
              alt="space hero"
              className="rounded-t-[20px] max-h-[401px]"
            />
            <div className="flex flex-col self-stretch p-5 rounded-b-[20px] bg-[#3B3B3B] gap-2.5">
              <h5 className="text-[22px] font-semibold">Space Walking</h5>
              <div className="flex gap-3">
                <img
                  src="/assets/men_avatar.png"
                  alt="men avatar"
                  className="rounded-full"
                  width={24}
                  height={24}
                />
                <p>Animakid</p>
              </div>
            </div>
          </div>
        </div>

        {/* TRENDING COLLECTION SECTION */}
        <div className="flex flex-col py-20 px-32 gap-[60px]">
          <div className="self-start">
            <h3 className="text-[38px] font-semibold">Trending Collection</h3>
            <p className="text-[22px] capitalize">
              Checkout our weekly updated trending collection.
            </p>
          </div>
          <div className="grid grid-cols-3 items-center justify-items-center gap-[30px]">
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
                  className="rounded-[20px]"
                />
                <img
                  src="/assets/bear.png"
                  alt="bear"
                  className="rounded-[20px]"
                />
                <div className="h-full w-full flex items-center justify-center bg-[#A259FF] rounded-[20px]">
                  <h5 className="text-[22px] font-semibold">1025+</h5>
                </div>
              </div>
              <div className="self-start flex flex-col gap-2.5">
                <h5 className="text-[22px] font-semibold">Happy Robots</h5>
                <div className="flex gap-3">
                  <img
                    src="/assets/men_avatar.png"
                    alt="men avatar"
                    className="rounded-full"
                    width={24}
                    height={24}
                  />
                  <p>Animakid</p>
                </div>
              </div>
            </div>
            {/* TODO: replace this duplicated information */}
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
                  className="rounded-[20px]"
                />
                <img
                  src="/assets/bear.png"
                  alt="bear"
                  className="rounded-[20px]"
                />
                <div className="h-full w-full flex items-center justify-center bg-[#A259FF] rounded-[20px]">
                  <h5 className="text-[22px] font-semibold">1025+</h5>
                </div>
              </div>
              <div className="self-start flex flex-col gap-2.5">
                <h5 className="text-[22px] font-semibold">Happy Robots</h5>
                <div className="flex gap-3">
                  <img
                    src="/assets/men_avatar.png"
                    alt="men avatar"
                    className="rounded-full"
                    width={24}
                    height={24}
                  />
                  <p>Animakid</p>
                </div>
              </div>
            </div>
            {/* TODO: replace this duplicated information */}
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
                  className="rounded-[20px]"
                />
                <img
                  src="/assets/bear.png"
                  alt="bear"
                  className="rounded-[20px]"
                />
                <div className="h-full w-full flex items-center justify-center bg-[#A259FF] rounded-[20px]">
                  <h5 className="text-[22px] font-semibold">1025+</h5>
                </div>
              </div>
              <div className="self-start flex flex-col gap-2.5">
                <h5 className="text-[22px] font-semibold">Happy Robots</h5>
                <div className="flex gap-3">
                  <img
                    src="/assets/men_avatar.png"
                    alt="men avatar"
                    className="rounded-full"
                    width={24}
                    height={24}
                  />
                  <p>Animakid</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
