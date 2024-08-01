import React from "react";

import { Text } from "../Text";
import { Heading } from "../Heading";
export default function UserProfile7({
  aboutMeText = "About Me",
  workintentiontext1 = "Intend to work in a challenging and competitive environment where strong sense of responsibilities and commitment requires, where dignity of work provides job satisfaction and the place of work provides potential avenues for learning",
  workintentiontext2 = "Intend to work in a challenging and competitive environment where strong sense of responsibilities and commitment requires, where dignity of work provides job satisfaction and the place of work provides potential avenues for learning",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start gap-4 flex-1`}
    >
      <Heading
        size="m_24"
        as="p"
        className="!text-foundation-black-black_400-0 sm:text-[20px]"
      >
        {aboutMeText}
      </Heading>
      <div className="flex flex-col gap-4 self-stretch sm:gap-4">
        <Text
          size="textmd"
          as="p"
          className="leading-[22px] !text-foundation-black-black_400-0 sm:text-[13px]"
        >
          {workintentiontext1}
        </Text>
        <Text
          size="textmd"
          as="p"
          className="leading-[22px] !text-foundation-black-black_400-0 sm:text-[13px]"
        >
          {workintentiontext2}
        </Text>
      </div>
    </div>
  );
}
