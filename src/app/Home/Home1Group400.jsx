import { Button } from "@/components/Button";
import { Img } from "@/components/Img";
import { Text } from "@/components/Text";
import { Heading } from "@/components/Heading";

import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";
const data = [
  {
    projectManagerText: "Domestic",
    exploreNowText: "Explore Now",
    ImageURL: "img_education.svg",
  },
  {
    projectManagerText: "Explore Now",
    exploreNowText: "Explore Now",
    ImageURL: "img_agriculture.svg",
  },
  {
    projectManagerText: "Explore Now",
    exploreNowText: "Explore Now",
    ImageURL: "img_ainter.svg",
  },
  {
    projectManagerText: "Explore Now",
    exploreNowText: "Explore Now",
    ImageURL: "",
  },
  {
    projectManagerText: "Stone Mason",
    exploreNowText: "Explore Now",
    ImageURL: "img_stoneMason.svg",
  },
  {
    projectManagerText: "Explore Now",
    exploreNowText: "Explore Now",
    ImageURL: "",
  },
  {
    projectManagerText: "Explore Now",
    exploreNowText: "Explore Now",
    ImageURL: "",
  },
  {
    projectManagerText: "Explore Now",
    exploreNowText: "Explore Now",
    ImageURL: "",
  },
  {
    projectManagerText: "Explore Now",
    exploreNowText: "Explore Now",
    ImageURL: "",
  },
  {
    projectManagerText: "Explore Now",
    exploreNowText: "Explore Now",
    ImageURL: "",
  },
  {
    projectManagerText: "Explore Now",
    exploreNowText: "Explore Now",
    ImageURL: "",
  },
  {
    projectManagerText: "Explore Now",
    exploreNowText: "Explore Now",
    ImageURL: "",
  },
];
export default function Home1Group400() {
  return (
    <div className="flex justify-center sm:px-2 lg:px-10">
      <div className="container-xs flex flex-col items-end gap-8 1g:p-5 md:p-5">
        <div className="flex flex-col items-center gap-[50px] self-stretch">
          <div className="flex flex-col items-center gap-4">
            <Heading
              size="m_48"
              as="h2"
              className="!text-foundation-maastricht_blue-maastricht_blue_500-0 md:text-[32px] sm:text-[26px]"
            >
              Browse by Services
            </Heading>
            <Text as="p">Narrow down the service you are looking for</Text>
          </div>
          <div className="grid grid-cols-6 justify-center gap-6 self-stretch lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <a href="#" target="_blank" key={index}>
                  <UserProfile
                    {...d}
                    key={"servicescard" + index}
                    className="bg-[#E6E8EA] hover:bg-foundation-black-black_500-0 text-foundation-black-black_500-0 group duration-300"
                  />
                </a>
              ))}
            </Suspense>
          </div>
        </div>
        <Button
          color="default_black"
          variant="outline"
          shape="round"
          rightIcon={
            <Img
              src="img_job_post_card_up_arraw.svg"
              width={18}
              height={18}
              alt="Job Post Card/up Arraw"
              className="h-[18px] w-[18px]"
            />
          }
          className="min-w-[136px] gap-2 ! rounded-lg"
        >
          All Service
        </Button>
      </div>
    </div>
  );
}
