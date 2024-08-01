import React from "react";
import { Text } from "@/components/Text";
import { Img } from "@/components/Img";
import { Button } from "@/components/Button";
import { SelectBox } from "@/components/SelectBox";

const dropDownOptionsLocation = [
  { label: "Location 1", value: "Location 1" },
  { label: "Location 2", value: "Location 2" },
  { label: "Location 3", value: "Location 3" },
];

const dropDownOptionsCategory = [
  { label: "Category 1", value: "Category 1" },
  { label: "Category 2", value: "Category 2" },
  { label: "Category 3", value: "Category 3" },
];

export default function SearchAndFilter({
  searchPlaceholderText = "Services available, key..",
  categoryText = "Select Category",
  searchButtonText = "Search",
  ...props
}) {
  return (
    <div {...props} className={`${props.className}`}>
      <div className="w-full grid sm:grid-cols-1 de:grid-cols-12 sm:gap-5 lg:gap-3 justify-between items-center  p-3 rounded-md sm:shadow-none lg:shadow-lg ">
        <div className="w-full  col-span-4 flex items-center justify-center gap-3 pr-3 sm:border-b sm:border-r-0 border-r border-foundation-black-black_400-0 px-1 py-2">
          <Img
            src="img_search.svg"
            width={24}
            height={24}
            alt="Search"
            className="h-[24px] w-[24px]"
          />
          <input
            type="text"
            placeholder={searchPlaceholderText}
            className="w-full flex-grow px-3 py-3 border border-gray-300 rounded!text-foundation-black sm:text-[13px] "
          />
        </div>
        <div className="w-full  col-span-3 flex items-center justify-center gap-3 pr-2 sm:border-b sm:border-r-0 border-r border-foundation-black-black_500-0 px-1 py-2">
          <SelectBox
            shape="square"
            indicator={
              <Img
                src="img_arrowdown.svg"
                width={10}
                height={10}
                alt="Arrow Down"
                className="h-[10px] w-[10px]"
              />
            }
            name="Select Location"
            placeholder={`Select Location`}
            options={dropDownOptionsLocation}
            className="flex-grow text-foundation-black"
          />
        </div>
        <div className="w-full  col-span-3 flex items-center justify-center gap-3 pr-2 px-1 py-2 sm:border-b border-foundation-black-black_400-0">
          <SelectBox
            shape="square"
            indicator={
              <Img
                src="img_arrowdown.svg"
                width={10}
                height={10}
                alt="Arrow Down"
                className="h-[10px] w-[10px]"
              />
            }
            name="Select Location"
            placeholder={`Select Location`}
            options={dropDownOptionsLocation}
            className="flex-grow text-foundation-black"
          />
        </div>

        <div className="col-span-2">
          <Button variant="outline" shape="round" className="w-full">
            {searchButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
