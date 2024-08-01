import React from "react";

import { NavigationBar } from "@/components/NavigationBar";
import SubscriptionCard from "./subscriptionCard";
import Footer from "@/components/Footer";
export default function MySubscriptionPage() {
  return (
    <div className="flex w-full flex-col items-center gap-8 bg-foundation-white-white_500-0">
      {" "}
      <div className="container-xs lg:p-5 md:p-5">
        <NavigationBar />
      </div>
      <div className="flex flex-col gap-[120px] self-stretch 1g:gap-[90px] md:gap-[90px] sm:gap-[60px]">
        <SubscriptionCard />
        <Footer />
      </div>
    </div>
  );
}
