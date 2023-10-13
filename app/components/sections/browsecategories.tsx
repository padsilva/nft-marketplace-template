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
import { CategoriesCard } from "../cards";

export function BrowseCategories() {
  return (
    <section className="flex flex-col items-center py-20">
      <div className="flex flex-col gap-[60px] w-[1046px]">
        <h3 className="text-[38px] font-semibold">Browse Categories</h3>
        <div className="grid grid-cols-4 grid-rows-2 gap-[30px]">
          <CategoriesCard name="art" Icon={PaintBrushIcon} />
          <CategoriesCard name="collectibles" Icon={SwatchesIcon} />
          <CategoriesCard name="music" Icon={MusicNoteIcon} />
          <CategoriesCard name="photography" Icon={CameraIcon} />
          <CategoriesCard name="video" Icon={VideoCameraIcon} />
          <CategoriesCard name="utility" Icon={MagicWandIcon} />
          <CategoriesCard name="sport" Icon={BasketballIcon} />
          <CategoriesCard name="virtual worlds" Icon={PlanetIcon} />
        </div>
      </div>
    </section>
  );
}
