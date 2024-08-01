import { Img } from "../Img";
import { Text } from "../Text";
import { Button } from "../Button";
import Link from "next/link";

const LoginNav = () => {
  return (
    <>
      <header className="flex items-center justify-between gap-5 self-stretch md:flex-col">
        <Img
          src="Header_Logo.png"
          width={102}
          height={68}
          alt="Header Logo"
          className="h-[68px] w-[102px] object-contain"
        />
        <ul className="flex flex-wrap gap-[54px] lg:gap-5 md:gap-5">
          <li>
            <Link href="/">
              <Text as="p">Home</Text>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Text as="p">Pro-files</Text>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Text as="p">How it Works</Text>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Text as="p">About Us</Text>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Text as="p">Contact Us</Text>
            </Link>
          </li>
        </ul>
        <div className="flex w-[14%] items-center justify-between gap-5 md:w-full">
          <Link href="/login">
            <Text as="p" className="mb-1 self-end">
              Login
            </Text>
          </Link>
          <Link href="/signup">
            <Button variant="outline" shape="round" className="min-w-[154px]">
              Register a pro-file
            </Button>
          </Link>
        </div>
      </header>
    </>
  );
};

export { LoginNav };
