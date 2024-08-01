"use client";
import { Text } from "../Text";
import { Button } from "../Button";
import { Heading } from "../Heading";

import { IoMdCheckmark } from "react-icons/io";

export default function SubscriptionSingalCard({
  durationText = "6 Months",
  createProfileText = "Create a Profile",
  shareProfileText = "Share your profile",
  downloadCVText = "Download a print ready CV",
  receiveReviewsText = "Receive Reviews",
  uploadProfilePictureText = "Upload a profile picture",
  headerText = "R55",
  getstartedButton = "Get Started",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col h-[456px] w-[48%] lg:h-auto md:w-full md:h-auto px-4 py-5 bg-foundation-white-white_500-0 shadow-sm bg-cover bg-no-repeat rounded-[24px]`}
    >
      <div className="flex flex-col gap-8 self-stretch">
        <div className="mx-6 flex flex-col items-start gap-6">
          <Text
            size="poppins_r_30"
            as="p"
            className="!text-foundation-primary_black-primary_black_500"
          >
            {durationText}
          </Text>
          <div className="flex flex-col gap-[22px] self-stretch">
            <div className="flex items-start gap-2">
              <IoMdCheckmark className="h-[16px] w-[16px]" />
              <Text
                as="p"
                className="! text-foundation-primary_black-primary_black_500"
              >
                {createProfileText}
              </Text>
            </div>
            <div className="flex items-start gap-2">
              <IoMdCheckmark className="h-[16px] w-[16px]" />
              <Text
                as="p"
                className="!text-foundation-primary_black-primary_black_500"
              >
                {shareProfileText}
              </Text>
            </div>
            <div className="flex items-start gap-2">
              <IoMdCheckmark className="h-[16px] w-[16px]" />
              <Text
                as="p"
                className="self-center !text-foundation-primary_black-primary_black_500"
              >
                {downloadCVText}
              </Text>
            </div>
            <div className="flex items-center gap-2">
              <IoMdCheckmark className="h-[16px] w-[16px]" />
              <Text
                as="p"
                className="!text-foundation-primary_black-primary_black_500"
              >
                {receiveReviewsText}
              </Text>
            </div>
            <div className="flex items-center gap-2">
              <IoMdCheckmark className="h-[16px] w-[16px]" />
              <Text
                as="p"
                className="!text-foundation-primary_black-primary_black_500"
              >
                {uploadProfilePictureText}
              </Text>
            </div>
          </div>
          <Heading
            size="headingxs"
            as="h4"
            className="!font-inter !text-foundation-black-black_500-1"
          >
            {headerText}
          </Heading>
        </div>
        <Button
          size="3x1"
          shape="round"
          className="self-stretch !rounded-[12px] py-[10px] sm:py-[6px]"
        >
          {getstartedButton}
        </Button>
      </div>
    </div>
  );
}
