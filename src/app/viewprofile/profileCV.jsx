import React from "react";

import { Img } from "@/components/Img";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { RatingBar } from "@/components/RatingBar";
import UserProfile7 from "@/components/UserProfile7";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiFacebook, FiShare2 } from "react-icons/fi";
import { MdWhatsapp } from "react-icons/md";
import Link from "next/link";

export default function ProfileCV() {
  const MyCV = "/profileCV/MyCV.pdf";

  return (
    <div className="flex justify-center sm:px-5 lg:px-10">
      <div className="container-xs flex justify-center 1g:p-5 md:p-5">
        <div className="flex w-full flex-col gap-[22px]">
          <div className="flex items-center rounded-[20px] bg-foundation-floral_white-floral_white_500 p-[26px] md:flex-col sm:p-4">
            <div className="flex w-full items-center gap-6 md:flex-col">
              <Img
                src="profileUser.png"
                width={220}
                height={220}
                className="h-[220px] w-[220px] rounded-[20px] object-cover md:w-full"
                alt="Ellipse 55"
              />
              <div className="flex flex-1 flex-col items-start gap-2 md: self-stretch">
                <div className="flex flex-col items-start gap-2 self-stretch">
                  <Heading size="m_24" as="h2">
                    Bashar islam
                  </Heading>
                  <Text
                    size="outfit_r_16"
                    as="p"
                    className="!text-foundation-black-black_400-0"
                  >
                    Designer
                  </Text>
                  <div className="flex gap-2 self-stretch">
                    <HiOutlineLocationMarker className="h-[24px] w-[24px]" />
                    <Text
                      size="outfit_r_16"
                      as="p"
                      className="text-foundation-black-black_400-0"
                    >
                      Dhaka Bangladesh
                    </Text>
                  </div>
                </div>
                <Text as="p" className="!text-foundation-black-black_400-0">
                  56/Road 1/2, Dhaka 5400
                </Text>
                <div className="flex items-center gap-[7px] self-stretch">
                  <RatingBar
                    value={1}
                    isEditable={true}
                    size={16}
                    className="flex gap-2.5"
                  />
                  <Text as="p" className="! text-foundation-black-black_400-0">
                    (12)
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-end gap-[13px] self-end px-7 md:self-auto sm:px-0">
              <Link href={`${MyCV}`} download target="_blank">
                <Button
                  size="3xl"
                  shape="round"
                  leftIcon={
                    <Img
                      src="pdf.svg"
                      width={18}
                      height={22}
                      alt="Calendar"
                      className="h-[22px] w-[18px]"
                    />
                  }
                  className="min-w-[200px] gap-1 sm:min-w-[150px] sm:p-0 ms:text-[11px] !sm:m-0"
                >
                  Download Cv
                </Button>
              </Link>

              <Button
                size="3x1"
                variant="outline"
                shape="round"
                className="min-w-[200px] sm:min-w-[100px] sm:p-0 sm:h-auto"
              >
                <Link href="/editprofile">Edit profile</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-start gap-6 md:flex-col">
            <div className="flex w-[40%] flex-col gap-[22px] rounded-[12px] bg-foundation-floral_white-floral_white_500 py-8 md:w-full sm:p-4">
              <div className="flex flex-col gap-[22px]">
                <div className="mx-7 flex flex-wrap items-center justify-between gap-5 1g:mx-0 md:mx-0">
                  <Text
                    size="r_22"
                    as="p"
                    className="!text-foundation-black-black_500-0"
                  >
                    Email
                  </Text>
                  <Text
                    size="r_18"
                    as="p"
                    className="mr-[72px] self-end text-foundation-black-black_400-0"
                  >
                    Bashar@gmail.com
                  </Text>
                </div>
                <div className="h-[0.8px] bg-gray-300" />
              </div>
              <div className="mx-7 flex flex-wrap items-center justify-between gap-5 lg:mx-0 md:mx-0">
                <Text
                  size="r_22"
                  as="p"
                  className="!text-foundation-black-black_500-0"
                >
                  Phone Number
                </Text>
                <Text
                  size="r_18"
                  as="p"
                  className="mr-28 !text-foundation-black-black_400-0"
                >
                  0154323234554
                </Text>
              </div>
              <div className="flex flex-col gap-5">
                <div className="h-[0.8px] bg-gray-300" />
                <div className="mx-7 flex flex-wrap items-center justify-between gap-5 lg:mx-0 md:mx-0">
                  <Text
                    size="r_22"
                    as="p"
                    className="!text-foundation-black-black_500-0"
                  >
                    Gender
                  </Text>
                  <Text
                    size="r_18"
                    as="p"
                    className="mr-[206px] self-end !text-foundation-black-black_400-0"
                  >
                    Male
                  </Text>
                </div>
                <div className="h-[0.8px] bg-gray-300" />
              </div>
              <div className="mx-7 flex flex-wrap items-center justify-between gap-5 1g:mx-0 md:mx-0">
                <Text
                  size="r_22"
                  as="p"
                  className="!text-foundation-black-black_500-0"
                >
                  Experience Level
                </Text>
                <Text
                  size="r_18"
                  as="p"
                  className="mr-[196px] self-end text-foundation-black-black_400-0"
                >
                  Expert
                </Text>
              </div>
              <div className="flex flex-col gap-[22px]">
                <div className="h-[0.8px] bg-gray-300" />
                <div className="mx-7 flex flex-wrap items-center justify-between gap-5 1g:mx-0 md:mx-0">
                  <Text
                    size="r_22"
                    as="p"
                    className="!text-foundation-black-black_500-0"
                  >
                    Age
                  </Text>
                  <Text
                    size="r_18"
                    as="p"
                    className="mr-[222px] !text-foundation-black-black_400-0"
                  >
                    30
                  </Text>
                </div>
                <div className="h-[0.8px] bg-gray-300" />
              </div>
              <div className="mx-7 flex flex-wrap items-center gap-24 lg:mx-0 lg:gap-5 md:mx-0 md:gap-5">
                <Text
                  size="r_22"
                  as="p"
                  className="!text-foundation-black-black_500-0"
                >
                  Education Qualification
                </Text>
                <Text
                  size="r_18"
                  as="p"
                  className="self-end text-foundation-black-black_400-0"
                >
                  Master Degree
                </Text>
              </div>
              <div className="flex flex-col gap-[22px]">
                <div className="h-[0.8px] bg-gray-300" />
                <div className="mx-7 flex flex-wrap items-center justify-between gap-5 1g:mx-0 md:mx-0">
                  <Text
                    size="r_22"
                    as="p"
                    className="!text-foundation-black-black_500-0"
                  >
                    Nationality
                  </Text>
                  <Text
                    size="r_18"
                    as="p"
                    className="mr-[142px] self-end text-foundation-black-black_400-0"
                  >
                    Bangladesh
                  </Text>
                </div>
                <div className="h-[0.8px] bg-gray-300" />
              </div>
              <div className="ml-7 mr-[34px] flex flex-wrap items-center justify-between gap-5 lg:mx-0 md:mx-0">
                <Text
                  size="r_22"
                  as="p"
                  className="!text-foundation-black-black_500-0"
                >
                  skill
                </Text>
                <Text
                  size="r_18"
                  as="p"
                  className="self-end text-foundation-black-black_400-0"
                >
                  Ui Design. Digital marketing
                </Text>
              </div>
              <div className="flex flex-col gap-[22px]">
                <div className="h-[0.8px] bg-gray-300" />
                <div className="ml-7 mr-[34px] flex flex-wrap items-center justify-between gap-5 lg:mx-0 md:mx-0">
                  <Text
                    size="r_22"
                    as="p"
                    className="!text-foundation-black-black_500-0"
                  >
                    My Availability
                  </Text>
                  <Text
                    size="r_18"
                    as="p"
                    className="self-end text-foundation-black-black_400-0"
                  >
                    Sunday, Monday, Thursday
                  </Text>
                </div>
                <div className="h-[0.8px] bg-gray-300" />
              </div>
              <div className="mx-7 flex items-center justify-center lg:mx-0 md:mx-0">
                <Text
                  size="r_22"
                  as="p"
                  className="!text-foundation-black-black_500-0"
                >
                  Share a link
                </Text>
                <div className="flex flex-1 justify-end gap-4 pl-14 pr-[104px] lg:pr-8 md:px-5 sm:px-4">
                  <Button
                    size="xs"
                    shape="circle"
                    className="w-[36px] !rounded-[18px] text-[#fff]"
                  >
                    <FiFacebook />
                  </Button>
                  <Button
                    size="xs"
                    shape="circle"
                    className="w-[36px] !rounded-[18px]"
                  >
                    <MdWhatsapp />
                  </Button>
                  <Button
                    size="xs"
                    shape="circle"
                    className="w-[36px] !rounded-[18px]"
                  >
                    <FiShare2 />
                  </Button>
                </div>
              </div>
              <div className="mb-[286px] h-[0.8px] bg-gray-300" />
            </div>
            <div className="flex flex-1 flex-col gap-6 rounded-[12px] bg-foundation-floral_white-floral_white_500 px-[22px] py-7 md:self-stretch sm:p-4">
              <div className="mr-8 flex flex-col gap-6 lg:mr-0 md:mr-0">
                <div className="flex flex-col gap-6">
                  <UserProfile7 />
                  <UserProfile7
                    aboutMeText="Education"
                    workintentiontext1={
                      <>
                        2020-2021
                        <br />
                        Master Bachelor
                      </>
                    }
                    workintentiontext2="Intend to work in a challenging and competitive environment where strong sense of responsibilities and commitment requires, where dignity of work provides job satisfaction and the place of work provides potential avenues for learning"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <Text
                    as="p"
                    className="leading-5 !text-foundation-black-black_400-0"
                  >
                    <>
                      2020-2021
                      <br />
                      Dhaka Univercity
                    </>
                  </Text>
                  <Text
                    size="textmd"
                    as="p"
                    className="leading-[22px] !text-foundation-black-black_400-0"
                  >
                    Intend to work in a challenging and competitive environment
                    where strong sense of responsibilities and commitment
                    requires, where dignity of work provides job satisfaction
                    and the place of work provides potential avenues for
                    learning
                  </Text>
                </div>
              </div>
              <div className="mb-[150px] mr-8 flex flex-col gap-6 lg:mr-0 md:mr-e">
                <div className="flex flex-col items-start gap-4">
                  <Heading
                    size="m_24"
                    as="h3"
                    className="!text-foundation-black-black_400-0"
                  >
                    Experience
                  </Heading>
                  <Text
                    size="outfit_r_16"
                    as="p"
                    className="w-full leading-6 !text-gray-900"
                  >
                    <span className="text-blue_gray-500">
                      <>
                        experience
                        <br />
                      </>
                    </span>
                    <span className="text-gray-900">
                      <>
                        Senior UI/UX Product Designer
                        <br />
                        Enterprise name
                        <br />
                      </>
                    </span>
                    <span className="text-blue_gray-500">
                      <>
                        Aug 2018 Present 1 year, Paris
                        <br />
                      </>
                    </span>
                    <span className="text-gray-900">
                      Directly collaborated with CEO and Product team to
                      prototype, design and deliver the UI and UX experience
                      with a lean design process: research, design, test, and
                      iterate.
                    </span>
                  </Text>
                </div>
                <Text
                  size="outfit_r_16"
                  as="p"
                  className="leading-6 !text-gray-900"
                >
                  <span className="text-blue_gray-500">
                    <>
                      experience
                      <br />
                    </>
                  </span>
                  <span className="text-gray-900">
                    <>
                      Senior UI/UX Product Designer
                      <br />
                      Enterprise name
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-500">
                    <>
                      Aug 2018 Present 1 year, Paris
                      <br />
                    </>
                  </span>
                  <span className="text-gray-900">
                    Directly collaborated with CEO and Product team to
                    prototype, design and deliver the UI and UX experience with
                    a lean design process: research, design, test, and iterate.
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
