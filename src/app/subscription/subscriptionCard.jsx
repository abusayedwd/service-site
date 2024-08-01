import { Text } from "@/components/Text";
import { Heading } from "@/components/Heading";
import SubscriptionSingalCard from "@/components/SubscriptionSingalCard";
import React from "react";
export default function SubscriptionCard() {
  return (
    <div className="flex justify-center">
      <div className="container-xs flex justify-center 1g:p-5 md:p-5">
        {" "}
        <div className="flex w-full flex-col items-center justify-center gap-[58px] rounded-[16px] bg-foundation-floral_white-floral_white_500 px-14 py-[100px] 1g:py-8 md:p-5 sm:gap-[29px] sm:p-4">
          <div className="flex w-[44%] flex-col items-center gap-2.5 lg:w-full md:w-full">
            <Heading
              size="poppins_s_b_30"
              className="!text-foundation-black-black_500-1 md:text-[24px] sm:text-[22px]"
              as="h1"
            >
              The Right Plan for You
            </Heading>
            <Text
              as="p"
              className="self-stretch text-center leading-5 !text-foundation-maastricht_blue-maastricht_blue_500-1"
            >
              Our once off membership options give you all the features and
              funtinality required to keep an accurate up to date profile / cv.
            </Text>
          </div>
          <div className="mb-1.5 flex w-[52%] gap-6 md:w-full md:flex-col">
            <SubscriptionSingalCard />
            <SubscriptionSingalCard getstartedButton="Get Started" />
          </div>
        </div>
      </div>
    </div>
  );
}
