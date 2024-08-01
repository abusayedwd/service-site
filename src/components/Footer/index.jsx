import { Text } from "@/components/Text";
import { Img } from "@/components/Img";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";

import Link from "next/link";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex justify-center items-center sm:px-5 lg:px-10 py-24 lg:py-8 md:py-5 sm:py-4 bg-foundation-black-black_500-0`}
    >
      <div className="container-xs flex items-center justify-between gap-5 lg:p-5 md:flex-col md:p-5">
        <div className="flex w-[18%] flex-col gap-8 md:w-full">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Img
                src="FooterWebLogo.png"
                width={132}
                height={92}
                alt="Footer Logo"
                className="h-[92px] w-[132px] object-contain"
              />
            </Link>
            <Text
              as="p"
              className="leading-5 !text-foundation-white-white_500-0"
            >
              Gone are the days of struggling to get your CV to potential
              employers. Create a Pro-file, share your Pro-file, rack up the
              reviews
            </Text>
          </div>
          <div className="flex gap-3">
            <Button
              color="foundation_white_white_500_0"
              size="xs"
              shape="circle"
              className="w-[36px] !rounded-[18px]"
            >
              <Img src="FacebookLogo.svg" width={16} height={16} />
            </Button>
            <Button
              color="foundation_white_white_500_0"
              size="xs"
              shape="circle"
              className="w-[36px] !rounded-[18px]"
            >
              <Img src="LinkdinLOgo.png" width={16} height={16} />
            </Button>
            <Button
              color="foundation_white_white_500_0"
              size="xs"
              shape="circle"
              className="w-[36px] !rounded-[18px]"
            >
              <Img src="WhatsAppLogo.png" width={14} height={16} />
            </Button>
          </div>
        </div>
        <div className="flex w-[48%] items-start justify-between gap-5 md:w-full md:flex-col">
          <div className="flex w-[36%] flex-col items-start gap-4 md:w-full">
            <Heading
              size="s_b_24"
              as="h4"
              className="!text-foundation-white-white_500-0"
            >
              Company
            </Heading>
            <ul className="flex flex-col items-start gap-5">
              <li>
                <Link href="/aboutus">
                  <Text as="p" className="!text-foundation-white-white_500-0">
                    About Us
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="/howitworks">
                  <Text as="p" className="!text-foundation-white-white_500-0">
                    How it Works
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="/contactus">
                  <Text as="p" className="!text-foundation-white-white_500-0">
                    Contact us
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="/profiles" target="_blank" rel="noreferrer">
                  <Text as="p" className="!text-foundation-white-white_500-0">
                    Pro-files
                  </Text>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex w-[38%] flex-col items-start gap-4 md:w-full">
            <Heading
              size="s_b_24"
              as="h4"
              className="!text-foundation-white-white_500-0"
            >
              Customer
            </Heading>
            <ul className="flex flex-col items-start gap-5">
              <li>
                <Link href="#">
                  <Text as="p" className="!text-foundation-white-white_500-0">
                    Support
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Text as="p" className="!text-foundation-white-white_500-0">
                    Terms of services
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="/privacypolicy">
                  <Text as="p" className="!text-foundation-white-white_500-0">
                    Privacy policy
                  </Text>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-[38%] gap-4 self-center md:w-full">
            <Heading
              size="s_b_24"
              as="h4"
              className="!text-foundation-white-white_500-0"
            >
              Job Categories
            </Heading>
            <ul className="flex flex-col gap-5">
              <li>
                <Link href="/profilesfiltter">
                  <Text as="p" className="!text-foundation-white-white_500-0">
                    Software Development
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="/profilesfiltter">
                  <Text as="p" className="!text-foundation-white-white_500-0">
                    Designer
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Text as="p" className="!text-foundation-white-white_500-0">
                    Construction
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Text as="p" className="!text-foundation-white-white_500-0">
                    Education
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Text as="p" className="!text-foundation-white-white_500-0">
                    Financial Services
                  </Text>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-[14%] flex-col items-start gap-3.5 self-start md:w-full md:self-auto">
          <Heading
            size="s_b_24"
            as="h4"
            className="!text-foundation-white-white_500-0"
          >
            Contact
          </Heading>
          <div className="flex flex-col items-start gap-5 self-stretch">
            <div className="flex items-center gap-2.5">
              <Img
                src="phone.svg"
                width={24}
                height={24}
                alt="Icon Outline Phone"
                className="h-[24px] w-[24px]"
              />
              <Text as="p" className="!text-foundation-white-white_500-1">
                +27 64 918 3249
              </Text>
            </div>
            <div className="flex items-center gap-2.5">
              <Img
                src="mail.svg"
                width={24}
                height={24}
                alt="Icon Outline Mail"
                className="h-[24px] w-[24px]"
              />
              <Text as="p" className="!text-foundation-white-white_500-1">
                info@fuez.co.za
              </Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
