"use client";
import React, { useState } from "react";

import { Img } from "@/components/Img";
import { Text } from "@/components/Text";
import { Radio } from "@/components/Radio";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { SelectBox } from "@/components/SelectBox";
import { RadioGroup } from "@/components/RadioGroup";
import { TextArea } from "@/components/TextArea";

import ExperienceModal from "@/models/Experience";

import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const dropDownOptions = [
  { label: "option1", value: "option1" },
  { label: "option2", value: "option2" },
  { label: "option3", value: "option3" },
];

export default function EditProfileForm() {
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);

  const showExperienceModal = () => {
    setIsExperienceVisible(true);
  };

  const handleSaveExperience = (data) => {
    console.log("Experience saved", data);
    setIsExperienceVisible(false);
  };

  return (
    <div className="mt-[46px] flex justify-center">
      <div className="container-xs flex justify-center 1g:p-5 md:p-5">
        <div className="w-full rounded-[12px] bg-foundation-floral_white-floral_white_500 px-[42px] py-[58px] md:p-5 sm:p-4">
          <form action="#">
            <div className="mb-7 flex flex-col items-start">
              <Heading
                size="m_30"
                as="h2"
                className="!text-foundation-primary_black-primary_black_500 md:text-[24px] sm:text-[22px]"
              >
                Profile Setting
              </Heading>
              <Text
                size="outfit_r_16"
                as="p"
                className="mt-6 !text-foundation-black-black_300"
              >
                Complete your profile and keep it updated to help us connect you
                with the right people.
              </Text>
              <div className="mt-6 flex items-center gap-4 self-stretch md:flex-col">
                <Img
                  src="profileUser.png"
                  width={104}
                  height={104}
                  alt="Ellipse 55"
                  className="h-[104px] w-[104px] rounded-[20px] object-cover sm:rounded-full"
                />
                <div className="flex flex-1 flex-col items-start gap-3 md:self-stretch">
                  <Heading as="h3">Bashar islam</Heading>
                  <div className="flex items-center gap-3 self-stretch">
                    <Input
                      shape="round"
                      type="file"
                      name="Input fill"
                      placeholder={`Fast Name`}
                      className="flex rounded-[10px] bg-gray-200 border-none"
                      required
                    />
                    {/* <div className="flex rounded-[10px] bg-gray-200 p-1">
                    <Text as="p" className="p-1">
                      Choose file
                    </Text>
                  </div>
                  <Text
                    size="outfit_r_16"
                    as="p"
                    className="text-foundation-black-black_300"
                  >
                    Upload your image
                  </Text> */}
                  </div>
                </div>
              </div>
              <div className="mt-11 flex gap-6 self-stretch md:flex-col">
                <Input
                  shape="round"
                  type="text"
                  name="Input fill"
                  placeholder={`Fast Name`}
                  className="w-full"
                  required
                />
                <Input
                  shape="round"
                  type="text"
                  name="Input fill"
                  placeholder={`Last Name`}
                  className="w-full"
                />
              </div>
              <div className="mt-6 flex gap-6 self-stretch md:flex-col">
                <Input
                  shape="round"
                  type="email"
                  name="Input fill"
                  placeholder={`Email`}
                  className="w-full"
                  required
                />
                <Input
                  shape="round"
                  type="number"
                  name="Input fill"
                  placeholder={`Phone number`}
                  className="w-full"
                />
              </div>
              <div className="mt-6 flex gap-6 self-stretch md:flex-col">
                <Input
                  shape="round"
                  name="Input fill"
                  placeholder={`Address line`}
                  className="w-full"
                  required
                />
                <Input
                  shape="round"
                  name="Input fill"
                  placeholder={`Location`}
                  className="w-full"
                  required
                />
              </div>
              <div className="mt-6 flex gap-6 self-stretch md:flex-col">
                <SelectBox
                  size="xl"
                  shape="round"
                  indicator={<MdKeyboardArrowDown />}
                  name="Gender"
                  placeholder={`Gender`}
                  options={dropDownOptions}
                  className="w-full border border-solid border-foundation-black-black_500-0 !px-4 "
                />{" "}
                <Input
                  shape="round"
                  name="Input fill"
                  placeholder={`Date of birth`}
                  className="w-full"
                  required
                />
              </div>
              <div className="mt-6 flex gap-6 self-stretch md:flex-col">
                <Input
                  shape="round"
                  name="Input fill"
                  placeholder={`Nationality`}
                  className="w-full"
                />
                <SelectBox
                  size="x1"
                  shape="round"
                  indicator={<MdKeyboardArrowDown />}
                  name="Available days"
                  placeholder={`Days you are available`}
                  options={dropDownOptions}
                  className="w-full border border-solid border-foundation-black-black_500-0 !p-3"
                />
              </div>
              <Heading size="m_18" as="h4" className="mt-[18px]">
                Are You Student ?
              </Heading>
              <RadioGroup
                name="frame427318776"
                className="mt-2.5 flex self-stretch"
              >
                <Radio
                  value="yes"
                  label="Yes"
                  className="w-[4%] gap-3 text-[16px] text-foundation-black-black_500-0 "
                />
                <Radio
                  value="no"
                  label="NO"
                  className="ml-8 w-[4%] gap-3 text-[16px] text-foundation-black-black_500-0"
                />
              </RadioGroup>
              <div className="mt-5 flex gap-6 self-stretch md:flex-col">
                <SelectBox
                  size="x1"
                  shape="round"
                  indicator={<MdKeyboardArrowDown />}
                  name="Job Services"
                  placeholder={`Job Services`}
                  options={dropDownOptions}
                  className="w-full border border-solid border-foundation-black-black_500-0 !p-3"
                />
                <Input
                  shape="round"
                  name="Input fill"
                  placeholder={`Job Category`}
                  className="w-full"
                />
              </div>
              <div className="mt-6 flex gap-6 self-stretch md:flex-col">
                <Input
                  shape="round"
                  name="Input fill"
                  placeholder={`Services Type`}
                  className="w-full"
                />
                <SelectBox
                  size="xl"
                  shape="round"
                  indicator={<MdKeyboardArrowDown />}
                  name="Experience"
                  placeholder={`Experience Level`}
                  options={dropDownOptions}
                  className="w-full border border-solid border-foundation-black-black_500-0 !px-4"
                />
              </div>
              <div className="mt-6 flex gap-4 self-stretch items-center">
                <Input
                  shape="round"
                  type="text"
                  name="Input fill"
                  placeholder={`Work Experience`}
                  suffix={<MdKeyboardArrowDown />}
                  className="flex-grow gap-2.5"
                />
                <Button
                  size="2x1"
                  shape="square"
                  className="w-[54px] h-[54px] sm:w-[35px] sm:h-[35px] rounded-full"
                  type="button"
                  onClick={showExperienceModal}
                >
                  <IoMdAdd className="w-[40px] h-[40px] sm:w-[20px] sm:h-[20px]" />
                </Button>
                <ExperienceModal
                  isVisible={isExperienceVisible}
                  onClose={() => setIsExperienceVisible(false)}
                  onSave={handleSaveExperience}
                />
              </div>
              <div className="mt-6 flex gap-4 self-stretch md:flex-col">
                <Input
                  shape="round"
                  type="text"
                  name="Skill Type"
                  placeholder={`Skill Type`}
                  className="w-full"
                  required
                />
              </div>
              <div className="mt-6 flex gap-6 self-stretch md:flex-col">
                <Input
                  shape="round"
                  name="Input fill"
                  placeholder={`Facebook Link`}
                  className="w-full"
                />
                <Input
                  shape="round"
                  type="number"
                  name="Input fill"
                  placeholder={`whats app number`}
                  className="w-full"
                />
              </div>
              <div className="mt-5 flex gap-6 self-stretch md:flex-col">
                <SelectBox
                  size="x1"
                  shape="round"
                  indicator={<MdKeyboardArrowDown />}
                  name="Education Qualification"
                  placeholder={`Education Qualification Level`}
                  options={dropDownOptions}
                  className="w-full py-3 border border-solid border-foundation-black-black_500-0 !px-4"
                />
              </div>
              <div className="mt-[34px] flex justify-center self-stretch rounded-md">
                <TextArea
                  shape="round"
                  name="About you"
                  placeholder="About you"
                  className="border-foundation-black-black_500-0 text-foundation-black-black_400-0 w-full"
                />
              </div>
              <Button
                size="3x1"
                shape="round"
                className="mt-8 min-w-[200px] py-4"
              >
                Save Profile
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
