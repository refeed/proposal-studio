import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import Icon from "./atom/Icon";

export default function Footer() {
  return (
    <div className="mx-2 md:mx-10">
      <div className="pt-14 pb-10 px-5 md:px-10 lg:px-[120px] bg-baseBlack rounded-t-2xl lg:rounded-t-3xl">
        <div className="max-w-6xl">
          <div className="justify-center items-center flex">
            <div className="hidden md:block">
              <Icon name="proposal-studio" />
            </div>
            <div className="block md:hidden ">
              <Image alt="logo" src={Logo} />
            </div>
          </div>
          <div className="lg:flex lg:justify-between">
            <div className="mt-8 lg:mt-16">
              <h2 className="font-bold text-base md:text-lg text-white">
                Jam Kerja
              </h2>
              <div className="flex gap-3 mt-3 lg:mt-6">
                <Icon name="clock" />
                <p className="text-white text-sm md:text-lg font-normal">
                  08.00 WIB - 17.00 WIB
                </p>
              </div>
              <div className="flex gap-3 mt-3 lg:mt-6">
                <Icon name="calender" />
                <p className="text-white text-sm md:text-lg font-normal">
                  Sabtu, Minggu, dan Tanggal Merah Libur
                </p>
              </div>
            </div>
            <div className="mt-8 lg:mt-16">
              <h2 className="font-bold text-base md:text-lg text-white">
                Kontak Kami
              </h2>
              <div className="flex gap-3 mt-3 lg:mt-6">
                <Icon name="calender" />
                <p className="text-white text-sm md:text-lg font-normal">
                  Whatsapp : 0812-2683-1649
                </p>
              </div>
              <div className="flex gap-3 mt-3 lg:mt-6">
                <Icon name="mail" />
                <p className="text-white text-sm md:text-lg font-normal">
                  contactproposalstudio@gmail.com
                </p>
              </div>
            </div>
            <div className="mt-8 lg:mt-16">
              <h2 className="font-bold text-base md:text-lg text-white">
                Sosial Media
              </h2>
              <div className="flex gap-3 mt-3 md:mt-6">
                <Link href={"https://instagram.com/proposalstudio"}>
                  <Icon name="instagram" />
                </Link>
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=100087161541087&mibextid=2JQ9oc"
                  }
                >
                  <Icon name="facebook" />
                </Link>
                <Link
                  href={
                    "https://www.tiktok.com/@proposalstudio?_t=8jgdem8gV3Y&_r=1"
                  }
                >
                  <Icon name="tiktok" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-16">
            <h2 className="text-xs md:text-base text-gray-400 text-center">
              COPYRIGHT PROPOSAL STUDIO 2024 © ALL RIGHT RESERVED
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
