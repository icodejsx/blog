import React from "react";
import HeroSection from "./HeroSection";
import Socials from "./Socials";
import Trending from "./Trending";

const Home = () => {
  return (
    <div>
      <section className="text-gray-600 body-font  border-slate-900 md:mt-8  mt-4 flex flex-col gap-10">
        <HeroSection />

        <div className="flex  lg:flex-row flex-col  container mx-auto md:px-5  p-3">
          <div className="flex flex-col lg:w-2/3 w-full bg-yellow-300">
            <Trending />
          </div>
          <div className="flex flex-col lg:w-1/3  w-full ">
            <Socials />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
