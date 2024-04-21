import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div className="mx-5 my-14 md:mx-20 md:my-[100px] flex-col items-center justify-center flex">
      <h2 className="text-baseBlack text-2xl md:text-4xl tracking-tight font-bold text-center">
        Memiliki Pertanyaan?
        <br /> Temukan <span className="text-primary">jawabannya</span> secara
        mudah di FAQ kami
      </h2>
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-6xl md:mt-10 mt-5 "
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-start text-base md:text-xl font-medium text-baseBlack">
            Apakah bisa membuat proposal skripsi?
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-lg text-baseBlack font-medium">
            Maaf Kak, kami tidak menerima pembuatan proposal dalam ranah
            pendidikan/sekolah/kuliah seperti proposal skripsi, proposal
            penelitian, makalah, dan lainnya yang menyangkut dengan pendidikan.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-start text-base md:text-xl font-medium text-baseBlack">
            Saya gatau apa-apa soal Proposal, apakah bisa dibantu sampai tuntas?
          </AccordionTrigger>
          <AccordionContent className="text-start text-sm md:text-lg text-baseBlack font-medium">
            Bisa Kak, tenang saja kita akan bantu dari awal sampai akhir sesuai
            dengan kebutuhan Kakak. Kita juga ada KONSULTASI GRATIS kak, jadi
            Kakak bisa konsultasi sampai tuntas dengan kami.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-start text-base md:text-xl font-medium text-baseBlack">
            Bisa buat proposal dalam waktu cepat?
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-lg text-baseBlack font-medium">
            Bisa Kak, pengerjaan kami hanya membutuhkan waktu 1-7 hari kerja
            saja.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-start text-base md:text-xl font-medium text-baseBlack">
            Apakah proposal saya aman / tidak disebarluaskan?
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-lg text-baseBlack font-medium">
            Proposal 100% aman Kak, kami juga menyediakan Surat Perjanjian
            Kerjasama dalam menjaga keamanan data maupun proposalnya jika
            dibutuhkan.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-start text-base md:text-xl font-medium text-baseBlack">
            Apakah boleh tanya-tanya terlebih dahulu?
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-lg text-baseBlack font-medium">
            Boleh Kak silahkan, dengan senang hati kami akan membantu. Kami akan
            lebih fast respon di Whatsapp dibandingkan di DM Instagram. Jadi
            silahkan kontak Whatsapp kami saja ya Kak untuk
            konsultasi/tanya-tanya terlebih dahulu.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
