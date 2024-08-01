import { Img } from "@/components/Img";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";

import React from "react";
export default function HomeCreate() {
  return (
    <div className="flex justify-center bg-foundation-black-black_500-0 sm:px-2 lg:px-10">
      <div className="container-xs mt-[54px] flex items-center justify-center 1g:p-5 md:flex-col md:p-5">
        <div className="flex flex-1 flex-col items-start gap-8 md:self-stretch">
          <div className="flex flex-col items-start gap-4 self-stretch">
            <Heading
              size="s_b_44"
              as="h2"
              className="w-[58%] leading-[66px] !text-foundation-white-white_500-0 lg:w-full md:w-full md:text-[28px] sm:text-[22px]"
            >
              Create A Better Future For Yourself
            </Heading>
            <Text
              as="p"
              className="w- [56%] leading-5 !text-foundation-white-white_500-0 lg:w-full md:w-full"
            >
              By creating a profile on Fuez. you gain the ability to create a
              digital CV that is downloadable and shareable at the click of a
              button
            </Text>
          </div>
          <Button
            color="foundation_white_white_500_0"
            shape="round"
            className="min-w-[190px]"
          >
            Register your profile
          </Button>
        </div>
        <Img
          src="img_attachment_removebg_preview.png"
          width={620}
          height={546}
          alt="Attachment Removebg Preview"
          className="h-[546px] w-[38%] object-cover md:w-full"
        />
      </div>
    </div>
  );
}
