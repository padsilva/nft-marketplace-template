import { CartIcon, CollectionIcon, WalletIcon } from "~/icons";
import { InfoCard } from "../cards";

export function HowItWorksSection() {
  return (
    <section className="flex flex-col items-center py-20">
      <div className="flex flex-col  gap-12 w-[1046px]">
        <div className="flex flex-col items-start gap-2.5">
          <h3 className="text-[38px] font-semibold">How it works</h3>
          <p className="text-[22px] capitalize">Find out how to get started</p>
        </div>
        <div className="grid grid-cols-3 gap-[30px]">
          <InfoCard
            Icon={WalletIcon}
            title="setup your wallet"
            description="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
          />
          <InfoCard
            Icon={CollectionIcon}
            title="create collection"
            description="Upload your work and setup your collection. Add a description, social links and floor price."
          />
          <InfoCard
            Icon={CartIcon}
            title="start earning"
            description="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
          />
        </div>
      </div>
    </section>
  );
}
