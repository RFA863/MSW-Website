"use client"

import { useState } from "react";

import Map from "./section/Map";
import Hero from "./section/Hero";
import About from "./section/About";
import Header from "./component/Header";
import Service from "./section/Service";
import Contact from "./section/Contact";
import Footer from "./component/Footer";
import Testimony from "./section/Testimony";
import FeaturedEvent from "./section/FeaturedEvent";
import MobileSidebar from "./component/MobileSidebar";

export default function Home() {

  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <Header setOpenSidebar={setOpenSidebar} />
      <MobileSidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <Hero />
      <About />
      <FeaturedEvent />
      <Service />
      <Testimony />
      <Map />
      <Contact />
      <Footer />
    </div>
  );
}
