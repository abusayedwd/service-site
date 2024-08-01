import React from "react";

import { Img } from "@/components/Img";
import { Text } from "@/components/Text";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";

import { FaEyeSlash, FaEye } from "react-icons/fa";

export default function ChangePasswordForm() {
  return (
    <div className="mb-1 flex justify-center self-stretch">
      <div className="container-xs flex justify-center pl-14 pr-[136px] 1g:p-5 1g:pr-8 md:p-5 md:px-5 sm:px-4">
        <div className="flex w-[70%] flex-col items-start gap-8 rounded-[16px] bg-foundation-floral_white-floral_white_500 px-14 py-[86px] lg:w-full lg:py-8 md:w-full md:p-5 sm:p-4">
          <div className="flex flex-col !items-start gap-4">
            <Heading
              size="textxl"
              as="h1"
              className="md:text-[28px] sm:text-[22px]"
            >
              Change Password
            </Heading>
            <Text as="p" className="!text-foundation-black-black_400-1">
              Enter your New password.
            </Text>
          </div>
          <Input
            shape="round"
            type="password"
            name="Input fill"
            placeholder={`Old Password`}
            className="mr-2.5 w-full 1g:mr-0 md:mr-0"
            requird
          />
          <Input
            shape="round"
            type="password"
            name="Input fill"
            placeholder={`New Password`}
            requird
            suffix={<FaEyeSlash className="!ccursor-pointer" />}
            className="mr-2.5 w-full gap-2.5 lg:mr-0 md:mr-0"
          />
          <Input
            shape="round"
            type="password"
            name="Input fill"
            placeholder={`Confirm Password`}
            requird
            suffix={<FaEyeSlash />}
            className="mr-2.5 w-full gap-2.5 lg:mr-0 md:mr-0"
          />
          <Button
            size="3x1"
            className="mb-[84px] mr-2.5 w-full py-4 rounded-md 1g:mr-0 md:mr-0"
          >
            Change Password
          </Button>
        </div>
      </div>
    </div>
  );
}
