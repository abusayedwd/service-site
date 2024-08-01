import { NavigationBar } from "@/components/NavigationBar";
import ChangePasswordForm from "./changepasswordform";
import React from "react";
export default function ChangePassword() {
  return (
    <div className="flex w-full flex-col items-center gap-8 bg-foundation-white-white_500-0 pb-5">
      <div className="container-xs 1g:p-5 md:p-5">
        <NavigationBar />
      </div>
      <ChangePasswordForm />
    </div>
  );
}
