import { Avatar } from "../avatar";
import { Typography } from "../typography";

export function NFTCard({
  artist,
  bid,
  name,
  price,
}: {
  artist: string;
  bid: number;
  name: string;
  price: number;
}) {
  return (
    <div className="flex flex-col items-center bg-[#3B3B3B] rounded-[20px] h-[469px]">
      <div
        className="bg-cover bg-no-repeat bg-center w-full h-full flex flex-col items-center justify-center rounded-t-[20px]"
        style={{
          backgroundImage: `url('/assets/${name}.png')`,
        }}
      />

      <div className="flex flex-col w-full pt-5 px-[30px] pb-[25px] rounded-b-[20px] bg-[#3B3B3B] gap-[25px]">
        <div className="flex flex-col gap-[5px]">
          <Typography
            text={name}
            fontSize="2xl"
            fontWeight="semibold"
            capitalizeText
          />
          <div className="flex gap-3">
            <Avatar name={artist} />
            {/* TODO: font-family: Space Mono; */}
            <Typography text={artist} />
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            {/* TODO: font-family: Space Mono; */}
            <Typography variant="caption" text="Price" textColor="secondary" />
            {/* TODO: font-family: Space Mono; */}
            <Typography text={`${price} ETH`} />
          </div>
          <div>
            {/* TODO: font-family: Space Mono; */}
            <Typography
              variant="caption"
              text="Highest Bid"
              textColor="secondary"
            />
            {/* TODO: font-family: Space Mono; */}
            <Typography text={`${bid} wETH`} />
          </div>
        </div>
      </div>
    </div>
  );
}
