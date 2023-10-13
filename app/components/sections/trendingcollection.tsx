import { Avatar } from "../avatar";

export function TrendingCollection() {
  return (
    <section className="flex flex-col items-center py-20 gap-[60px]">
      <div className="flex flex-col items-start gap-2.5 w-[1046px]">
        <h3 className="text-[38px] font-semibold">Trending Collection</h3>
        <p className="text-[22px] capitalize">
          Checkout our weekly updated trending collection.
        </p>
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
              <h5 className="text-[22px] font-semibold">1025+</h5>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2.5">
            <h5 className="text-[22px] font-semibold">DSGN Animals</h5>
            <div className="flex gap-3">
              <Avatar name="MrFox" />
              <p>MrFox</p>
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
              <h5 className="text-[22px] font-semibold">1025+</h5>
            </div>
          </div>
          <div className="self-start flex flex-col gap-2.5">
            <h5 className="text-[22px] font-semibold">Magic Mushrooms</h5>
            <div className="flex gap-3">
              <Avatar name="shroomie" />
              <p>Shroomie</p>
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
              <h5 className="text-[22px] font-semibold">1025+</h5>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2.5">
            <h5 className="text-[22px] font-semibold">Disco Machines</h5>
            <div className="flex gap-3">
              <Avatar name="BeKind2Robots" />
              <p>BeKind2Robots</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
