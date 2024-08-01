import React from "react";
import { Img } from "@/components/Img";
import { Text } from "@/components/Text";
import { Heading } from "@/components/Heading";

const WorkTimeline = () => {
  return (
    <div className="mt-[50px] flex flex-col items-center mb-[100px]">
      <div className="container-xs flex flex-col gap-8 lg:p-5 md:p-5 w-full">
        <div className="flex items-center gap-6 md:flex-col">
          <div className="flex flex-1 flex-col items-start gap-4 md:self-stretch">
            <Heading
              size="m_30"
              as="h2"
              className="md:text-[24px] sm:text-[22px]"
            >
              Our Story
            </Heading>
            <Text size="textmd" as="p" className="w-full leading-[22px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&#39;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&#39;t anything embarrassing
              hidden in the middle of text. the middle of text. All the Lorem
              Ipsum generators on the Internet tend to repeat predefined chunks
              as necessary, making this the first true generator on the
              Internet. It uses a dictionary of over 200 Latin words,
            </Text>
          </div>
          <Img
            src="OurSroryImage.png"
            width={798}
            height={520}
            alt="Rectangle 6493"
            className="h-[520px] w-[50%] rounded-[16px] object-cover md:w-full"
          />
        </div>
        <div className="flex items-center gap-6 md:flex-col">
          <Img
            src="OurMissionImage.png"
            width={798}
            height={520}
            alt="Rectangle 6494"
            className="h-[520px] w-[50%] rounded-[16px] object-cover md:w-full"
          />
          <div className="flex flex-1 flex-col items-start gap-4 md:self-stretch">
            <Heading
              size="m_30"
              as="h3"
              className="md:text-[24px] sm:text-[22px]"
            >
              Our Mission
            </Heading>
            <Text size="textmd" as="p" className="w-full leading-[22px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&#39;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&#39;t anything embarrassing
              hidden in the middle of text. the middle of text. All the Lorem
              Ipsum generators on the Internet tend to repeat predefined chunks
              as necessary, making this the first true generator on the
              Internet. It uses a dictionary of over 200 Latin words,
            </Text>
          </div>
        </div>
        <div className="flex items-center gap-6 md:flex-col">
          <div className="flex flex-1 flex-col items-start gap-4 md:self-stretch">
            <Heading
              size="m_30"
              as="h4"
              className="md:text-[24px] sm:text-[22px]"
            >
              Our Goal
            </Heading>
            <Text size="textmd" as="p" className="w-full leading-[22px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&#39;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&#39;t anything embarrassing
              hidden in the middle of text. the middle of text. All the Lorem
              Ipsum generators on the Internet tend to repeat predefined chunks
              as necessary, making this the first true generator on the
              Internet. It uses a dictionary of over 200 Latin words,
            </Text>
          </div>
          <Img
            src="OurGoalImage.png"
            width={798}
            height={520}
            alt="Rectangle 6494"
            className="h-[520px] w-[50%] rounded-[16px] object-cover md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkTimeline;
