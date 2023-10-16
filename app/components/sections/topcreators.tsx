import { ArtistCard } from "../cards";
import { Button } from "../button";
import { RocketLaunchIcon } from "~/icons";

export function TopCreatorsSection() {
  return (
    <section className="flex flex-col items-center py-20">
      <div className="flex flex-col gap-[60px] w-[1046px]">
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-2.5">
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
      </div>
    </section>
  );
}
