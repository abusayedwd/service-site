import React from "react";

import { Heading } from "@/components/Heading";
import { NavigationBar } from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import EditProfileForm from "./editprofileform";

export default function EditProfile() {
  return (
    <div className="w-full bg-foundation-white-white_500-0">
      <div className="flex flex-col items-center bg-foundation-maastricht_blue-maastricht_blue_50-1 pb-5">
        <div className="container-xs mb-[104px] flex flex-col items-center gap-[68px] lg:p-5 md:p-5 sm:gap-[34px]">
          <NavigationBar className="self-stretch" />
          <Heading
            size="textxl"
            as="h1"
            className="!text-foundation-primary_black-primary_black_500 md:text-[28px] sm:text-[22px]"
          >
            My Profile
          </Heading>
        </div>
      </div>
      <EditProfileForm />
      <Footer className="mt-64" />
    </div>
  );
}
