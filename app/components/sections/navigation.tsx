import { Button } from "../button";
import { StorefrontIcon, UserIcon } from "~/icons";
import { Typography } from "../typography";

export function NavigationSection() {
  return (
    <nav className="flex justify-between">
      <div className="flex items-center gap-2.5">
        <StorefrontIcon className="text-[#A259FF]" />
        <Typography
          text="NFT Marketplace"
          fontSize="2xl"
          fontWeight="semibold"
          capitalizeText
        />
      </div>
      <div className="flex items-center gap-2.5">
        <Button label="Marketplace" href="#" variant="text" />
        <Button label="Rankings" href="#" variant="text" />
        <Button label="Connect a wallet" href="#" variant="text" />
        <Button label="Sign Up" href="#" Icon={UserIcon} smallPadding />
      </div>
    </nav>
  );
}
