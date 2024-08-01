import { Text } from "@/components/Text";
import React, { useState } from "react";

export default function UserProfile6({
  userRating = "5 Star",
  userBadge = "10",
  ...props
}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  return (
    <div {...props} className={`${props.className} flex items-center flex-1`}>
      <div className="flex flex-1 items-center gap-2">
        <input
          type="radio"
          className="h-[16px] w-[16px] rounded-lg border border-solid border-foundation-black-black_500-0 shadow-bs"
          id={userRating}
          name={userRating}
          value={userRating}
          checked={isChecked}
          onClick={handleToggle}
        />
        <label
          htmlFor={userRating}
          className="self-center text-default-black cursor-pointer"
        >
          <Text as="p" className="!text-default-black">
            {userRating}
          </Text>
        </label>
      </div>
      <div className="relative h-[28px] w-[44%]">
        <div className="absolute bottom-0 right-[0.00px] top-0 my-auto h-[20px] w-[32px] rounded-[10px] bg-foundation-white-white_500-0" />
        <label
          htmlFor={userRating}
          className="absolute bottom-0 right-[8.00px] top-0 my-auto h-max text-gray-600"
        >
          <Text
            as="p"
            className="absolute bottom-0 right-[8.00px] top-0 my-auto h-max !text-gray-600"
          >
            {userBadge}
          </Text>
        </label>
      </div>
    </div>
  );
}
