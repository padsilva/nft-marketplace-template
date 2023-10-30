import { ArtistCard } from "../cards";
import { Button } from "../button";
import { EyeIcon } from "~/icons";
import { Typography } from "../typography";

export function NFTHighlightSection() {
  return (
    <section
      className="bg-cover bg-no-repeat h-auto"
      style={{
        backgroundColor: "lightgray",
        backgroundPosition: "50%",
        backgroundImage: "url('/assets/mushroom_2.png')",
      }}
    >
      <div className="bg-gradient-to-b from-[#A259FF00] to-[#A259FF] flex flex-col h-full justify-center px-[195px] pt-[360px] pb-[60px] gap-[30px]">
        <ArtistCard name="shroomie" type="small" />
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[30px] items-start">
            <Typography variant="h2" text="Magic Mashrooms" />
            <Button label="See NFT" href="#" type="secondary" Icon={EyeIcon} />
          </div>
          <div className="flex flex-col p-[30px] gap-2.5 rounded-[20px] bg-[#3B3B3B80]">
            <Typography variant="caption" text="Auction ends in:" />
            <div className="flex gap-2.5 items-start">
              <div className="flex flex-col items-start gap-[5px]">
                <Typography variant="h3" text="23" fontWeight="bold" />
                <Typography variant="caption" text="Hours" />
              </div>
              <Typography fontSize="colon" text=":" lineHeight="loose" />
              <div className="flex flex-col gap-[5px]">
                <Typography variant="h3" text="59" fontWeight="bold" />
                <Typography variant="caption" text="Minutes" />
              </div>
              <Typography fontSize="colon" text=":" lineHeight="loose" />
              <div className="flex flex-col gap-[5px]">
                <Typography variant="h3" text="59" fontWeight="bold" />
                <Typography variant="caption" text="Seconds" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
