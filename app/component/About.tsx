import Image from "next/image";
import Icon from "./atom/Icon";
import Profil from "@/public/about/profil.jpg";

const Hero = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-between lg:flex-row mx-5 lg:mx-20 my-16 md:my-[100px]"
    >
      <div className="max-w-xl">
        <h1
          className={`text-baseBlack text-2xl md:text-4xl tracking-tight mb-4 font-bold`}
        >
          <span className="text-primary">PROPOSAL</span>
          <span className="text-secondary"> STUDIO</span> Keberhasilan project
          Anda adalah prioritas kami
        </h1>
        <p className="mt-6 text-lg text-baseBlack">
          Proposal Studio adalah jasa pembuatan proposal komersial yang berdiri
          sejak Januari, 2022. Kami telah dipercaya mengerjakan banyak project
          regional maupun project nasional oleh bermacam perusahaan, lembaga,
          event organizer, business owner, cerative agency, dan influencer. Kami
          juga telah dipercaya mengisi materi proposal di organisasi maupun
          komunitas di beberapa kampus ternama di Indonesia.
        </p>
        <div className="flex flex-row gap-1 items-center justify-between lg:flex-row pt-6 flex-wrap">
          <div className="text-center">
            <h3 className="text-baseBlack font-semibold text-xl md:text-2xl lg:text-3xl">
              250+
            </h3>
            <p className="text-baseBlack font-normal text-sm md:text-base">
              Projek Selesai
            </p>
          </div>
          <Icon name="divider" />
          <div className="text-center">
            <h3 className="text-baseBlack font-semibold text-xl md:text-2xl lg:text-3xl">
              2 Tahun+
            </h3>
            <p className="text-baseBlack font-normal text-sm md:text-base">
              Pengalaman Kerja
            </p>
          </div>
          <Icon name="divider" />
          <div className="text-center">
            <h3 className="text-baseBlack font-semibold text-xl md:text-2xl lg:text-3xl">
              99%
            </h3>
            <p className="text-baseBlack font-normal text-sm md:text-base">
              Klien Puas
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-xl mt-5 lg:mt-0">
        <Image
          className="object-cover w-full h-full rounded-lg"
          src={Profil}
          alt="Profil"
        />
      </div>
    </div>
  );
};

export default Hero;
