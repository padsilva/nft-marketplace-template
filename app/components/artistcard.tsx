import { Avatar } from "./avatar";

export function ArtistCard({
  name,
  ranking,
}: {
  name: string;
  ranking: number;
}) {
  return (
    <div className="p-5 flex flex-col items-center gap-5 bg-[#3B3B3B] rounded-[20px]">
      <Avatar size="big" name={name} />
      <div className="flex flex-col items-center gap-[5px]">
        <h5 className="text-[22px] font-semibold capitalize">{name}</h5>
        <div className="flex items-center gap-2.5">
          <p className="text-[#858584]">Total Sales: </p>
          <p>34.53 ETH</p>
        </div>
      </div>

      <div className="bg-[#2B2B2B] rounded-full h-6 w-6 text-center absolute self-start">
        <p className="text-[#858584]">{ranking}</p>
      </div>
    </div>
  );
}
