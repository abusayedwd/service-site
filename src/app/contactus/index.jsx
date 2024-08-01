import { Text } from "@/components/Text";
import { Img } from "@/components/Img";
import { Heading } from "@/components/Heading";
import { Button } from "@/components/Button";

import Link from "next/link";

import { NavigationBar } from "@/components/NavigationBar";
import ContactUsFormSection from "./contactUsformSection";
import Footer from "@/components/Footer";

export default function ContactusPage() {
  return (
    <div className="flex w-full flex-col gap-[120px] bg-foundation-white-white_500-0 lg:gap-[90px] md:gap-[90px] sm:gap-[60px]">
      <div className="flex flex-col gap-[42px]">
        <div className="flex flex-col items-center bg-foundation-maastricht_blue-maastricht_blue_50-1 pb-5">
          <div className="container-xs mb-[90px] flex flex-col items-center gap-[52px] 1g:p-5 md:p-5 sm:gap-[26px]">
            <NavigationBar className="self-stretch" />
            <Heading
              size="s_b_56"
              as="h1"
              className="! text-foundation-maastricht_blue-maastricht_blue_500-0"
            >
              Contact Us
            </Heading>
          </div>
        </div>
      </div>
      <ContactUsFormSection />
      <Footer />
    </div>
  );
}
