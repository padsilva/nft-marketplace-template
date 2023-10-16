import { Avatar } from "../avatar";

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
          <h5 className="text-[22px] font-semibold capitalize">{name}</h5>
          <div className="flex gap-3">
            <Avatar name={artist} />
            <p>{artist}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-[12px] text-[#858584]">Price</p>
            <p>{price} ETH</p>
          </div>
          <div>
            <p className="text-[12px] text-[#858584]">Highest Bid</p>
            <p>{bid} wETH</p>
          </div>
        </div>
      </div>
    </div>
  );
}
