import { Button } from "../button";
import { EyeIcon } from "~/icons";
import { NFTCard } from "../cards";
import { Typography } from "../typography";

export function DiscoverMoreSection() {
  return (
    <section className="flex flex-col items-center py-20">
      <div className="flex flex-col gap-[60px] w-[1046px]">
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-2.5">
            <Typography variant="h3" text="Discover More NFTs" />
            <Typography
              fontSize="2xl"
              lineHeight="relaxed"
              text="Explore new trending NFTs"
              capitalizeText
            />
          </div>
          <Button label="See All" variant="outlined" href="#" Icon={EyeIcon} />
        </div>
        <div className="grid grid-cols-3 gap-[30px]">
          <NFTCard
            artist="MoonDancer"
            name="distant galaxy"
            price={1.63}
            bid={0.33}
          />
          <NFTCard
            artist="NebulaKid"
            name="life on edena"
            price={1.63}
            bid={0.33}
          />
          <NFTCard
            artist="Spaceone"
            name="AstroFiction"
            price={1.63}
            bid={0.33}
          />
        </div>
      </div>
    </section>
  );
}
