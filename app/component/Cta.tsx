import React from "react";
import Link from "next/link";
import Icon from "./atom/Icon";

export default function Cta() {
  return (
    <div className="md:mx-20 mx-5 mt-14 md:mt-[100px] md:mb-16 mb-8">
      <div className="bg-primary rounded-2xl md:rounded-[40px] p-8 md:p-16">
        <div className="lg:flex lg:gap-20">
          <h1 className="text-4xl text-white font-semibold hidden lg:block">
            Konsultasikan secara{" "}
            <span className="text-secondary font-bold">GRATIS </span>
            proposal Anda dan segera realisasikan tujuan Anda Bersama Kami
          </h1>
          <h1 className="text-lg text-white font-semibold block lg:hidden text-center">
            Konsultasikan secara <span className="text-secondary">GRATIS </span>
            proposal Anda dan segera realisasikan tujuan Anda Bersama Kami
          </h1>
          <Link
            href={`https://wa.me/6281226831649?text=${encodeURIComponent(
              "Hallo Kak, saya ingin tanya terkait proposal, apakah bisa dibantu?"
            )}`}
          >
            <button className="flex gap-2 w-fit items-center justify-center mx-auto md:gap-4 px-4 py-2 mt-3 md:px-8 md:py-4 bg-primary border border-white rounded-full md:hover:bg-primary/50 ease-in-out duration-200 focus:ring-4 focus:ring-blue-300  focus:text-white hover:text-white">
              <span className="text-white whitespace-nowrap text-sm md:text-xl">
                Konsultasi Gratis
              </span>
              <Icon name="arrrow-right" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
