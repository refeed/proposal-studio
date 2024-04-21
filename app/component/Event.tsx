import React from "react";
import Image from "next/image";
import Event1 from "@/public/event/unnes x unsoed.jpeg";
import Event2 from "@/public/event/universitas andalas.jpeg";
import Event3 from "@/public/event/unair.jpeg";
import Event4 from "@/public/event/Proposal Studio bersama FTI Universitas Tarumanegara.jpeg";
import Event5 from "@/public/event/Proposal Studio Bersama Ketua Bidang Sosial Masyarakat dan Lingkungan Hidup BEM FEB Undip 2022.png";
import Event6 from "@/public/event/its.jpeg";
import Event7 from "@/public/event/CTC TALKS.png";
import Event8 from "@/public/event/i-yes indonesia.png";
import Event9 from "@/public/event/ikamabinas.png";
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
    image: Event1,
    title: "Proposal Studio bersama KWU FE UNNES dan KWU Bursa FEB UNSOED",
  },
  {
    image: Event2,
    title: "Proposal Studio bersama ECLAT Universitas Andalas",
  },
  {
    image: Event3,
    title: "Proposal Studio bersama BEM Vokasi Universitas Airlangga",
  },
  {
    image: Event4,
    title: "Proposal Studio bersama FTI Universitas Tarumanegara",
  },

  {
    image: Event5,
    title:
      "Proposal Studio Bersama Ketua Bidang Sosial Masyarakat dan Lingkungan Hidup BEM FEB Undip 2022",
  },
  {
    image: Event6,
    title: "Proposal Studio bersama UKM Penalaran ITS",
  },
  {
    image: Event9,
    title: "Proposal Studio bersama Ikatan Mahasiswa Bidan Nasional",
  },
  {
    image: Event7,
    title: "Proposal Studio bersama Creative Training Center",
  },
  {
    image: Event8,
    title: "Proposal Studio bersama Komunitas I-Yes Indonesia",
  },
];
export default function Event() {
  return (
    <div
      id="event"
      className="lg:my-[100px] mx-5 bg-cover bg-center flex items-center justify-center flex-col"
      style={{ backgroundImage: "url('/bg2.png')" }}
    >
      <div className="mt-16 text-center max-w-4xl mx-auto">
        <h2 className="text-baseBlack text-2xl md:text-4xl tracking-tight font-bold text-center">
          Kegiatan Terkini Kami
        </h2>
        <p className="mt-1 lg:mt-3 text-center font-semibold text-lg md:text-xl text-baseBlack">
          Dapatkan Wawasan Mendalam melalui Serangkaian Kegiatan, Termasuk
          Webinar Terbaru Kami yang Penuh Informasi.
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-screen-xl mt-8 md:mt-16"
      >
        <CarouselContent>
          {images.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="h-fit bg-white hover:shadow-md">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Image
                      alt={item.title}
                      src={item.image}
                      className="w-full h-full object-cover rounded-md"
                    />
                    <h1 className="text-xl text-baseBlack font-semibold mt-4 line-clamp-2">
                      {item.title}
                    </h1>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden lg:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
