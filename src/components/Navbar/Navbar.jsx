import React from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { actionshowMenuSlide } from "../../features/app/appSlice";
import Link from "next/link";
import { signOut } from "next-auth/client";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-blue-500 w-full grid grid-cols-13 items-center sticky top-0 z-50">
      <MenuIcon
        data-testid="hamburger"
        onClick={() => dispatch(actionshowMenuSlide({ show: true }))}
        className="w-10 h-10 text-gray-200 justify-self-center"
      />
      <h3 className="text-gray-200 text-sm font-semibold">
        SD Swasta Getsemane School
      </h3>
      <div className="hidden lg:flex w-full">
        <ul className="grid grid-cols-6 w-full justify-items-center">
          <li className="text-gray-200 text-lg w-40">
            <Link href="/">Home</Link>
          </li>
          <li className="text-gray-200 text-lg w-40">
            <Link href="/pendaftaran">Pendaftaran</Link>
          </li>
          <li className="text-gray-200 text-lg w-40">
            <Link href="/galery">Galery</Link>
          </li>
          <li className="text-gray-200 text-lg w-40">
            <Link href="/profile">Profile</Link>
          </li>
          <li className="text-gray-200 text-lg w-40">
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
