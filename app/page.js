import Map from "./section/Map";
import Hero from "./section/Hero";
import About from "./section/About";
import Header from "./component/Header";
import Service from "./section/Service";
import Contact from "./section/Contact";
import Footer from "./component/Footer";
import Testimony from "./section/Testimony";
import FeaturedEvent from "./section/FeaturedEvent";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
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
