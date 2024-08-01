import { Img } from "@/components/Img";
import { Text } from "@/components/Text";
import { Heading } from "@/components/Heading";

import React from "react";
export default function UserProfile1({
  userImage = "img_reply.svg",
  titleText = "Create a Pro-file",
  descriptionText = (
    <>
      Fill in the easy to complete Pro-file fields to build out your Pro-file.
      <br />
      Your Pro-file doubles as your CV
    </>
  ),
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[32%] md:w-full pt-[22px] pb-[18px] gap-6 px-[22px] sm:pt-4 sm:px-4 border-foundation-black-black_100 border-t border-1 border-b-[5px] border-r border-solid rounded-[16px]`}
    >
      <div className="mt-2.5 flex flex-col items-center rounded-lg bg-foundation-white-white_500-0 p-5">
        <Img
          src={userImage}
          width={50}
          height={50}
          alt="Reply"
          className="h-[50px] w-[50px]"
        />
      </div>
      <div className="flex w- [84%] flex-col items-center gap-4">
        <Heading
          size="m_24"
          as="p"
          className="!text-foundation-white-white_500-0"
        >
          {titleText}
        </Heading>
        <Text
          as="p"
          className="self-stretch text-center leading-5 !text-foundation-white-white_500-0"
        >
          {descriptionText}
        </Text>
      </div>
    </div>
  );
}
