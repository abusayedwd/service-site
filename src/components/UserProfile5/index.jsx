import { Text } from "@/components/Text";
import { CheckBox } from "@/components/CheckBox";
import React from "react";

export default function UserProfile5({
  type = "Full Time",
  badgeText = "10",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center flex-1`}>
      {console.log("========props====>", props)}
      <CheckBox
        name={type}
        label={type}
        id={type}
        className="gap-2 text-[16px] text-default-black"
      />
      <div className="relative h-[28px] flex-1">
        <div className="absolute bottom-0 right-[-1.00px] top-0 my-auto h-[20px] w-[32px] rounded-[10px] bg-foundation-white-white_500-0" />
        <Text
          as="p"
          className="absolute bottom-0 right-[7.00px] top-0 my-auto h-max !text-gray-600"
        >
          {badgeText}
        </Text>
      </div>
    </div>
  );
}
