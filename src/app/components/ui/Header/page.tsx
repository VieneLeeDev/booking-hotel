import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="flex h-[70px] justify-center items-center bg-red-200">
      <Link href={"/home"} className="mx-10">
        Home
      </Link>
      <Link href={"/room"} className="mx-10">
        Room List
      </Link>
      <Link href={"/detailroom"} className="mx-10">
        Detail Room
      </Link>
    </div>
  );
};
