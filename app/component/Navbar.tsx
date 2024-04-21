"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";
import Icon from "./atom/Icon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPos, setCurrentPos] = useState(0);
  const [currentPostMobile, setCurrentPostMobile] = useState(0);

  const handleScroll = () => {
    setCurrentPos(window.scrollY);
    setCurrentPostMobile(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let path;
  if (typeof window !== "undefined") {
    path = window.location.hash;
  }

  return (
    <header>
      <nav
        className={`lg:px-20 lg:py-4 px-5 py-2 flex justify-between items-center  fixed top-0 w-full z-50 ${
          isOpen ? "bg-white" : "bg-blur"
        }`}
      >
        <div className="hidden md:block">
          <Icon name="proposal-studio" />
        </div>

        <div className="block md:hidden ">
          <Image alt="logo" src={Logo} />
        </div>

        <div className="hidden  md:flex md:flex-row flex-col items-center md:gap-5 lg:gap-10 font-medium text-base lg:text-lg text-baseBlack">
          <Link href={"/"}>
            <div
              className={`gap-2 md:hover:underline underline-offset-4 hover:text-primary ${
                currentPos < 750 &&
                (path === "" ||
                  path === "#about" ||
                  path === "#service" ||
                  path === "#proposal" ||
                  path === "#event")
                  ? "active-link"
                  : ""
              }`}
            >
              Beranda
            </div>
          </Link>
          <Link href={"#about"}>
            <div
              className={` gap-2 md:hover:underline underline-offset-4 hover:text-primary ${
                currentPos >= 750 &&
                currentPos < 1500 &&
                (path === "about" ||
                  path === "" ||
                  path === "#service" ||
                  path === "#proposal" ||
                  path === "#event")
                  ? "active-link"
                  : ""
              }`}
            >
              Tentang Kami
            </div>
          </Link>
          <Link href={"#service"}>
            <div
              className={`gap-2 md:hover:underline underline-offset-4 hover:text-primary ${
                currentPos >= 1500 &&
                currentPos < 2400 &&
                (path === "#service" ||
                  path === "" ||
                  path === "#about" ||
                  path === "#proposal" ||
                  path === "#event")
                  ? "active-link"
                  : ""
              }`}
            >
              Layanan Kami
            </div>
          </Link>
          <Link href={"#proposal"}>
            <div
              className={`gap-2 md:hover:underline underline-offset-4 hover:text-primary ${
                currentPos >= 2400 &&
                currentPos < 2900 &&
                (path === "#proposal" ||
                  path === "" ||
                  path === "#about" ||
                  path === "#service" ||
                  path === "#event")
                  ? "active-link"
                  : ""
              }`}
            >
              Klien
            </div>
          </Link>
          <Link href={"#event"}>
            <div
              className={`gap-2 md:hover:underline underline-offset-4 hover:text-primary ${
                currentPos >= 2900 &&
                currentPos < 3900 &&
                (path === "#event" ||
                  path === "#home" ||
                  path === "#about" ||
                  path === "#service" ||
                  path === "#proposal")
                  ? "active-link"
                  : ""
              }`}
            >
              Kegiatan
            </div>
          </Link>
        </div>

        <Link
          href={`https://wa.me/6281226831649?text=${encodeURIComponent(
            "Hallo Kak, saya ingin tanya terkait proposal, apakah bisa dibantu?"
          )}`}
          className="hidden md:block border border-primary md:p-3 md:px-5 lg:py-4 lg:px-6 text-primary font-medium md:text-base lg:text-lg rounded-full hover:bg-primary focus:ring-blue-300 focus:text-white hover:text-white ease-in duration-300"
        >
          Hubungi Kami
        </Link>

        <div className="flex md:hidden gap-2 items-center">
          <Link
            href={"https://wa.me/6281226831649"}
            className={`${
              isOpen ? "block" : "hidden"
            } border border-primary py-3 px-4 text-primary font-medium text-sm rounded-full hover:bg-primary focus:ring-4 focus:ring-blue-300 ease-in focus:text-white hover:text-white duration-300`}
          >
            Hubungi Kami
          </Link>

          {/* hamburger */}
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className={`${
              isOpen && "open"
            } flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-50`}
          >
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-baseBlack rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-4 bg-baseBlack rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-baseBlack rounded-full"></span>
          </div>
        </div>
      </nav>

      <div className={`fixed w-full md:hidden top-0 z-40`}>
        <div
          className={`flex flex-col absolute top-[64px] left-0 right-0 p-5 gap-6 bg-white border-t border-baseBlack/20 ${
            isOpen ? "translate-y-0" : "-translate-y-[130%]"
          } transition-all duration-500 ease-in-out`}
        >
          <Link
            href={"/"}
            className={`${"text-baseBlack"} text-base font-medium hover:text-primary transition-all duration-200`}
            onClick={() => setIsOpen(false)}
          >
            Beranda
          </Link>
          <Link
            href={"#about"}
            className={`${"text-baseBlack"} text-base font-medium hover:text-primary transition-all duration-200`}
            onClick={() => setIsOpen(false)}
          >
            Tentang Kami
          </Link>
          <Link
            href={"#service"}
            className={`${"text-baseBlack"} text-base font-medium hover:text-primary transition-all duration-200`}
            onClick={() => setIsOpen(false)}
          >
            Layanan Kami
          </Link>
          <Link
            href={"#proposal"}
            className={`${"text-baseBlack"} text-base font-medium hover:text-primary transition-all duration-200`}
            onClick={() => setIsOpen(false)}
          >
            Klien
          </Link>
          <Link
            href={"#event"}
            className={`${"text-baseBlack"} text-base font-medium hover:text-primary transition-all duration-200`}
            onClick={() => setIsOpen(false)}
          >
            Kegiatan
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
