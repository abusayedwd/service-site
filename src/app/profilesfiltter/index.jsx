"use client";
import { Suspense, useState } from "react";
import { Heading } from "@/components/Heading";
import Footer from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { Input } from "@/components/Input";
import { SelectBox } from "@/components/SelectBox";
import { Button } from "@/components/Button";
import { Img } from "@/components/Img";
import { Text } from "@/components/Text";
import UserProfile3 from "@/components/UserProfile2";
import UserProfile4 from "@/components/UserProfile4";
import UserProfile5 from "@/components/UserProfile5";
import UserProfile6 from "@/components/UserProfile6";
import { CloseSVG } from "@/assets/images/close";

import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose, IoIosArrowDown } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

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

const data1 = [
  { userRole: "Project manager", badgeCount: "10" },
  { userRole: "Agriculture", badgeCount: "10" },
  { userRole: "Metal Production", badgeCount: "10" },
  { userRole: "Cleaner", badgeCount: "10" },
  { userRole: "Plumber Services", badgeCount: "10" },
];

const data2 = [
  { badgeText: "10", type: "Full Time" },
  { badgeText: "10", type: "Part Time" },
  { badgeText: "10", type: "Remote" },
];

const data3 = [
  { userRating: "5 Star", userBadge: "10" },
  { userRating: "4 Star", userBadge: "10" },
  { userRating: "3 Star", userBadge: "10" },
  { userRating: "2 star", userBadge: "10" },
  { userRating: "1 star", userBadge: "10" },
];

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const locationDropDownIPtions = [
  { label: "Washington, California", value: "Washington, California" },
  { label: "Washington, Connecticut", value: "Washington, Connecticut" },
  { label: "Washington, D.C.", value: "Washington, D.C." },
  { label: "Washington, Illinois.", value: "Washington, Illinois." },
  { label: "Washington Mills, Iowa", value: "Washington Mills, Iowa" },
  { label: "Washington, Mississippi", value: "Washington, Mississippi." },
];

export default function ProfilesFilterPage() {
  const [searchBarValue9, setSearchBarValue9] = useState("");

  return (
    <div className="w-full bg-foundation-white-white_500-0">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center self-stretch bg-foundation-maastricht_blue-maastricht_blue_50-1 pb-5">
          <div className="container-xs mb-[92px] flex flex-col items-center gap-[50px] 1g:p-5 md:p-5">
            <NavigationBar className="self-stretch" />
            <Heading
              size="s_b_56"
              as="h1"
              className="!text-foundation-maastricht_blue-maastricht_blue_500-0 md:text-[36px] sm:text-[30px]"
            >
              Pro-files Filter
            </Heading>
          </div>
        </div>
        <div className="container-xs mt-[50px] 1g:p-5 md:p-5">
          <div className="flex items-start gap-6 md:flex-col">
            <div className="mt-[82px] w-[24%] md:w-full">
              <div className="flex flex-col gap-[18px] rounded-[20px] border-[1.5px] border-solid border-blue_gray-200 bg-foundation-floral_white-floral_white_500 px-5 py-7 sm:py-4">
                <div
                  className="mr-1.5 flex flex-col items-start gap-2.5 lg:mr-0 md:mr-0"
                  style={{}}
                >
                  <Heading as="h2">Search by Job Title</Heading>
                  <Input
                    color="foundation_maastricht_blue_maastricht_blue_50_1"
                    size="xs"
                    variant="fill"
                    name="Input"
                    placeholder={`Service or Name`}
                    value={searchBarValue9}
                    onChange={(e) => setSearchBarValue9(e.target.value)}
                    prefix={<IoSearchOutline />}
                    suffix={
                      searchBarValue9?.length > 0 ? (
                        <IoMdClose
                          onClick={() => setSearchBarValue9("")}
                          height={24}
                          width={24}
                          className="cursor-pointer"
                        />
                      ) : null
                    }
                    className="gap-3 self-stretch rounded-[10px] text-foundation-black-black_300 !pr-[15px]"
                  />
                </div>
                <div className="mr-1.5 flex flex-col items-start gap-2.5 1g:mr-0 md:mr-0">
                  <Heading as="h3">Location</Heading>
                  <SelectBox
                    color="foundation_maastricht_blue_maastricht_blue_50_1"
                    size="md"
                    variant="fill"
                    indicator={
                      <IoIosArrowDown
                        width={20}
                        height={20}
                        className="h-[20px] w-[20px]"
                      />
                    }
                    getOptionLabel={(
                      e // ====== I well be use later [getOptionLabel] ======
                    ) => (
                      <>
                        <div className="flex items-center gap-2">
                          <GrLocation
                            width={20}
                            height={20}
                            className="h-[20px] w-[20px]"
                          />
                          <span>{e.label}</span>
                        </div>
                      </>
                    )}
                    name="Choose city"
                    placeholder={`Choose city`}
                    options={locationDropDownIPtions}
                    className="self-stretch rounded-[10px] !px-[15px] gap-4"
                  />
                </div>
                <div className="mb-[22px] mr-1.5 flex flex-col gap-[18px] 1g:mr-0 md:mr-0">
                  <div className="flex flex-col items-start gap-3">
                    <Heading as="h4">Services</Heading>
                    <div className="flex flex-col gap-0.5 self-stretch">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {data1.map((d, index) => (
                          <UserProfile4 {...d} key={"checktextbadge" + index} />
                        ))}
                      </Suspense>
                    </div>
                  </div>
                  <Button shape="round" className="self-stretch">
                    Show More
                  </Button>
                  <div className="flex flex-col items-start gap-2.5">
                    <Heading as="h5">Service Type</Heading>
                    <div className="flex flex-col gap-0.5 self-stretch">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {data2.map((d, index) => (
                          <UserProfile5
                            {...d}
                            key={"checktextbadge1" + index}
                          />
                        ))}
                      </Suspense>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3">
                    <Heading as="h6">Reviews</Heading>
                    <div className="flex flex-col gap-0.5 self-stretch">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {data3.map((d, index) => (
                          <UserProfile6
                            {...d}
                            key={"checktextbadge2" + index}
                          />
                        ))}
                      </Suspense>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center self-center md:self-stretch">
              <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
                <Text
                  as="p"
                  className="mb-2 self-end text-foundation-black-black_400-0 sm:self-auto"
                >
                  Showing 6-6 of 10 results
                </Text>
                <SelectBox
                  color="foundation_floral_white_floral_white_500"
                  size="1g"
                  variant="fill"
                  shape="round"
                  indicator={
                    <IoIosArrowDown
                      width={24}
                      height={24}
                      className="h-[24px] w-[24px]"
                    />
                  }
                  name="Sort by latest"
                  placeholder={`Sort by latest`}
                  options={dropDownOptions}
                  className="w-[15%] border border-solid border-foundation-black-black_500-0 sm:w-full p-[15px]"
                />
              </div>
              <div className="mt-8 grid grid-cols-3 justify-center gap-6 self-stretch lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {data.map((d, index) => (
                    <UserProfile3 {...d} key={"frame1000006997" + index} />
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
        <Footer className="mt-[120px] self-stretch" />
      </div>
    </div>
  );
}
