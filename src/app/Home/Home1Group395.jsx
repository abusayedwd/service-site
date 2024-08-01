import { Img } from "@/components/Img";
import { Text } from "@/components/Text";
import { Heading } from "@/components/Heading";

import SearchAndFilter from "@/components/SearchAndFilter";
import React from "react";
export default function Home1Group395() {
  return (
    <div className="flex justify-center sm:px-5 lg:px-10">
      <div className="container-xs flex items-start justify-center gap-3 md:flex-col">
        <div className="mt-5 flex flex-1 flex-col items-start gap-6 md:self-stretch">
          <div className="flex flex-col gap-8 self-stretch">
            <div className="flex flex-col items-start gap-4">
              <Heading
                size="s_b_56"
                as="h1"
                className="leading-[72px] !text-foundation-maastricht_blue-maastricht_blue_600 md:text-[36px] sm:text-[30px]"
              >
                <>
                  Find the Pro-file that stands out <br />
                  from the crowd
                </>
              </Heading>
              <Text as="p" className="w- [92%] leading-5 lg:w-full md:w-full">
                With a potential employee or service providers reviews and
                recommendations all in one place, it makes it easier to find the
                right person for the job be it a once off refuse removal job, or
                a longer term home executive job. Fuez. bridges the gap between
                the job seeker and the employer.
              </Text>
            </div>
            <SearchAndFilter />
          </div>
          <Text
            size="textxs"
            as="p"
            className="!text-foundation-black-black_400-1"
          >
            Popular: Gardening, House Cleaning, Handy Man
          </Text>
        </div>
        <Img
          src="img_attachment_removebg_preview.png"
          width={620}
          height={546}
          alt="Attachment Removebg Preview"
          className="h-[546px] w-[38%] self-center object-cover md:w-full"
        />
      </div>
    </div>
  );
}
