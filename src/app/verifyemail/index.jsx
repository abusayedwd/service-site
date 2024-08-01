"use client";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { NavigationBar } from "@/components/NavigationBar";

import Link from "next/link";
import React, { useState } from "react";
import OTPInput from "react-otp-input";

export default function ForgotpasswordPage() {
  const [otp, setOtp] = useState("");

  return (
    <div className="flex w-full flex-col items-center bg-foundation-white-white_500-0 py-5">
      <div className="container-xs mb-1 flex flex-col items-center gap-[132px] lg:gap-[99px] lg:p-5 md:gap-[99px] md:p-5 sm:gap-[66px]">
        <NavigationBar />
        <div className="flex w-[48%] flex-col items-start gap-[26px] rounded-[16px] border border-solid border-foundation-maastricht_blue-maastricht_blue_blue_500-0 bg-foundation-white-white_500-0 px-11 py-10 shadow-xl lg:w-full md:w-full md:px-5 sm:p-4">
          <div className="flex flex-col items-start gap-4 self-stretch">
            <Heading
              size="textxl"
              as="h1"
              className="md:text-[28px] sm:text-[22px]"
            >
              Verify Email
            </Heading>
            <Text as="p" className="!text-foundation-black-black_400-1">
              Please enter the OTP we have sent you in your Email.
            </Text>
          </div>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputStyle="flex items-center justify-center cursor-text h-[76px] w-[96px] text-foundation-black-black_400-1 border-foundation-black-black_500-0 border border-solid bg-foundation-maastricht_blue-maastricht_blue_50-1 text-center rounded-[20px]"
            containerStyle="flex w-auto gap-[18px]"
            renderInput={(inputProps, i) => (
              <label
                className="flex h-[76px] w-[96px] cursor-text items-center justify-center rounded-[20px] border border-solid border-foundation-black-black_500-0 bg-foundation-maastricht_blue-maastricht_blue_50-1 text-center text-foundation-black-black_400-1 sm:h-[38px] sm:w-[45px] sm:rounded-[15px]"
                key={i}
              >
                <input {...inputProps} />
              </label>
            )}
          />
          <div className="flex flex-wrap justify-between gap-5 self-stretch">
            <Text as="p" className="!text-foundation-black-black_400-0">
              Didn't receive code?
            </Text>
            <Link href="#">
              <Text as="p" className="!text-foundation-black-black_400-0">
                Resend
              </Text>
            </Link>
          </div>
          <Button
            size="3x1"
            className="mb-[46px] self-stretch rounded-md py-[16px]"
          >
            Verify
          </Button>
        </div>
      </div>
    </div>
  );
}
