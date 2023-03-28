import React from "react";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import LifeStyle from "./LifeStyle";
import MostViewed from "./MostViewed";
import Racing from "./Racing";
import RaceLife from "./Racing";
import Socials from "./Socials";
import Sport from "./Sport";
import SportSec from "./SportSec";
import Tech from "./Tech";
import Trending from "./Trending";
import WhatsNew from "./WhatsNew";

const Home = () => {
  return (
    <div>
      <section className="text-gray-600 body-font  border-slate-900 md:mt-8  mt-4 flex flex-col gap-10">
        <HeroSection />

        <div className="flex  lg:flex-row flex-col  container mx-auto md:px-5  p-3 gap-10">
          <div className="flex flex-col lg:w-2/3 w-full gap-14  ">
            <Trending />
            <Sport />

            <div className="container mx-auto flex md:flex-row flex-col items-center gap-10 w-full p-5  ">
              <Racing />
              <LifeStyle />
            </div>
          </div>
          <div className="flex flex-col lg:w-1/3  w-full ">
            <Socials />
          </div>
        </div>
        <SportSec />
        <div className="flex  lg:flex-row flex-col  container mx-auto md:px-5  p-3 gap-10">
          <div className="flex flex-col lg:w-2/3 w-full gap-14  ">
            <Tech />
          </div>
          <div className="flex flex-col lg:w-1/3  w-full ">
            <MostViewed />
          </div>
        </div>

        <div className="flex  lg:flex-row flex-col  container mx-auto md:px-5  p-3 gap-10">
          <div className="flex flex-col lg:w-2/3 w-full gap-14  ">
            <WhatsNew />
          </div>
          <div className="flex flex-col lg:w-1/3  w-full ">
            <MostViewed />
          </div>
        </div>

        <Footer />
      </section>
    </div>
  );
};

export default Home;
