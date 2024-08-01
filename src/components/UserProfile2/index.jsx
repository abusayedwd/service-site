import { Img } from "@/components/Img";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { RatingBar } from "@/components/RatingBar";

import React from "react";

export default function UserProfile2({
  userImage = "img_ellipse_56.png",
  userName = "Bashar islam",
  userTitle = "UI/UX Designer",
  userLocation = "Dhaka Bangladesh",
  ctaButton = "View All",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full gap-6 p-[26px] sm:p-4 bg-foundation-floral_white-floral_white_500 shadow-xs rounded-[16px]`}
    >
      <div className="flex w-[48%] flex-col gap-4">
        <Img
          src={userImage}
          width={160}
          height={160}
          alt="Ellipse 56"
          className="h-[160px] rounded-[80px] object-cover"
        />
        <div className="flex flex-col items-center gap-2">
          <Heading size="m_24" as="p">
            {userName}
          </Heading>
          <Text as="p" className="!text-foundation-black-black_500-0">
            {userTitle}
          </Text>
          <div className="flex flex-col items-center gap-2 self-stretch">
            <RatingBar
              value={1}
              isEditable={true}
              size={16}
              className="mx-[30px] flex gap-2.5"
            />
            <Text as="p" className="!text-foundation-black-black_400-0">
              {userLocation}
            </Text>
          </div>
        </div>
      </div>
      <Button
        color="default_black"
        variant="outline"
        shape="round"
        rightIcon={
          <Img
            src="img_job_post_card_up_arraw.svg"
            width={18}
            height={18}
            alt="Job Post Card/up Arraw"
            className="h-[18px] w-[18px]"
          />
        }
        className="min-w-[286px] gap-2 !rounded-lg"
      >
        {ctaButton}
      </Button>
    </div>
  );
}
