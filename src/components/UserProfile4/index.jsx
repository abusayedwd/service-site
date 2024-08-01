"use client";
import { Text } from "@/components/Text";
import React, { useState } from "react";

export default function UserProfile4({
  userRole = "Project manager",
  badgeCount = "10",
  ...props
}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  return (
    <div {...props} className={`${props.className} flex items-center flex-1`}>
      <div className="flex flex-1 items-start gap-2">
        <input
          type="radio"
          className="h-[16px] w-[16px] rounded-lg border border-solid border-foundation-black-black_500-0 shadow-bs"
          id={userRole}
          name={userRole}
          value={userRole}
          checked={isChecked}
          onClick={handleToggle}
        />
        <label
          htmlFor={userRole}
          className="self-center text-default-black cursor-pointer"
        >
          <Text as="p">{userRole}</Text>
        </label>
      </div>
      <div className="relative h-[28px] w-[30%]">
        <div className="absolute bottom-0 right-0 top-0 my-auto h-[20px] w-[32px] rounded-[10px] bg-foundation-white-white_500-0">
          <label
            htmlFor={userRole}
            className="absolute bottom-0 right-[8.00px] top-0 my-auto h-max text-gray-600"
          >
            <Text as="p">{badgeCount}</Text>
          </label>
        </div>
      </div>
    </div>
  );
}
