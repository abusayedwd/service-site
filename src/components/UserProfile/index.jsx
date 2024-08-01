"sue client";
import { Button } from "@/components/Button";
import { Img } from "@/components/Img";
import { Heading } from "@/components/Heading";
import { MdArrowOutward } from "react-icons/md";
import React from "react";
export default function UserProfile({
  projectManagerText = "Domestic",
  exploreNowText = "Explore Now",
  ImageURL = "img_education.svg",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start justify-center w-full gap-1 px-3.5 py-[22px] sm:py-4 rounded-[16px]`}
    >
      <Button
        color="foundation_white_white_500_0"
        size="lg"
        shape="round"
        className="w-[48px] !rounded-lg"
      >
        <Img src="img_education.svg" width={24} height={24} />
      </Button>
      <div className="flex flex-col items-start gap-3 self-stretch">
        <Heading
          as="p"
          className="group-hover:!text-foundation-white-white_500-0"
        >
          {projectManagerText}
        </Heading>
        <div className="flex self-stretch items-center">
          <Heading
            size="m_16"
            as="p"
            className="group-hover:!text-foundation-white-white_500-0"
          >
            {exploreNowText}
          </Heading>
          <div className="h-[28px] w-[28px] group-hover:!text-foundation-white-white_500-0 ml-1 mt-3">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
}
