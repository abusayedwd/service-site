import { Heading } from "@/components/Heading";
import Footer from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import SearchAndFilter from "@/components/SearchAndFilter";
import WorkTimeline from "./workTimeline";
import Home1Group111 from "../Home/Home1Group111";

export default function Howitworksones() {
  return (
    <div className="flex w-full flex-col items-center bg-foundation-white-white_500-0">
      <div className="flex flex-col items-center self-stretch bg-foundation-maastricht_blue-maastricht_blue_50-1 pb-5">
        <div className="container-xs mb-[92px] flex flex-col items-center gap-[50px] lg:p-5 md:p-5">
          <NavigationBar className="self-stretch" />
          <Heading
            size="s_b_56"
            as="h1"
            className="!text-foundation-maastricht_blue-maastricht_blue_500-0 md:text-[36px] sm:text-[30px]"
          >
            How it Works
          </Heading>
        </div>
      </div>
      <WorkTimeline />
      <Home1Group111 />
      <Footer className="mt-[120px] self-stretch" />
    </div>
  );
}
