import React from "react";

import { Heading } from "@/components/Heading";
import { NavigationBar } from "@/components/NavigationBar";
import ProfileCV from "./profileCV";
import Feedback from "./feedback";
export default function ViewProfile() {
  return (
    <div className="flex w-full flex-col gap-[46px] bg-foundation-white-white_500-0">
      <div className="flex flex-col items-center bg-foundation-maastricht_blue-maastricht_blue_50-1 pb-5">
        <div className="container-xs mb-[104px] flex flex-col items-center gap-[68px] 1g:p-5 md:p-5 sm:gap-[34px]">
          <NavigationBar className="self-stretch" />
          <Heading
            size="textxl"
            as="h1"
            className="!text-foundation-primary_black-primary_black_500 md:text-[28px] sm:text-[22px]"
          >
            Pro-file
          </Heading>
        </div>
      </div>
      <ProfileCV />
      <Feedback />
    </div>
  );
}
