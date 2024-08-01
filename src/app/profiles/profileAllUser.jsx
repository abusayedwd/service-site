import React, { Suspense } from "react";
import { Img } from "@/components/Img";
import { Button } from "@/components/Button";
import { SelectBox } from "@/components/SelectBox";
import UserProfile2 from "@/components/UserProfile2";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";

const data = [
  {
    userImage: "Bashar_islam.png",
    userName: "Bashar islam",
    userTitle: "UI/UX Designer",
    userLocation: "Dhaka Bangladesh",
    ctaButton: "View All",
  },
  {
    userImage: "Victoria.png",
    userName: "Victoria",
    userTitle: "Digital Marketer",
    userLocation: "Dhaka Bangladesh",
    ctaButton: "View All",
  },
  {
    userImage: "Joseph.png",
    userName: "Bashar islam",
    userTitle: "UI/UX Designer",
    userLocation: "Dhaka Bangladesh",
    ctaButton: "View All",
  },
  {
    userImage: "Irene_A_Engle.png",
    userName: "Bashar islam",
    userTitle: "UI/UX Designer",
    userLocation: "Dhaka Bangladesh",
    ctaButton: "View All",
  },
  {
    userImage: "Irene_A_Engle.png",
    userName: "Bashar islam",
    userTitle: "UI/UX Designer",
    userLocation: "Dhaka Bangladesh",
    ctaButton: "View All",
  },
  {
    userImage: "Joseph.png",
    userName: "Bashar islam",
    userTitle: "UI/UX Designer",
    userLocation: "Dhaka Bangladesh",
    ctaButton: "View All",
  },
  {
    userImage: "Victoria.png",
    userName: "Bashar islam",
    userTitle: "UI/UX Designer",
    userLocation: "Dhaka Bangladesh",
    ctaButton: "View All",
  },
  {
    userImage: "Bashar_islam.png",
    userName: "Bashar islam",
    userTitle: "UI/UX Designer",
    userLocation: "Dhaka Bangladesh",
    ctaButton: "View All",
  },
  {
    userImage: "Bashar_islam.png",
    userName: "Bashar islam",
    userTitle: "UI/UX Designer",
    userLocation: "Dhaka Bangladesh",
    ctaButton: "View All",
  },
  {
    userImage: "Victoria.png",
    userName: "Victoria",
    userTitle: "Digital Marketer",
    userLocation: "Dhaka Bangladesh",
    ctaButton: "View All",
  },
  {
    userImage: "Joseph.png",
    userName: "Bashar islam",
    userTitle: "UI/UX Designer",
    userLocation: "Dhaka Bangladesh",
    ctaButton: "View All",
  },
  {
    userImage: "Victoria.png",
    userName: "Victoria",
    userTitle: "Digital Marketer",
    userLocation: "Dhaka Bangladesh",
    ctaButton: "View All",
  },
];

const dropDownOptions = [
  { label: "Location 1", value: "Location 1" },
  { label: "Location 2", value: "Location 2" },
  { label: "Location 3", value: "Location 3" },
];

export default function ProfileAllUser() {
  return (
    <div className="mt-8 flex justify-center self-stretch">
      <div className="container-xs flex justify-center lg:p-5 md:p-5">
        <div className="flex w-full flex-col items-center">
          <div className="flex items-center gap-[27px] self-stretch">
            <Link href="/profilesfiltter">
              <Button
                size="2x1"
                shape="circle"
                className="w-[50px] h-[100%] !rounded-[28px]"
              >
                <Img src="filterImage.svg" width={50} height={50} />
              </Button>
            </Link>
            <SelectBox
              color="foundation_floral_white_floral_white_500"
              size="lg"
              variant="fill"
              shape="round"
              indicator={<MdKeyboardArrowDown />}
              name="Sort by latest"
              placeholder={`Sort by latest`}
              options={dropDownOptions}
              className="w-[12%] sm:w-full border border-solid border-foundation-black-black_500-0 pr-0 !px-[20px] !gap-1"
            />
          </div>
          <div className="mt-7 grid grid-cols-4 justify-center gap-6 gap-y-8 self-stretch lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <UserProfile2 {...d} key={"group687" + index} />
              ))}
            </Suspense>
          </div>
          <div className="mt-44 flex w-[34%] items-center justify-center gap-1.5 lg:w-full md:w-full flex-wrap">
            <Button
              color="foundation_white_white_500_0"
              size="sm"
              leftIcon={<BsArrowLeft />}
              className="flex-1 gap-1 rounded border border-solid border-colors-grey_4_border_ text-colors-black_1"
            >
              Back
            </Button>
            <Button
              color="foundation_white_white_500_0"
              className="min-w-[30px] rounded border border-solid border-colors-grey_4_border_ text-colors-black_1"
            >
              1
            </Button>
            <div className="flex flex-col items-center rounded border border-solid border-colors-grey_4_border_ bg-foundation-white-white_500-0 px-1.5 py-2.5">
              <HiOutlineDotsHorizontal className="h-[16px] w-[16px]" />
            </div>
            <Button
              color="foundation_white_white_500_0"
              className="min-w-[30px] rounded border border-solid border-colors-grey_4_border_ text-colors-black_1"
            >
              12
            </Button>
            <Button
              color="foundation_white_white_500_0"
              className="min-w-[30px] rounded border border-solid border-colors-grey_4_border_ text-colors-black_1"
            >
              13
            </Button>
            <Button
              color="foundation_white_white_500_0"
              className="min-w-[32px] rounded border border-solid border-colors-grey_4_border_ text-colors-black_1"
            >
              14
            </Button>
            <Button className="min-w-[32px] rounded">15</Button>
            <Button
              color="foundation_white_white_500_0"
              className="min-w-[32px] rounded border border-solid border-colors-grey_4_border_ text-colors-black_1"
            >
              16
            </Button>
            <Button
              color="foundation_white_white_500_0"
              className="min-w-[30px] rounded border border-solid border-colors-grey_4_border_ text-colors-black_1"
            >
              17
            </Button>
            <div className="flex flex-col items-center rounded border border-solid border-colors-grey_4_border_ bg-foundation-white-white_500-0 px-1.5 py-2.5">
              <HiOutlineDotsHorizontal />
            </div>
            <Button
              color="foundation_white_white_500_0"
              className="min-w-[36px] rounded border border-solid border-colors-grey_4_border_ text-colors-black_1"
            >
              20
            </Button>
            <Button
              size="sm"
              rightIcon={<BsArrowRight />}
              className="flex-1 gap-1 rounded sm:self-stretch"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
