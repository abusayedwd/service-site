import { Text } from "@/components/Text";
import { Heading } from "@/components/Heading";
import React from "react";
export default function PrivacyPolicyMain() {
  return (
    <div className="mt-[50px] flex flex-col items-center">
      <div className="container-xs flex flex-col lg:p-5 md:p-5">
        <Heading
          size="m_30"
          as="h2"
          className="leading-[45px] md:text-[24px] sm:text-[22px]"
        >
          <>
            Privacy Policy
            <br />
            Last Update: June 20, 2024
          </>
        </Heading>
        <div className="mt-3.5 flex flex-col items-start gap-2.5">
          <Heading as="h3">
            We collect several types of information from and about users of our
            website and services, including:
          </Heading>
          <div className="flex flex-col items-center gap-4 self-stretch">
            <Text
              as="p"
              className="!text-foundation-primary_black-primary_black_500"
            >
              <b>1.</b> Non-Personal Information: Information that does not
              identify you personally, including but not limited to usage data,
              general demographic information, and statistical or aggregated
              data.
            </Text>
            <Text
              as="p"
              className="!text-foundation-primary_black-primary_black_500"
            >
              <b>2.</b> Non-Personal Information: Information that does not
              identify you personally, including but not limited to usage data,
              general demographic information, and statistical or aggregated
              data.
            </Text>
            <Text
              as="p"
              className="!text-foundation-primary_black-primary_black_500"
            >
              <b>3.</b> Non-Personal Information: Information that does not
              identify you personally, including but not limited to usage data,
              general demographic information, and statistical or aggregated
              data.
            </Text>
            <Text
              as="p"
              className="!text-foundation-primary_black-primary_black_500"
            >
              <b>4.</b> Non-Personal Information: Information that does not
              identify you personally, including but not limited to usage data,
              general demographic information, and statistical or aggregated
              data.
            </Text>
            <Text
              as="p"
              className="!text-foundation-primary_black-primary_black_500"
            >
              <b>5.</b> Non-Personal Information: Information that does not
              identify you personally, including but not limited to usage data,
              general demographic information, and statistical or aggregated
              data.
            </Text>
            <Text
              as="p"
              className="!text-foundation-primary_black-primary_black_500"
            >
              <b>6.</b> Non-Personal Information: Information that does not
              identify you personally, including but not limited to usage data,
              general demographic information, and statistical or aggregated
              data.
            </Text>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start gap-2">
          <Heading
            as="h4"
            className="!text-foundation-primary_black-primary_black_500"
          >
            You have several rights concerning your personal data, including:
          </Heading>
          <div className="flex flex-col items-start gap-2 self-stretch px-1">
            <Text
              as="p"
              className="!text-foundation-primary_black-primary_black_500"
            >
              {" "}
              Access and Update: The right to access and update your personal
              information.
            </Text>
            <Text
              as="p"
              className="!text-foundation-primary_black-primary_black_500"
            >
              Delete: The right to request that we delete your personal
              information.
            </Text>
            <Text
              as="p"
              className="!text-foundation-primary_black-primary_black_500"
            >
              Opt-Out: The right to opt-out of marketing communications.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
