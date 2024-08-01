import React from "react";

import { Text } from "../Text";
import { Img } from "../Img";
import { Heading } from "../Heading";
import { RatingBar } from "../RatingBar";

export default function UserProfiles({
  userName = "Gazi",
  ratingValue = "5.0",
  reviewDate = "MAR 08, 2024",
  reviewText = "Elisha is just purely exceptional and thoughtful in design and understanding of requirements. Even when the requirements aren't as polished and professional.",
  imageSrc = "Victoria.png",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center px-1.5 py-4 bg-foundation-white-white_500-0 shadow-md flex-1 rounded-[12px]`}
    >
      <div className="mx-4 flex items-center gap-2 self-stretch sm:mx-0">
        <Img
          src={imageSrc}
          width={34}
          height={34}
          alt={`${userName}'s profile`}
          className="h-[34px] w-[34px] rounded-[16px] object-cover"
        />
        <Text
          as="p"
          className="text-color_palette-text_color-text_color_500 sm:text-[13px]"
        >
          {userName}
        </Text>
      </div>
      <div className="ml-[58px] mr-4 flex justify-center self-stretch sm:mx-0">
        <div className="flex flex-1 items-center gap-[11px]">
          <RatingBar
            value={parseFloat(ratingValue)}
            isEditable={true}
            size={16}
            className="flex gap-2.5"
          />
          <Text
            as="p"
            className="!text-foundation-black-black_300 sm:text-[13px]"
          >
            {ratingValue}
          </Text>
        </div>
        <Heading
          size="m_16"
          as="p"
          className="!text-foundation-black-black_300 sm:text-[13px]"
        >
          {reviewDate}
        </Heading>
      </div>
      <Text
        size="outfit_r_16"
        as="p"
        className="mb-[18px] mt-1.5 w-[98%] leading-[150%] !text-color_palette-text_color-text_color_500 sm:w-full sm:text-[13px]"
      >
        {reviewText}
        <a
          href="#"
          className="font-outfit text-[14px] capitalize text-foundation-primary_black-primary_black_400 underline"
        >
          See less
        </a>
      </Text>
    </div>
  );
}
