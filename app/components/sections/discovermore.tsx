import { Button } from "../button";
import { EyeIcon } from "~/icons";
import { NFTCard } from "../cards";

export function DiscoverMoreSection() {
  return (
    <section className="flex flex-col items-center py-20">
      <div className="flex flex-col gap-[60px] w-[1046px]">
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-2.5">
            <h3 className="text-[38px] font-semibold">Discover More NFTs</h3>
            <p className="text-[22px] capitalize">Explore new trending NFTs</p>
          </div>
          <Button
            label="See All"
            type="secondary"
            variant="outlined"
            href="#"
            Icon={EyeIcon}
          />
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
