"use client";
import Link from "next/link";
import React, { useState } from "react";
import MenuHeader from "../MobileHeader/MobileHeader";
import { FiAlignJustify } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Navigate from "../Navigate/Navigate";
export const Header = () => {
  const [isShowDrawer, setIsShowDrawer] = useState(false);
  const handleClickDrawer = () => {
    setIsShowDrawer(true);
  };
  const pathname = usePathname();

  return (
    <>
      <div className="flex flex-col shadow-lg border-[1px] max-w-screen h-[70px] justify-center px-5 ">
        <div className="hidden md:flex md:flex-1 justify-center items-center h-full ">
          {/**navigation desktop*/}
          <Link href={"/home"} className={`text-xl text-black flex justify-center items-center h-2/3 w-[150px] hover:opacity-50 ${pathname === "/home"? "text-blue-600 border-b-[2px] border-solid border-blue-500 duration-100": ""} `}>
            Home
          </Link>
          <Link href={"/room"} className={`text-xl text-black flex justify-center items-center h-2/3 w-[150px] hover:opacity-50 ${pathname === "/room"? "text-blue-600 border-b-[2px] border-solid border-blue-500 duration-100": ""} `}>
            Room List
          </Link>
          <Link href={"/detailroom"} className={`text-xl text-black flex justify-center items-center h-2/3 w-[150px] hover:opacity-50 ${pathname === "/detailroom"? "text-blue-600 border-b-[2px] border-solid border-blue-500 duration-100": ""} `}>
            Detail Room
          </Link>
          <Link href={"/received"} className={`text-xl text-black flex justify-center items-center h-2/3 w-[150px] hover:opacity-50 ${pathname === "/received"? "text-blue-600 border-b-[2px] border-solid border-blue-500 duration-100": ""} `}>
            Received
          </Link>
          <Link href={"/confirmation"} className={`text-xl text-black flex justify-center items-center h-2/3 w-[150px] hover:opacity-50 ${pathname === "/confirmation"? "text-blue-600 border-b-[2px] border-solid border-blue-500 duration-100": ""} `}>
          Confirmation
          </Link>
        </div>
        <button
          onClick={handleClickDrawer}
          className="md:hidden w-[30px] h-[30px]"
        >
          <FiAlignJustify className="w-full h-full" />
        </button>
      </div>
      <MenuHeader open={isShowDrawer} close={() => setIsShowDrawer(false)} />
    </>
  );
};
