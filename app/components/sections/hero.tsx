import { Avatar } from "../avatar";
import { Button } from "../button";
import { RocketLaunchIcon } from "~/icons";

export function HeroSection() {
  return (
    <section className="container mx-auto grid grid-cols-2 items-center justify-items-center py-20 px-28 gap-[30px]">
      <div className="flex flex-col items-start gap-10 flex-[1_0_0]">
        <div className="flex flex-col gap-5">
          <h1 className="text-[67px] font-semibold capitalize leading-tight">
            Discover digital art & Collect NFTs
          </h1>
          <p className="text-[22px] capitalize">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
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
  );
}
