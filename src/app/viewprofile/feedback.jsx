import React, { Suspense } from "react";

import { Text } from "@/components/Text";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { TextArea } from "@/components/TextArea";
import { RatingBar } from "@/components/RatingBar";
import UserProfiles from "@/components/UserProfile8";

const data = [
  {
    userName: "Gazi",
    ratingValue: "5.0",
    reviewDate: "MAR 08, 2024",
    reviewText:
      "Elisha is just purely exceptional and thoughtful in design and understanding of requirements. Even when the requirements aren&#39;t as polished and professional, See less",
  },
  {
    userName: "Gazi",
    ratingValue: "5.0",
    reviewDate: "MAR 08, 2024",
    reviewText:
      "Elisha is just purely exceptional and thoughtful in design and understanding of requirements. Even when the requirements aren&#39;t as polished and professional, See less",
  },
  {
    userName: "Gazi",
    ratingValue: "5.0",
    reviewDate: "MAR 08, 2024",
    reviewText:
      "Elisha is just purely exceptional and thoughtful in design and understanding of requirements. Even when the requirements aren&#39;t as polished and professional, See less",
    userName: "Gazi",
    ratingValue: "5.0",
    reviewDate: "MAR 08, 2024",
    reviewText:
      "Elisha is just purely exceptional and thoughtful in design and understanding of requirements. Even when the requirements aren&#39;t as polished and professional, See less",
  },
];
export default function Feedback() {
  return (
    <div className="mb-[60px] flex justify-center ">
      <div className="container-xs flex justify-center lg:p-5 md:p-5">
        <div className="flex w-full items-start gap-6 md:flex-col">
          <div className="flex w-[40%] flex-col items-center gap-8 rounded-[12px] bg-foundation-floral_white-floral_white_500 px-[34px] py-[54px] md:w-full md:py-5 sm:p-4">
            <Text
              size="poppins_r_30"
              as="p"
              className="!text-default-black md:text-[24px] sm:text-[22px]"
            >
              Give your feedback
            </Text>
            <div className="flex flex-col items-end gap-8 self-stretch">
              <div className="flex flex-col gap-6 self-stretch">
                <Input
                  shape="round"
                  type="text"
                  name="Input fill"
                  placeholder={"Name"}
                />
                <TextArea
                  shape="round"
                  name="Input fill"
                  placeholder={`write your review`}
                  className="!border-foundation-black-black_500-0 text-foundation-black-black_400-0"
                />
                <div className="flex flex-col items-start gap-[18px]">
                  <Text as="p" className="! text-default-black">
                    Enter Your feedback
                  </Text>
                  <RatingBar
                    value={1}
                    isEditable={true}
                    size={32}
                    className="flex gap-2.5"
                  />
                </div>
              </div>
              <Button size="3x1" shape="round" className="min-w-[200px] py-3">
                Submit
              </Button>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start gap-12 self-center md:self-stretch">
            <Button shape="square" className="min-w-[146px] font-medium">
              Work Reviews
            </Button>
            <div className="flex flex-col gap-6 self-stretch">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <UserProfiles {...d} key={"rev24" + index} />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
