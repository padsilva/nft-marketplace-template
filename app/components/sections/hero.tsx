import { Avatar } from "../avatar";
import { Button } from "../button";
import { RocketLaunchIcon } from "~/icons";
import { Typography } from "../typography";

export function HeroSection() {
  return (
    <section className="container mx-auto grid grid-cols-2 items-center justify-items-center py-20 gap-[30px] w-[1046px]">
      <div className="flex flex-col items-start gap-10 flex-[1_0_0]">
        <div className="flex flex-col gap-5">
          <Typography variant="h1" text="Discover digital art & Collect NFTs" />
          <Typography
            fontSize="2xl"
            lineHeight="relaxed"
            text="NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists."
            capitalizeText
          />
        </div>
        <Button label="Get Started" href="#" Icon={RocketLaunchIcon} />
        <div className="flex self-stretch gap-[30px]">
          <div className="grow">
            <Typography variant="h4" text="240k+" />
            <Typography
              fontSize="24px"
              lineHeight="relaxed"
              text="Total Sale"
              capitalizeText
            />
          </div>
          <div className="grow">
            <Typography variant="h4" text="100k+" />
            <Typography
              fontSize="24px"
              lineHeight="relaxed"
              text="Auctions"
              capitalizeText
            />
          </div>
          <div className="grow">
            <Typography variant="h4" text="240k+" />
            <Typography
              fontSize="24px"
              lineHeight="relaxed"
              text="Artists"
              capitalizeText
            />
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
          <Typography
            text="space walking"
            fontSize="2xl"
            fontWeight="semibold"
            capitalizeText
          />
          <div className="flex gap-3">
            <Avatar name="animakid" />
            <Typography text="Animakid" />
          </div>
        </div>
      </div>
    </section>
  );
}
