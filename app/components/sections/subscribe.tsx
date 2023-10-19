import { MailIcon } from "~/icons";
import { Button } from "../button";

export function SubscribeSection() {
  return (
    <section className="flex flex-col items-center py-20">
      <div className="flex flex-col gap-[60px] w-[1046px] bg-[#3B3B3B] rounded-[20px]">
        <div className="grid grid-cols-2 gap-20 justify-items-center items-center p-[60px]">
          <div
            className="bg-cover bg-no-repeat bg-center w-full h-[310px] flex flex-col items-center justify-center rounded-[20px]"
            style={{
              backgroundImage: `url('/assets/astronaut.png')`,
            }}
          />
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2.5">
              <h3 className="text-[38px] font-semibold capitalize leading-[46px]">
                Join our weekly digest
              </h3>
              <p className="text-[22px] capitalize leading-9">
                Get exclusive promotions & updates straight to your inbox.
              </p>
            </div>
            <div className="flex items-center h-[60px] gap-3 py-4 pl-5 bg-white rounded-[20px]">
              <input
                placeholder="Enter your email here"
                className="outline-none text-[#2B2B2B]"
              />
              <Button label="Subscribe" Icon={MailIcon} href="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
