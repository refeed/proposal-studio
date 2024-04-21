import React from "react";
import Hero from "./component/Hero";
import Service from "./component/Service";
import Testimoni from "./component/Testimoni";
import Cta from "./component/Cta";
import Faq from "./component/Faq";
import Footer from "./component/Footer";
import About from "./component/About";
import Proposal from "./component/Proposal";
import Event from "./component/Event";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Proposal />
      <Event />
      <Testimoni />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
