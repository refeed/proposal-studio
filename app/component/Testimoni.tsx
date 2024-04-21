"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import Icon from "./atom/Icon";
import Avatar from "@/public/avatar.png";

const review = [
  {
    id: 1,
    name: "Kak Nunung",
    rating: 5,
    comment:
      "Kakaknya baik sekali, sabar menghadapi customer. Untuk pengerjaan cepat dan halus. Gak bikin emosi, soalnya pernah nemuin yg bikin emosi ☹️ intinya cepat dan tanggap ❤️",
    created_at: "Finalis Miss Hijab Indonesia 2022",
    image: Avatar,
  },
  {
    id: 2,
    name: "Kak Ade",
    rating: 5,
    comment:
      "Ini udah kali ketiganya pakai Proposal Studio, responnya cepat, dibantu revisi sampai tuntas, dan hasilnya juga memuaskan, thank you kak",
    created_at: "Atlet Badminton Top 11 National Rank",
    image: Avatar,
  },
  {
    id: 3,
    name: "Trend Coffee",
    rating: 5,
    comment:
      "Tadi uda coba kasih liat ke tmn yg emang kerjaan nya sering acc proposal dan tanya dia, katanya proposal nya ini uda ok, ga perlu ada revisi gmna2, jd saya percaya aja dari hasil tim proposal studio bagus 😁 Next kalau perlu proposal apapun ga perlu ragu lg , tinggal sebut kebutuhan apa trs bayar, tunggu, selesai 👍",
    created_at: "Trend Coffee",
    image: Avatar,
  },
  {
    id: 4,
    name: "CV Kutai Media Utama",
    rating: 5,
    comment:
      "Proposal Studio keren… saya cukup puas kerjasama dengan Proposal Studio untuk pembuatan Company Profile Perusahaan saya karena kerjanya cukup profesional dan hasilnya sesuai dengan ekspektasi..",
    created_at: "CV Kutai Media Utama",
    image: Avatar,
  },
  {
    id: 5,
    name: "Majelis Ta'lim Bustanul Wildan",
    rating: 4.5,
    comment:
      "Masya Allah, terimakasih banyak ka pelayanan nya sangat baik, isi proposal nya sangat memuaskan, design nya bagus bngt, Alhamdulillah pembuatan nya juga cepet🙏🙏🙏",
    created_at: "Majelis Ta'lim Bustanul Wildan",
    image: Avatar,
  },
  {
    id: 6,
    name: "PT Cahaya Eloc Abadi",
    rating: 5,
    comment:
      "Overall isinya bagus, desainnya juga keren. Gak banyak yg harus direvisi. Kelihatan orang-orangnya emang ada skill khusus bukan yang sekedar bisa bikin proposal. Good job sih, makasihh",
    created_at: "PT Cahaya Eloc Abadi",
    image: Avatar,
  },
  {
    id: 7,
    name: "Hackfest 2023",
    rating: 5,
    comment:
      "Terima kasih Proposal Studio yg udah buatin proposal event kami. Keren hasilnya, proses cepat, dan harga jg terjangkau. Next kalau ada project lain, mau order lagi ya. Sukses selalu Proposal Studio.",
    created_at: "Hackfest 2023",
    image: Avatar,
  },
  {
    id: 8,
    name: "Pak Riko dan Pak Paulus",
    rating: 5,
    comment:
      "Terimakasih Proposal Studio telah membantu saya, Hasilnya memuaskan sesuai dengan harapan saya, Maaf jika dalam penyampaiannya saya kurang dapat dipahami, tapi alhamdulilah Proposal Studio dapat memahami apa yang saya maksud, Sukses terus buat Proposal Studio 🙏",
    created_at: "Project Batu Bara & Kayu",
    image: Avatar,
  },
  {
    id: 9,
    name: "IM3 Denpasar Bali",
    rating: 5,
    comment:
      "Terimakasih ya kak, hasilnya sangat memuaskan, mungkin bisa di next next event kami melibatkan proposal studio untuk pembuatan proposalnya. Termakasih juga udah sabar banget buat nunggu saya ngirim materinya dan di ajarin pelan pelan pelan juga. Timaacih, Sukses untuk proposal studio dan tim di balik layar pembuatan proposal dari customer🔥🔥",
    created_at: "IM3 Denpasar Bali",
    image: Avatar,
  },
  {
    id: 10,
    name: "Panitia Kompetisi Pajak 2022",
    rating: 5,
    comment:
      "Makasih banyakk yaa udah mau sabar banget ngadepin customer kayak aku, minta diskon tapi permintaan nya pun banyak, revisi juga banyakk... makasih juga udah mau jadi kayak tentor buat aku mbak ngebantu bangett.... semoga semakinn lancar rejekinya banyak orderan juga yaa mbakkk",
    created_at: "Panitia Kompetisi Pajak 2022",
    image: Avatar,
  },
  {
    id: 11,
    name: "Neko Esport",
    rating: 5,
    comment:
      "Terimakasih buat Proposal Studio, untuk designnya sangat bagus, dan udah dikasih tema free+murmer lagi, visualnya bikin jadi profesional, untuk layanan emang baik banget apa lagi adminnya udh sabar, untuk admin slow ress memang wajar, soalnya kan pasti bnyak orderan🙏😊",
    created_at: "Neko Esport",
    image: Avatar,
  },
  {
    id: 12,
    name: "Baby Ourlens Kediri",
    rating: 5,
    comment:
      "Isinya top wes top markotop, overall konsepnya cocok mbak, ini bener-bener sesuai Mba, gercep, fast respon, gak janji-janji palsu, hanya sedikit ditambah bahannya saja, selain itu semuanya sesuai apa yang di inginkan bosku Mba, semoga kerjasama kita berkesinambungan Mba",
    created_at: "Baby Ourlens Kediri",
    image: Avatar,
  },
  {
    id: 13,
    name: "Camp Naga Sakti",
    rating: 5,
    comment:
      "Okay thank you yah design proposalnya menarik. Overall, service nya bagus dan cepat tanggap yah bales chat client as well as ramah juga. Design nya juga very catchy dan relevant dgn topic jadi lebih interesting untuk audience yg baca. Worth the price sih eventho ada ujian ttp professional menjalankan task dr client. Itu aja sih ka. Pasti saya contact lagi kl ada butuh bantuan untuk proposal. Thank you so much.",
    created_at: "Pelatihan Muay Thai dan Boxing",
    image: Avatar,
  },
  {
    id: 14,
    name: "HAMN 2022",
    rating: 5,
    comment:
      "Pekerjaan selesai sesuai deadline, revisi beberapa kali langsung cepat direspon, keren deh, next bakal pake lagi 👍🏼👍🏼👍🏼",
    created_at: "Macroworldmania - Community of Macro Photographyt",
    image: Avatar,
  },
  {
    id: 15,
    name: "Sapta Mahifal Corporate",
    rating: 5,
    comment:
      "Seneng bgt order di proposal studio, fast respon mbak, pesen tgl 8 tp tgl 7 udh selese 👍, hasilnyaa jg bagus banget yahh👍 adminnya 1x kkonsultasi udah beres proposal👍 mantap👍👍mang terde best, cepat dan tepat, memuaskannn🔥 bakal jadi langganan proposal buat event saya❤️",
    created_at: "Sapta Mahifal Corporate",
    image: Avatar,
  },
  {
    id: 16,
    name: "Relawan Banjarnegara Atas",
    rating: 5,
    comment:
      "Sumpah baru kali ini proposal sekeren ini, bagus semua bikinan Proposal Studio",
    created_at: "Relawan Banjarnegara Atas",
    image: Avatar,
  },
  {
    id: 17,
    name: "Ve House of Beuaty Solo",
    rating: 5,
    comment: "Good semua",
    created_at: "Ve House of Beuaty Solo",
    image: Avatar,
  },
  {
    id: 18,
    name: "Minuman Sinom Titi Yuni Sidoarjo",
    rating: 5,
    comment:
      "Hasil proposalnya bagus sesuai keinginan, kakanya juga sabar klo direvisi revisi hehhee dan termasuk fast respon juga...semoga makin sukses kedepannya ka 😃",
    created_at: "Minuman Sinom Titi Yuni Sidoarjo",
    image: Avatar,
  },
  {
    id: 19,
    name: "Sapex Store",
    rating: 5,
    comment:
      "Untuk harga murah menurut saya. Kecepatan pengerjaan lumayan cepat. Untuk pembuatan konsep di bantu juga karna saya masih belum mengerti mengenai proposal sponsorship. Design juga berkualitas. Dan gratis konsultasi lagi.",
    created_at: "Sapex Store",
    image: Avatar,
  },
  {
    id: 20,
    name: "Kesatria Fest",
    rating: 5,
    comment:
      "Proposal Studio emang terde best, cepat dan tepat, memuaskannn🔥 bakal jadi langganan proposal buat event saya❤️",
    created_at: "Kesatria Fest",
    image: Avatar,
  },
  {
    id: 21,
    name: "Primadona Tour & Travel Bali",
    rating: 5,
    comment:
      "Sudah semuanya bagus Kak, makasih banyak ya Kak nanti bantuin lagi kalau aku butuhin lagi buat proposalnya",
    created_at: "Primadona Tour & Travel Bali",
    image: Avatar,
  },
  {
    id: 22,
    name: "Penawar Kandong dan Kopijo",
    rating: 5,
    comment:
      "Memuaskan, kk nya ramah, enak diajak diskusi, bolak balik revisi proposal juga kk sabar bgt",
    created_at: "Penawar Kandong dan Kopijo",
    image: Avatar,
  },
  {
    id: 23,
    name: "Sekolah Islam Terpadu Gameel Akhlaq",
    rating: 5,
    comment:
      "Alhamdulillah... Akhirnya proposalnya jadi dan bagus, kakaknya juga fast respon terus cepet buat revisianya. Terimakasih Proposal Studio ❤️",
    created_at: "Sekolah Islam Terpadu Gameel Akhlaq",
    image: Avatar,
  },
  {
    id: 24,
    name: "PT Dapur Goma Indonesia",
    rating: 5,
    comment:
      "Makasih banyak ya Kak, untuk konsep proposalnya cukup memuaskan, dan harganya bisa negosiasi sebelum deal, kalo buat pelayanannya puas bgtttt konsep yg di ingin in cust terealisasikan, makasihh banyak ya Kak",
    created_at: "PT Dapur Goma Indonesia",
    image: Avatar,
  },
  {
    id: 25,
    name: "Ling Management",
    rating: 5,
    comment:
      "Asli bagus banget hasil proposal nya, desain nya keren, font nya juga masuk banget sama desain nya, jadi keliatan elegan, makasih banyak ya kak 🤩 Sesuai dengan request an saya",
    created_at: "Ling Management",
    image: Avatar,
  },
];

const generateStarIcons = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < fullStars) {
      return <Icon key={index} name="star" />;
    } else if (hasHalfStar && index === fullStars) {
      return <Icon key={index} name="star-half" />;
    } else {
      return <Icon key={index} name="star-outline" />;
    }
  });

  return <div className="flex gap-1">{stars}</div>;
};

export default function Review() {
  return (
    <div className="my-[100px] mx-5 md:mx-20">
      <div className="justify-center">
        <h2 className="text-baseBlack text-2xl md:text-4xl tracking-tight font-bold text-center">
          Proposal Studio telah memiliki banyak
          <span className="text-primary"> testimoni positif</span> dari klien.
        </h2>
      </div>

      <Marquee pauseOnHover={true} gradient={true}>
        <div className="mt-8 md:mt-16 flex px-2 gap-5">
          {review.map((data) => (
            <figure
              key={data.id}
              className="w-[400px] h-[240px] rounded-[20px] px-8 py-7 border border-slate-200"
            >
              <figcaption className="flex gap-5">
                <div className="w-14 h-14 rounded-full">
                  <Image
                    alt="profil"
                    src={data.image}
                    className="rounded-full h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-semibold text-dark">{data.name}</span>
                  <span className="text-sm text-slate-500">
                    {data.created_at}
                  </span>
                </div>
              </figcaption>
              <blockquote>
                <p className="text-gray text-base mt-6 line-clamp-2">
                  {data.comment}
                </p>

                <div className="flex gap-1 mt-5">
                  {generateStarIcons(data.rating)}
                </div>
              </blockquote>
            </figure>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
