import { ArtistCard } from "../cards";
import { Button } from "../button";
import { EyeIcon } from "~/icons";

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
            <h2 className="text-[51px] font-semibold">Magic Mashrooms</h2>
            <Button label="See NFT" href="#" type="secondary" Icon={EyeIcon} />
          </div>
          <div className="flex flex-col p-[30px] gap-2.5 rounded-[20px] bg-[#3B3B3B80]">
            <p className="text-[12px]">Auction ends in:</p>
            <div className="flex gap-2.5 items-start">
              <div className="flex flex-col items-start gap-[5px]">
                <h3 className="text-[38px] font-bold">23</h3>
                <p className="text-[12px]">Hours</p>
              </div>
              <h4 className="text-lg font-bold leading-[55px]">:</h4>
              <div className="flex flex-col gap-[5px]">
                <h3 className="text-[38px] font-bold">59</h3>
                <p className="text-[12px]">Minutes</p>
              </div>
              <h4 className="text-lg font-bold leading-[55px]">:</h4>
              <div className="flex flex-col gap-[5px]">
                <h3 className="text-[38px] font-bold">59</h3>
                <p className="text-[12px]">Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
