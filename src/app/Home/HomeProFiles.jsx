import { Img } from "@/components/Img";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";

import UserProfile2 from "@/components/UserProfile2";
import React, { Suspense } from "react"; //HomeProFiles
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
];
export default function HomeProFiles() {
  return (
    <div className="flex flex-col items-center sm:px-2 lg:px-10">
      <div className="container-xs flex flex-col gap-12 1g:p-5 md:p-5">
        <div className="flex items-center justify-between gap-5">
          <Heading
            size="m_48"
            as="h2"
            className="!text-foundation-maastricht_blue-maastricht_blue_500-0 md:text-[32px] sm:text-[26px]"
          >
            The Pro-files
          </Heading>
          <Link href="/profiles">
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
              className="min-w-[106px] gap-2 ! rounded-lg"
            >
              View All
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-4 justify-center gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <UserProfile2 {...d} key={"group282" + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
