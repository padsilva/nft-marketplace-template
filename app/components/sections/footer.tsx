import {
  DiscordIcon,
  InstagramIcon,
  StorefrontIcon,
  TwitterIcon,
  YoutubeIcon,
} from "~/icons";
import { Button } from "../button";
import { Typography } from "../typography";

export function FooterSection() {
  return (
    <footer>
      <div className="flex flex-col items-center py-5 bg-[#3B3B3B]">
        <div className="flex flex-col gap-[49px] w-[1046px]">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-2 flex flex-col gap-[25px]">
              <div className="flex items-center gap-2.5">
                <StorefrontIcon className="text-[#A259FF]" />
                <Typography
                  text="NFT Marketplace"
                  fontSize="2xl"
                  fontWeight="bold"
                  capitalizeText
                  lineHeight="relaxed"
                />
              </div>
              <div className="flex flex-col gap-5">
                <Typography
                  text="NFT marketplace UI created with Anima for Figma."
                  textColor="tertiary"
                />
                <div className="flex flex-col gap-[15px]">
                  <Typography text="Join our community" textColor="tertiary" />
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
              <Typography
                text="Explore"
                fontSize="2xl"
                fontWeight="bold"
                capitalizeText
                lineHeight="relaxed"
              />
              <div className="flex flex-col gap-5">
                <Typography text="Marketplace" textColor="tertiary" />
                <Typography text="Rankings" textColor="tertiary" />
                <Typography text="Connect a wallet" textColor="tertiary" />
              </div>
            </div>
            <div className="col-span-2 flex flex-col gap-[25px]">
              <Typography
                text="Join our weekly digest"
                fontSize="2xl"
                fontWeight="bold"
                capitalizeText
                lineHeight="relaxed"
              />
              <div className="flex flex-col gap-5">
                <Typography
                  text="Get exclusive promotions & updates straight to your inbox."
                  textColor="tertiary"
                />
                <div className="flex items-center justify-between h-[60px] w-[420px] gap-3 py-4 pl-5 bg-white rounded-[20px]">
                  <input
                    placeholder="Enter your email here"
                    className="outline-none text-[#2B2B2B] leading-snug"
                  />
                  <Button label="Subscribe" href="#" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <hr className="h-[1px] border-t-0 bg-[#858584]" />
            <Typography
              variant="caption"
              text="Ⓒ NFT Market. Use this template freely."
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
