"use client";
import { useState } from "react";
import Image from "next/image";
import Proposal1 from "@/public/proposal/1.png";
import Proposal2 from "@/public/proposal/2.png";
import Proposal3 from "@/public/proposal/3.png";
import Proposal4 from "@/public/proposal/4.png";
import Proposal5 from "@/public/proposal/5.png";
import Proposal6 from "@/public/proposal/6.png";
import Proposal7 from "@/public/proposal/7.png";
import Proposal8 from "@/public/proposal/8.png";
import Proposal9 from "@/public/proposal/9.png";
import Proposal10 from "@/public/proposal/10.png";
import Proposal11 from "@/public/proposal/11.png";
import Proposal12 from "@/public/proposal/12.png";
import Proposal13 from "@/public/proposal/13.png";
import Proposal14 from "@/public/proposal/14.png";
import Proposal15 from "@/public/proposal/15.png";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  {
    image: Proposal1,
  },
  {
    image: Proposal2,
  },
  {
    image: Proposal3,
  },
  {
    image: Proposal4,
  },

  {
    image: Proposal5,
  },
  {
    image: Proposal6,
  },
  {
    image: Proposal7,
  },
  {
    image: Proposal8,
  },
  {
    image: Proposal9,
  },
  {
    image: Proposal10,
  },
  {
    image: Proposal11,
  },
  {
    image: Proposal12,
  },
  {
    image: Proposal13,
  },
  {
    image: Proposal14,
  },
  {
    image: Proposal15,
  },
];
export default function Proposal() {
  return (
    <div id="proposal" className="mx-5 my-14 md:mx-20 md:my-[100px] ">
      <h2 className="text-baseBlack text-2xl md:text-4xl tracking-tight font-bold text-center">
        Preview Proposal High Quality
      </h2>
      <p className="mt-1 lg:mt-3 text-center font-semibold text-lg md:text-xl text-baseBlack">
        Proyek-proyek Berkualitas yang Telah Kami Selesaikan dengan Penuh
        Keberhasilan.
      </p>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-max mt-8 md:mt-16"
      >
        <CarouselContent>
          {images.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-4 hover:shadow-md">
                    <Image
                      alt=""
                      src={item.image}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
