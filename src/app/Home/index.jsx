"use client";
import { NavigationBar } from "@/components/NavigationBar";
import Home1Group111 from "./Home1Group111";
import Home1Group395 from "./Home1Group395";
import Home1Group400 from "./Home1Group400";
import HomeProFiles from "./HomeProFiles";
import HomeCreate from "./HomeCreate";
import HomeRecentReviews from "./HomeRecentReviews";
import Footer from "@/components/Footer";

import React from "react";
export default function HomePage() {
  return (
    <div className="flex w-full flex-col gap-[118px] bg-foundation-white-white_500-0 lg:gap-[118px] md:gap-[88px] sm:gap-[59px]">
     <NavigationBar />
      <Home1Group395 />
      <Home1Group400 />
      <Home1Group111 />
      <HomeProFiles />
      <HomeCreate />
      <HomeRecentReviews />
      <Footer />
    </div>
  );
}
