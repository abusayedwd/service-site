"use client";

import { Img } from "@/components/Img";
import { Text } from "@/components/Text";
import { Slider } from "@/components/Slider";
import { Heading } from "@/components/Heading";

import React from "react";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function HomeRecentReviews() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="overflow-hidden bg-foundation-floral_white-floral_white_500 py-[70px]">
      <div className="container-xs relative flex sm:flex-col">
        <div className="flex-[40%] sm:w-full !sm:px-4">
          <Heading
            size="m_48"
            as="h2"
            className="w-full md:px-5 sm:w-full mb-[20px] leading-[72px] !text-foundation-maastricht_blue-maastricht_blue_500-0 md:text-[32px] sm:text-[26px]"
          >
            Recent reviews from happy employers
          </Heading>
          <div className="flex h-max w-[90%]  flex-col gap-8">
            <Text
              as="p"
              className="!w-full leading-5 !text-default-black lg:w-full lg:p-5 md:w-full md:px-5"
            >
              Employ someone based off of their references from previous work
              completed. All reviews in one place
            </Text>
            <div className="flex items-start gap-80 !sm:px-4">
              <Img
                src="ReviewUser.png"
                width={152}
                height={42}
                alt="Frame 427318798"
                className="object-cover !sm:px-4"
              />
            </div>
          </div>
        </div>
        <div className="w-[60%] sm:w-full sm:mt-[40px]">
          <div className="  max-w-[1616px] gap-6 md:relative md:flex-col">
            <Slider
              autoPlay
              autoPlayInterval={3000}
              responsive={{
                0: { items: 1 },
                551: { items: 1 },
                1051: { items: 2 },
                1441: { items: 2 },
              }}
              paddingLeft={0}
              paddingRight={0}
              disableDotsControls
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setSliderState(e?.item);
              }}
              ref={sliderRef}
              items={[...Array(9)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="px-3">
                    <div className="flex flex-col gap-6 rounded-[16px] border-[1.5px] border-solid border-foundation-maastricht_blue-maastricht_blue_500-0 bg-foundation-maastricht_blue-maastricht_blue_50-1 p-5">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center">
                          <Img
                            src="Labu_Bashar.png"
                            width={64}
                            height={64}
                            alt="Ellipse 45"
                            className="h-[64px] w-[64px] rounded-[32px] object-cover"
                          />
                          <div className="flex flex-1 flex-col items-start px-3">
                            <Text
                              size="textlg"
                              as="p"
                              className="!text-foundation-black-black_500-0"
                            >
                              Labu Bashar{" "}
                            </Text>
                            <Text
                              size="texts"
                              as="p"
                              className="!text-foundation-black-black_500-0"
                            >
                              Ui/Ux Designer{" "}
                            </Text>
                          </div>
                        </div>
                        <Text
                          size="texts"
                          as="p"
                          className="text-justify leading-[22px] !text-foundation-black-black_500-0"
                        >
                          Like this video and ask your question in the comment
                          section. Don't forget to subscribe to Easy Tutorials
                          YouTube channel to watch more videos of website
                          designing, digital marketing, and Photoshop.{" "}
                        </Text>
                      </div>
                      <div className="flex items-center justify-end">
                        <Img
                          src="Rating_Stare.svg"
                          width={24}
                          height={24}
                          alt="Arrow Left"
                          className="h-[24px] w-[24px]"
                        />
                        <div className="flex flex-col items-center p-2.5">
                          <Text
                            size="textlg"
                            as="p"
                            className="!text-foundation-black-black_500-0"
                          >
                            4.5
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
          <button
            onClick={() => {
              sliderRef.current?.slidePrev();
            }}
          >
            <div className="absolute bottom-[39%] sm:bottom-[-7%] left-[36%] sm:left-[4%] m-auto flex flex-col items-center rounded-[28px] bg-foundation-black-black_500-0 p-4">
              <BsArrowLeft className="text-[#fff] text-[20px]" />
            </div>
          </button>
          <button
            onClick={() => {
              sliderRef.current?.slideNext();
            }}
          >
            <div className="absolute bottom-[39%] sm:bottom-[-7%] right-[8%] sm:right-[4%] m-auto flex flex-col items-center rounded-[28px] bg-foundation-black-black_500-0 p-4">
              <BsArrowRight className="text-[#fff] text-[20px]" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
