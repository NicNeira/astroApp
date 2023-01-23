import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Darkmode } from "../Darkmode";

const navigation = [
  { name: "Mars Rover", href: "/mars-rover", current: false },
  { name: "Image of day", href: "/imageday", current: true },
  { name: "EPIC", href: "/epic", current: false },
];

export const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const menuToggle = () => {
    setActive(!isActive);
  };

  console.log("isActive", isActive);
  return (
    <nav className="">
      <div className="mx-auto max-w-6xl px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to={"/"} className={"flex"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10 text-blue-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-2xl font-extrabold">
                AstroApp
              </span>
            </Link>
          </div>

          {/* menu */}
          <div className="flex">
            <div className="hidden md:flex mr-10">
              {navigation.map((item) => (
                <Link
                  className="text-white p-3 hover:text-emerald-700"
                  key={item.name}
                  to={item.href}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* <Darkmode /> */}
          </div>
          {/* mobile button */}
          <div className="md:hidden">
            <button onClick={menuToggle}>
              {!isActive ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="dark:text-white w-6 h-6 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu items */}
      <div className={isActive ? "" : "hidden"}>
        {navigation.map((item) => (
          <Link
            className="dark:text-white block p-2 px-4 text-sm hover:text-emerald-700 hover:bg-slate-200 dark:hover:bg-zinc-800"
            key={item.name}
            to={item.href}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
