import {
  DiscordIcon,
  InstagramIcon,
  StorefrontIcon,
  TwitterIcon,
  YoutubeIcon,
} from "~/icons";
import { Button } from "../button";

export function FooterSection() {
  return (
    <footer>
      <div className="flex flex-col items-center py-5 bg-[#3B3B3B]">
        <div className="flex flex-col gap-[49px] w-[1046px]">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-2 flex flex-col gap-[25px]">
              <div className="flex items-center gap-2.5">
                <StorefrontIcon className="text-[#A259FF]" />
                <h1 className="text-[22px] font-bold">NFT Marketplace</h1>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-[#CCCCCC]">
                  NFT marketplace UI created with Anima for Figma.
                </p>
                <div className="flex flex-col gap-[15px]">
                  <p className="text-[#CCCCCC]">Join our community</p>
                  <div className="flex gap-2.5 text-[#858584]">
                    <DiscordIcon />
                    <YoutubeIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[25px]">
              <h5 className="text-[22px] font-bold">Explore</h5>
              <div className="flex flex-col gap-5">
                <p className="text-[#CCCCCC]">Marketplace</p>
                <p className="text-[#CCCCCC]">Rankings</p>
                <p className="text-[#CCCCCC]">Connect a wallet</p>
              </div>
            </div>
            <div className="col-span-2 flex flex-col gap-[25px]">
              <h5 className="text-[22px] font-bold">Join our weekly digest</h5>
              <div className="flex flex-col gap-5">
                <p className="text-[#CCCCCC]">
                  Get exclusive promotions & updates straight to your inbox.
                </p>
                <div className="flex items-center justify-between h-[60px] w-[420px] gap-3 py-4 pl-5 bg-white rounded-[20px]">
                  <input
                    placeholder="Enter your email here"
                    className="outline-none text-[#2B2B2B]"
                  />
                  <Button label="Subscribe" href="#" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <hr className="h-[1px] border-t-0 bg-[#858584]" />
            <p className="text-xs">Ⓒ NFT Market. Use this template freely.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
