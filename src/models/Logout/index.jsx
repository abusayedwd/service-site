import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { Heading } from "@/components/Heading";

import Link from "next/link";
import React from "react";
import { default as ModalProvider } from "react-modal";
export default function Logout({ isopen, ...props }) {
  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className="min-w-[1622px]"
    >
      {" "}
      <div className="container-xs flex min-w-[1622px] justify-center px-14 1g:p-5 md:p-5 md:px-5 sm:px-4">
        <div className="flex w- [20%] flex-col gap-[52px] rounded-[28px] bg-foundation-floral_white-floral_white_500 lg:w-full md:w-full sm:gap-[26px]">
          <div className="flex flex-col items-start gap-2.5 px-6 sm:px-4">
            <Link
              href="Logout"
              target="_blank"
              rel="noreferrer"
              className="mt-6"
            >
              {" "}
              <Heading size="montserrat_m_24" as="h1" className="!text-dark_1">
                Logout
              </Heading>
            </Link>
            <Text
              size="textxs"
              as="p"
              className="!font-montserrat ! text-dark_1"
            >
              Are you sure you want to log out ?
            </Text>
          </div>
          <div className="flex justify-end gap-2 p-6 sm:p-4">
            <Button variant="outline" className="min-w-[70px] rounded-[20px]">
              No
            </Button>
            <Button className="min-w-[76px] rounded- [20px]">Yes</Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
