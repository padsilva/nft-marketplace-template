import { Avatar } from "../avatar";

export function ArtistCard({
  name,
  ranking,
  type = "default",
}: {
  name: string;
  ranking?: number;
  type?: "default" | "small" | "medium" | "large";
}) {
  switch (type) {
    case "small":
      return (
        <div className="px-5 py-2.5 flex items-center self-start gap-3 bg-[#3B3B3B] rounded-[20px]">
          <Avatar size="small" name={name} />
          <p className="capitalize">{name}</p>
        </div>
      );

    case "medium":
      return (
        <div className="px-5 py-2.5 flex items-center self-start gap-3 bg-[#3B3B3B] rounded-[20px]">
          <Avatar size="small" name={name} />
          <h5 className="text-[22px] font-semibold capitalize">{name}</h5>
        </div>
      );

    case "large":
      return (
        <div className="p-5 flex items-center self-start gap-5 bg-[#3B3B3B] rounded-[20px]">
          <Avatar size="medium" name={name} />
          <div className="flex flex-col gap-[5px]">
            <h5 className="text-[22px] font-semibold capitalize">{name}</h5>
            <div className="flex items-center gap-2.5">
              <p className="text-[#858584]">Total Sales:</p>
              <p>34.53 ETH</p>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="p-5 flex flex-col items-center gap-5 bg-[#3B3B3B] rounded-[20px]">
          <Avatar size="large" name={name} />
          <div className="flex flex-col items-center gap-[5px]">
            <h5 className="text-[22px] font-semibold capitalize">{name}</h5>
            <div className="flex items-center gap-2.5">
              <p className="text-[#858584]">Total Sales:</p>
              <p>34.53 ETH</p>
            </div>
          </div>

          <div className="bg-[#2B2B2B] rounded-full h-6 w-6 text-center absolute self-start">
            <p className="text-[#858584]">{ranking}</p>
          </div>
        </div>
      );
  }
}
