import { Avatar } from "../avatar";
import { Typography } from "../typography";

export function TrendingCollectionSection() {
  return (
    <section className="flex flex-col items-center py-20 gap-[60px]">
      <div className="flex flex-col items-start gap-2.5 w-[1046px]">
        <Typography variant="h3" text="Trending Collection" />
        <Typography
          fontSize="2xl"
          lineHeight="relaxed"
          text="Checkout our weekly updated trending collection."
          capitalizeText
        />
      </div>
      <div className="flex justify-center gap-[30px]">
        <div className="flex flex-col gap-[15px] items-center">
          <img
            src="/assets/dog.png"
            alt="dog"
            className="rounded-[20px] max-h-[330px]"
          />
          <div className="grid grid-cols-3 gap-[15px]">
            <img
              src="/assets/cat.png"
              alt="cat"
              className="rounded-[20px] max-h-[100px]"
            />
            <img
              src="/assets/bear.png"
              alt="bear"
              className="rounded-[20px] max-h-[100px]"
            />
            <div className="h-full w-full flex items-center justify-center bg-[#A259FF] rounded-[20px]">
              <Typography
                text="1025+"
                fontSize="2xl"
                fontWeight="bold"
                capitalizeText
                lineHeight="relaxed"
                // TODO: font-family: Space Mono;
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2.5">
            <Typography
              text="DSGN Animals"
              fontSize="2xl"
              fontWeight="semibold"
              capitalizeText
            />
            <div className="flex gap-3">
              <Avatar name="MrFox" />
              <Typography text="MrFox" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[15px] items-center">
          <img
            src="/assets/mushroom.png"
            alt="dog"
            className="rounded-[20px] max-h-[330px]"
          />
          <div className="grid grid-cols-3 gap-[15px]">
            <img
              src="/assets/mushroom_2.png"
              alt="cat"
              className="rounded-[20px] max-h-[100px]"
            />
            <img
              src="/assets/mushroom_3.png"
              alt="bear"
              className="rounded-[20px] max-h-[100px]"
            />
            <div className="h-full w-full flex items-center justify-center bg-[#A259FF] rounded-[20px]">
              <Typography
                text="1025+"
                fontSize="2xl"
                fontWeight="bold"
                capitalizeText
                lineHeight="relaxed"
                // TODO: font-family: Space Mono;
              />
            </div>
          </div>
          <div className="self-start flex flex-col gap-2.5">
            <Typography
              text="Magic Mushrooms"
              fontSize="2xl"
              fontWeight="semibold"
              capitalizeText
            />
            <div className="flex gap-3">
              <Avatar name="shroomie" />
              <Typography text="Shroomie" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[15px] items-center">
          <img
            src="/assets/robot.png"
            alt="dog"
            className="rounded-[20px] max-h-[330px]"
          />
          <div className="grid grid-cols-3 gap-[15px]">
            <img
              src="/assets/robot_2.png"
              alt="cat"
              className="rounded-[20px] max-h-[100px]"
            />
            <img
              src="/assets/robot_3.png"
              alt="bear"
              className="rounded-[20px] max-h-[100px]"
            />
            <div className="h-full w-full flex items-center justify-center bg-[#A259FF] rounded-[20px]">
              <Typography
                text="1025+"
                fontSize="2xl"
                fontWeight="bold"
                capitalizeText
                lineHeight="relaxed"
                // TODO: font-family: Space Mono;
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2.5">
            <Typography
              text="Disco Machines"
              fontSize="2xl"
              fontWeight="semibold"
              capitalizeText
            />
            <div className="flex gap-3">
              <Avatar name="BeKind2Robots" />
              <Typography text="BeKind2Robots" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
