"use client";
import { Text } from "@/components/Text";
import { Img } from "@/components/Img";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars, FaXmark } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "../Button";
import { Drawer, Modal, Typography } from "antd";

const { Title } = Typography;

const NavigationBar = ({ ...props }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const showLogoutModal = () => {
    setLogoutModalVisible(true);
  };

  const handleLogout = () => {
    console.log("User logged out");
    setLogoutModalVisible(false);
  };

  return (
    <div
      {...props}
      className={`${props.className} container-xs mt-5 sm:px-5 lg:px-10 py-2`}
    >
      {/* mobile menu */}
      <div className="de:hidden lg:hidden sm:flex justify-between items-center overflow-hidden">
        <Link href="/">
          <Img
            src="Header_Logo.png"
            width={80}
            height={60}
            className="object-contain"
            alt="Header Logo"
          />
        </Link>
        <div className="flex items-center gap-3">
          <Button className="px-5 rounded-xl">Login</Button>
          <FaBars
            onClick={handleDrawerOpen}
            className="text-3xl cursor-pointer"
          />
        </div>
        <Drawer
          placement="right"
          onClose={handleDrawerClose}
          open={drawerOpen}
          width="50%"
          closable={false}
        >
          <div className="p-3 flex justify-between items-center">
            <Link href="/">
              <Img
                src="Header_Logo.png"
                width={60}
                height={50}
                className="-ml-3"
                alt="Header Logo"
              />
            </Link>
            <FaXmark onClick={() => setDrawerOpen(false)} className="size-4" />
          </div>
          <h1 className="w-full h-[1px] bg-gray-600" />
          <ul>
            <li>
              <Link href="/" className="px-3 py-2">
                <Text as="p">Home</Text>
              </Link>
            </li>
            <h1 className="w-full h-[1px] bg-gray-600" />
            <li>
              <Link href="/viewprofile" className="px-3 py-2">
                <Text as="p">My-file</Text>
              </Link>
            </li>
            <h1 className="w-full h-[1px] bg-gray-600" />
            <li>
              <Link href="/subscription" className="px-3 py-2">
                <Text as="p">Subscription</Text>
              </Link>
            </li>
            <h1 className="w-full h-[1px] bg-gray-600" />
            <li>
              <Link href="/profiles" className="px-3 py-2">
                <Text as="p">Pro-files</Text>
              </Link>
            </li>
            <h1 className="w-full h-[1px] bg-gray-600" />
            <li>
              <Link href="/howitworks" className="px-3 py-2">
                <Text as="p">How it Works</Text>
              </Link>
            </li>
            <h1 className="w-full h-[1px] bg-gray-600" />
            <li>
              <Link href="/aboutus" className="px-3 py-2">
                <Text as="p">About Us</Text>
              </Link>
            </li>
            <h1 className="w-full h-[1px] bg-gray-600" />
            <li>
              <Link href="/changepassword" className="px-3 py-2">
                <Text as="p">Change password</Text>
              </Link>
            </li>
            <h1 className="w-full h-[1px] bg-gray-600" />
            <li>
              <Link href="/contactus" className="px-3 py-2">
                <Text as="p">Contact Us</Text>
              </Link>
            </li>
            <h1 className="w-full h-[1px] bg-gray-600" />
          </ul>
        </Drawer>
      </div>

      {/* desktop menu */}
      <div className="sm:hidden flex items-center justify-between gap-5">
        <Link href="/">
          <Img
            src="Header_Logo.png"
            width={100}
            height={60}
            className="object-contain"
            alt="Header Logo"
          />
        </Link>

        <ul className="w-full sm:hidden flex justify-center items-center">
          <li>
            <Link href="/" className="px-4 py-2 font-semibold">
              <Text as="p">Home</Text>
            </Link>
          </li>
          <li>
            <Link href="/profiles" className="px-4 py-2">
              <Text as="p">Pro-files</Text>
            </Link>
          </li>
          <li>
            <Link href="/howitworks" className="px-4 py-2">
              <Text as="p">How it Works</Text>
            </Link>
          </li>
          <li>
            <Link href="/aboutus" className="px-4 py-2">
              <Text as="p">About Us</Text>
            </Link>
          </li>
          <li>
            <Link href="/contactus" className="px-4 py-2">
              <Text as="p">Contact Us</Text>
            </Link>
          </li>
        </ul>

        <div
          className="flex w-[14%] items-center gap-3 md:w-full cursor-pointer"
          onClick={() => setUserMenuOpen(!userMenuOpen)}
        >
          <Img
            src="User_Bashar_islam.png"
            width={60}
            height={60}
            className="h-[60px] w-[60px] object-contain rounded-full"
            alt="User Profile"
          />
          <Text as="p" className="font-semibold">
            Bashar islam
          </Text>
          <div className="text-[20px]">
            <IoIosArrowDown />
          </div>
          <div
            className="absolute top-[100px] bg-white py-4 duration-300"
            style={{
              transform: userMenuOpen ? "scaleY(1)" : "scaleY(0)",
              transition: "transform 0.3s ease",
            }}
          >
            <ul className="flex flex-col gap-1">
              <li>
                <Link
                  href="/viewprofile"
                  className="py-[10px] px-[20px] hover:bg-[#0C0C0C] hover:text-[#fff] duration-300"
                >
                  Pro-file
                </Link>
              </li>
              <li>
                <Link
                  href="/subscription"
                  className="py-[10px] px-[20px] hover:bg-[#0C0C0C] hover:text-[#fff] duration-300"
                >
                  Subscription
                </Link>
              </li>
              <li>
                <Link
                  href="/changepassword"
                  className="py-[10px] px-[20px] hover:bg-[#0C0C0C] hover:text-[#fff] duration-300"
                >
                  Change password
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={showLogoutModal}
                  className="py-[10px] px-[20px] hover:bg-[#0C0C0C] hover:text-[#fff] duration-300"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Modal
        title="Logout Confirmation"
        visible={isLogoutModalVisible}
        onCancel={() => setLogoutModalVisible(false)}
        onOk={handleLogout}
        okText="Yes"
        cancelText="No"
        centered
      >
        <Title level={4}>Are you sure you want to log out?</Title>
      </Modal>
    </div>
  );
};

export { NavigationBar };
