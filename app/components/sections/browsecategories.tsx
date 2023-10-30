import {
  BasketballIcon,
  CameraIcon,
  MagicWandIcon,
  MusicNoteIcon,
  PaintBrushIcon,
  PlanetIcon,
  SwatchesIcon,
  VideoCameraIcon,
} from "~/icons";
import { CategoryCard } from "../cards";
import { Typography } from "../typography";

export function BrowseCategoriesSection() {
  return (
    <section className="flex flex-col items-center py-20">
      <div className="flex flex-col gap-[60px] w-[1046px]">
        <Typography variant="h3" text="browse categories" />
        <div className="grid grid-cols-4 grid-rows-2 gap-[30px]">
          <CategoryCard name="art" Icon={PaintBrushIcon} />
          <CategoryCard name="collectibles" Icon={SwatchesIcon} />
          <CategoryCard name="music" Icon={MusicNoteIcon} />
          <CategoryCard name="photography" Icon={CameraIcon} />
          <CategoryCard name="video" Icon={VideoCameraIcon} />
          <CategoryCard name="utility" Icon={MagicWandIcon} />
          <CategoryCard name="sport" Icon={BasketballIcon} />
          <CategoryCard name="virtual worlds" Icon={PlanetIcon} />
        </div>
      </div>
    </section>
  );
}
