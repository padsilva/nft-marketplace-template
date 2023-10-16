import { Button } from "../button";
import { StorefrontIcon, UserIcon } from "~/icons";

export function NavigationSection() {
  return (
    <nav className="flex justify-between">
      <div className="flex items-center gap-2.5">
        <StorefrontIcon className="text-[#A259FF]" />
        <h1 className="text-2xl">NFT Marketplace</h1>
      </div>
      <div className="flex items-center gap-2.5">
        <Button label="Marketplace" href="#" variant="text" />
        <Button label="Rankings" href="#" variant="text" />
        <Button label="Connect a wallet" href="#" variant="text" />
        <Button
          label="Sign Up"
          href="#"
          Icon={UserIcon}
          type="secondary"
          smallPadding
        />
      </div>
    </nav>
  );
}
