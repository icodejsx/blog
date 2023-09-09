import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_NEWS } from "../newsQueries";
import Socials from "./Socials";
import {
  Lightning,
  MessengerLogo,
  TwitterLogo,
  ChatsCircle,
  Fire,
  Tag,
  FacebookLogo,
  PinterestLogo,
  Spinner, Spiral,
  ChartPie, CircleNotch, Campfire
} from "phosphor-react";
import Footer from "./Footer";
import Popular from "./Popular";
import WhatsNew from "./WhatsNew";
import MostViewed from "./MostViewed";

const BlogDetails = () => {
  const { id } = useParams();
  // const idNum = parseInt(id);
  console.log(id);

  // logic for getting the news from the data base
  const { loading, error, data } = useQuery(GET_NEWS, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :( </p>;
  }

  const dat = data && data.blog.filter((blog) => blog.id === id);
  console.log(dat && dat[0]);

  return (
    <div className="overflow-y-hidden  box-border">


      <section className="grid lg:grid-cols-3 gap-8  lg:p-16 md:p-4 p-2  ">
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-1 text-xs mt-5 md:mt-0">
              <p className="text-white bg-yellow-700 p-1 rounded-md px-2 "> Life Style</p>
              <p className="text-white bg-blue-700 p-1 rounded-md px-3">Travel</p>
              <p className="text-white bg-blue-600 p-1 rounded-md px-3">World</p>
            </div>
            <div className="flex gap-2 items-center font-bold">
              <p className="bg-red-500 h-7 w-7 rounded-full items-center justify-center flex ">
                <Lightning size={18} color="#ffffff" />
              </p>
              Trending
            </div>
            <h2 className="md:text-5xl text-3xl font-bold capitalize text-gray-900 md:font-medium title-font ">
              {dat && dat[0].heading}
            </h2>
            <h1 className="md:text-2xl text-gray-2">
              Ten years after its formation
            </h1>

            <div className="flex gap-1 lg:items-center justify-between text-sm lg:flex-row flex-col flex-wrap">
              <div className="flex md:flex-row flex-col gap-1 md:items-center text-center">
                <div className="flex gap-2 items-center">

                  <img
                    src="https://themes.tielabs.com/data/avatar-1.jpg"
                    alt="pro"
                    className="rounded-full h-10 w-10 object-cover"
                  />
                  <span className="">{dat && dat[0].author}</span>
                  <TwitterLogo weight="fill" />
                  <MessengerLogo weight="fill" />
                </div>
                <div className="flex gap-3 ml-5">
                  <p>Oct 25, 2016 </p>
                  <p>Last Updated: Nov 27, 2018</p>
                </div>
              </div>
              <div className="flex gap-3 items-center text-sm">
                <p className="flex gap-1 items-center">
                  <ChatsCircle size={16} color="#0a0a0a" weight="fill" /> 0
                </p>
                <p className="flex gap-1 items-center text-[#e90c0c]">
                  <Fire size={16} color="#e90c0c" weight="fill" /> 41,884
                </p>

                <p className="flex gap-2 items-center ">
                  <Tag size={16} color="black" weight="fill" /> 6 minutes read
                </p>
              </div>
            </div>
          </div>
          {/* 

last part of the socials 

 */}

          <div className="flex lg:px-10  my-4 gap-2 flex-wrap  ">
            <p className="bg-blue-600 hover:bg-blue-400 p-2 px-5 flex items-center text-white gap-2">
              <FacebookLogo size={20} color="#f0efef" weight="fill" />
              Facebook
            </p>

            <p className="bg-green-600/100 hover:bg-green-400 p-2 px-5 flex items-center text-white gap-2">
              <TwitterLogo size={20} color="#f0efef" weight="fill" />
              Twitter
            </p>

            <p className="bg-blue-400 hover:bg-blue-400 p-2 px-3 flex items-center text-white gap-2 font-bold">

              in
            </p>
            <p className="bg-blue-900 hover:bg-blue-800 p-2 px-3 flex items-center text-white gap-2  font-extrabold">

              t
            </p>
            <p className="bg-red-600 hover:bg-red-600 p-2 px-3 flex items-center text-white gap-2  font-extrabold">
              <PinterestLogo size={20} color="#f0efef" weight="fill" />
            </p>

            <p className="bg-purple-600 hover:bg-purple-600 p-2 px-3 flex items-center text-white gap-2  font-extrabold">
              <Spinner size={20} color="#faf9f9" weight="fill" />
            </p>
            <p className="bg-yellow-600 hover:bg-yellow-600 p-2 px-3 flex items-center text-white gap-2  font-extrabold">
              <Spiral size={20} color="#faf9f9" weight="fill" />
            </p>
            <p className="bg-blue-900 hover:bg-blue-600 p-2 px-3 flex items-center text-white gap-2  font-extrabold">
              <Campfire size={20} color="#faf9f9" weight="fill" />
            </p>
            <p className="bg-yellow-300 hover:bg-yellow-200 p-2 px-3 flex items-center text-white gap-2  font-extrabold">
              <ChartPie size={20} color="#faf9f9" weight="fill" />
            </p>
            <p className="bg-purple-900 hover:bg-purple-600 p-2 px-3 flex items-center text-white gap-2  font-extrabold">
              <CircleNotch size={20} color="#faf9f9" weight="fill" />
            </p>
          </div>

          <div className=" border border-indigo-500/20 w-full">
            <div className="bg-gray-100 rounded-lg w-full">
              <img
                className="md:h-[500px] rounded w-full object-cover object-top mb-6 "
                src={dat && dat[0].image.url}
                alt="content"
              />
              <div className="flex gap-6 items-center my-6 w-full">
                <p className="flex items-center gap-2">
                  Author:
                  <span className="text-indigo-500">{dat && dat[0].author}</span>
                </p>
              </div>
              <p className="leading-relaxed text-xl text-justify tracking-wide mt-1">
                {dat && dat[0].newsContent}
              </p>
            </div>
          </div>
        </div>

        {/* section part of  */}

        <div className="lg:col-span-1 ">
          <Socials />
          <div>

          </div>
          <Popular />

        </div>


      </section>

      <div className="flex  lg:flex-row flex-col w-full  container mx-auto md:px-5  p-3 gap-10">
        <div className="flex flex-col lg:w-2/3 w-full gap-14  ">
          <WhatsNew />
        </div>
        <div className="flex flex-col lg:w-1/3  w-full  ">
          <MostViewed />
        </div>
      </div>
      <Footer className="text-white" />
    </div>
  );
};

export default BlogDetails;
