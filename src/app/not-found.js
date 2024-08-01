import { Text } from "@/components/Text";
import { Img } from "@/components/Img";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";

import React from "react";

import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="mb-1 flex justify-center self-stretch my-10">
      <div className="container-xs flex justify-center lg:p-5 md:p-5">
        <div className="relative h-[1080px] w-full content-end bg-[#091D2E] lg:h-auto md:h-auto">
          <div className="mx-auto flex flex-1 items-start justify-end md:flex-col">
            <Link href="/">
              <Button
                shape="round"
                leftIcon={<BsArrowLeft />}
                className="mt-[198px] gap-3 px-6 py-6 text-[20px] z-10"
              >
                Back to home
              </Button>
            </Link>
            <Img
              src="bg-animation3.svg"
              width={812}
              height={552}
              className="relative ml-[-90px] h-[552px] w-[46%] self-center md:ml-0 md:w-full z-[0]"
              alt="Breadcrumb Icon"
            />
            <div className="absolute bottom-[36%] left-0 right-0 m-auto flex flex-1 flex-col items-center px-14 md:px-5 sm:px-4">
              <Heading
                size="m_56"
                as="h1"
                className="md:text-[36px] sm:text-[30px] !text-[#FFF]"
              >
                Oops, This Page Could Not Be Found.
              </Heading>
              <Text as="p" className="!text-[#FFF]">
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable.
              </Text>
            </div>
            <Img
              src="bg-animation.svg"
              width={340}
              height={338}
              alt="Decorative Image"
              className="absolute left-[8%] top-[8%] m-auto h-[338px] w-[20%]"
            />
            <div className="absolute left-0 right-0 top-[21%] m-auto h-[330px] flex-1 px-[484px] lg:px-8 md:px-5 sm:px-4">
              <Heading
                as="h2"
                size="textxl"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max text-[400px] text-[#fff] sm:text-[200px]"
              >
                4 4
              </Heading>
              <div className="absolute left-0 right-0 top-[12%] m-auto flex flex-1 items-start justify-center px-14 md:px-5 sm:px-4">
                <div className="h-[226px] w-[226px] self-center rounded-[112px] bg-blue_gray-900_01" />
                <div className="relative ml-[-82px] h-[110px] w-[110px] rounded-[54px] bg-orange-300" />
              </div>
            </div>
            <Img
              src="bg-animation2.svg"
              width={426}
              height={322}
              alt="Background Image"
              className="absolute right-[4%] top-[3%] m-auto h-[322px] w-[26%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
