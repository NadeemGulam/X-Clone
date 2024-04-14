import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import React from "react";
import { BiHash, BiHomeCircle, BiMobile, BiMoney, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { Inter } from "next/font/google";
import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notification",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney/>,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "Options",
    icon: <SlOptions />,
  },
];

export default function Home() {
  return (
    <div className={inter.className}>
      <div className=" grid grid-cols-12 h-screen w-screen px-32">
        <div className=" col-span-3 pt-2">
          <div className="text-3xl w-fit hover:bg-gray-800 p-3  rounded-full h-fit cursor-pointer transition-all">
            <BsTwitter/>
          </div>

          <div className="mt-2 font-semibold text-lg pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="mt-1 flex w-fit  justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 cursor-pointer"
                  key={item.title}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
              <button className="bg-[#1d9bf0] font-semibold p-3 rounded-full  w-[80%] text-lg">
                Post
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-gray-600">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
