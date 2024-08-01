import { Text } from "@/components/Text";
import { Heading } from "@/components/Heading";

import UserProfile1 from "../../components/UserProfile1";
import React, { Suspense } from "react";
const data = [
  {
    userImage: "img_cv.svg",
    titleText: "Create a Pro-file",
    descriptionText: (
      <>
        Fill in the easy to complete Pro-file fields to build out your Pro-file.
        <br />
        Your Pro-file doubles as your CV
      </>
    ),
  },
  {
    userImage: "img_briefcase.svg",
    titleText: "Make your Profile Visible",
    descriptionText:
      "Subscribe to make your Pro-file visible, sharable, downloadable and watch the reviews pile up",
  },
  {
    userImage: "img_account.svg",
    titleText: "Get Sharing",
    descriptionText:
      "Share your Pro-file with potential new employers at the click of a button. Download a PDF CV from within your Pro-file.",
  },
];
export default function Home1Group111() {
  return (
    <div className="w-full flex flex-col items-center  sm:px-3 lg:px-10 bg-foundation-maastricht_blue-maastricht_blue_50-0 py-[100px] 1g:py-8 md:py-5 sm:py-4">
        <div className="container-xs mb-[58px] flex flex-col items-center gap-[42px] 1g:p-5 md:p-5">
          <div className="flex flex-col items-center gap-3.5">
            <Heading
              size="m_48"
              as="h2"
              className="!text-foundation-maastricht_blue-maastricht_blue_500-0 md:text-[32px] sm:text-[26px]"
            >
              How It Work ?
            </Heading>
            <Text as="p">
              Bridging the gap between the employee and employer
            </Text>
          </div>
          <div className="flex gap-6 self-stretch md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <UserProfile1
                  {...d}
                  key={"frame427318794" + index}
                  className="bg-foundation-maastricht_blue-maastricht_blue_500-0"
                />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
  );
}
