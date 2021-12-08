import React from "react";
import {
  HomeIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ClipboardListIcon,
  DocumentDuplicateIcon,
  LogoutIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { signOut } from "next-auth/client";
import Image from "next/image";

const LayoutDashboard = ({ children, dataUser }) => {
  const list = [
    {
      list: "Dashboard",
      icons: <HomeIcon className="w-10 h-w-10 text-gray-300" />,
      to: "/admin",
    },
    {
      list: "Akademik",
      icons: <AcademicCapIcon className="w-10 h-w-10 text-gray-300" />,
      to: "/Akademik",
    },
    {
      list: "Data Guru",
      icons: <UserGroupIcon className="w-10 h-w-10 text-gray-300" />,
      to: "/admin/guru",
    },
    {
      list: "Siswa Baru",
      icons: <ClipboardListIcon className="w-10 h-w-10 text-gray-300" />,
      to: "/siswabaru",
    },
    {
      list: "Berkas Lain",
      icons: <DocumentDuplicateIcon className="w-10 h-w-10 text-gray-300" />,
      to: "/berkas",
    },
  ];

  return (
    <div className="w-full grid grid-cols-14 h-screen bg-gray-50">
      {/* SIDEBAR */}
      <div className="w-full bg-blue-700 h-full flex flex-col items-center justify-center">
        <div className="flex justify-center items-center">
          <Image
            src={dataUser?.user.image}
            alt="This is Your Pic"
            width={70}
            height={70}
            className="rounded-full"
          />
          <p className="text-gray-300 font-semibold">{dataUser?.user.name}</p>
        </div>
        <div className="flex justify-evenly items-center flex-col h-1/2 ">
          {list.map((list, key) => (
            <Link key={key} href={list.to}>
              <div className="flex justify-center items-center cursor-pointer">
                {list.icons}
                <p className="text-gray-300 text-lg font-semibold">
                  {list.list}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
        >
          <LogoutIcon className="h-10 w-10 text-gray-300" />
          <p className="text-gray-300">LogOut</p>
        </div>
      </div>
      {/* end SIDEBAR */}
      {/* main content */}
      <div>{children}</div>
    </div>
  );
};

export default LayoutDashboard;
