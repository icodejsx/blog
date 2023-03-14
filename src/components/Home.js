import React from "react";
import Blogs from "./Blogs";
import { Lightning } from "phosphor-react";
import HeroSection from "./HeroSection";
import Trending from "./Trending";

const Home = () => {
  return (
    <div>
      <section className="text-gray-600 body-font  border-slate-900 md:mt-8  mt-4">
        <HeroSection />
        <Trending />
      </section>
    </div>
  );
};

export default Home;
