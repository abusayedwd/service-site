import { Heading } from "@/components/Heading";
import { NavigationBar } from "@/components/NavigationBar";
import Footer from "../../components/Footer";

import PrivacyPolicyMain from "./privacyPolicyMain";

import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="w-full bg-foundation-white-white_500-0">
      <div className="flex flex-col items-center bg-foundation-maastricht_blue-maastricht_blue_50-1 pb-5">
        <div className="container-xs mb-[86px] flex flex-col items-center gap-[58px] lg:p-5 md:p-5 sm:gap-[29px]">
          <NavigationBar className="self-stretch" />
          <Heading
            size="s_b_56"
            as="h1"
            className="!text-foundation-maastricht_blue-maastricht_blue_500-0 md:text-[36px] sm:text-[30px]"
          >
            Privacy Policy
          </Heading>
        </div>
      </div>
      <PrivacyPolicyMain />
      <Footer className="mt-28" />
    </div>
  );
}
