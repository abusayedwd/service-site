import { Img } from "@/components/Img";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";

import React from "react";
import {
  MdOutlineLocalPhone,
  MdOutlineEmail,
  MdOutlineWatchLater,
} from "react-icons/md";

const ContactUsFormSection = () => {
  return (
    <div className="flex justify-center px-14 md:px-5 sm:px-4">
      <div className="flex w-[92%] items-start justify-center lg:w-full md:w-full md:flex-col">
        <div className="flex flex-1 self-center px-4 sm:px-0 md:self-stretch">
          <div className="flex w-[84%] flex-col items-start gap-[30px] rounded-[16px] border border-solid border-foundation-maastricht_blue-maastricht_blue_500-0 bg-foundation-floral_white-floral_white__500 px-[22px] py-11 lg:w-full md:w-full md:py-5 sm:p-4">
            <div className="flex flex-col gap-[26px] self-stretch">
              <div className="mx-[142px] flex flex-col items-center gap-4 lg:mx-0 md:mx-0">
                <Heading
                  size="m_24"
                  as="h2"
                  className="text-foundation-maastricht_blue-maastricht_blue_500-0"
                >
                  Contact Info
                </Heading>
                <Text as="p" className="self-stretch text-center leading-5">
                  Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in
                  lectus tincidunt tincidunt ultrices.
                </Text>
              </div>
              <div className="flex gap-[22px] md:flex-col">
                <Input
                  shape="round"
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  className="w-full"
                />
                <Input
                  shape="round"
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  className="w-full"
                />
              </div>
              <Input
                shape="round"
                type="email"
                name="email"
                placeholder="Email"
              />
              <TextArea
                shape="round"
                name="message"
                placeholder="Write your message"
                className="border-foundation-black-black_500-0 text-foundation-black-black_400-0"
              />
            </div>
            <Button variant="outline" shape="round" className="min-w-[148px]">
              Send Message
            </Button>
          </div>
        </div>
        <div className="flex w-[38%] flex-col gap-4 md:w-full">
          <div className="flex flex-col gap-4">
            <Heading
              size="m_30"
              as="h3"
              className="leading-[45px] text-foundation-maastricht_blue-maastricht_blue_500-0 md:text-[24px] sm:text-[22px]"
            >
              You Will Grow, You Will Succeed. We Promise That.
            </Heading>
            <Text as="p" className="w-[80%] leading-5 lg:w-full md:w-full">
              Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in
              lectus tincidunt tincidunt ultrices. Diam convallis morbi
              pellentesque adipiscing
            </Text>
          </div>
          <div className="flex md:flex-col mb-2">
            <div className="flex w-full flex-col items-start">
              <Button
                size="xs"
                shape="circle"
                className="w-[36px] rounded-[18px]"
              >
                <MdOutlineLocalPhone width={24} height={24} />
              </Button>
              <Heading
                as="h4"
                className="mt-2.5 text-foundation-maastricht_blue-maastricht_blue_500-0"
              >
                Call for inquiry
              </Heading>
              <Text as="p">+27 64 918 3249</Text>
            </div>
            <div className="flex w-full flex-col items-start gap-1.5">
              <Button
                size="xs"
                shape="circle"
                className="w-[36px] rounded-[18px]"
              >
                <MdOutlineEmail width={24} height={24} />
              </Button>
              <Heading
                as="h5"
                className="text-foundation-maastricht_blue-maastricht_blue_500-0"
              >
                Send us email
              </Heading>
              <Text as="p">info@fuez.co.za</Text>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <Button
              size="xs"
              shape="circle"
              className="w-[36px] rounded-[18px]"
            >
              <MdOutlineWatchLater width={30} height={30} />
            </Button>
            <Heading
              as="h6"
              className="mt-2.5 text-foundation-maastricht_blue-maastricht_blue_500-0"
            >
              Opening hours
            </Heading>
            <Text as="p">Mon - Fri: 10AM - 10PM</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsFormSection;
