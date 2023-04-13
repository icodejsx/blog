import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_NEWS } from "../newsQueries";
import Socials from "./Socials";
import { Lightning } from "phosphor-react";

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
    <section className="grid md:grid-cols-3 gap-8  md:p-16">
      <div className="md:col-span-2">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-1 text-sm">
            <p className="text-white bg-yellow-700 p-1 rounded-md px-2 ">
              Life Style
            </p>
            <p className="text-white bg-blue-700 p-1 rounded-md px-3">Travel</p>
            <p className="text-white bg-blue-600 p-1 rounded-md px-3">World</p>
          </div>
          <div className="flex gap-2 items-center font-bold">
            <p className="bg-red-500 h-7 w-7 rounded-full items-center justify-center flex ">
              <Lightning size={18} color="#ffffff" />
            </p>
            Trending
          </div>
          <h2 className="text-5xl capitalize text-gray-900 font-medium title-font ">
            {dat && dat[0].heading}
          </h2>
          <h1 className="text-2xl text-gray-2 f">
            Ten years after its formation
          </h1>

          <div>
            <img
              src="/public/as.png"
              alt="pro"
              className="rounded-full h-10 w-10 object-cover"
            />
          </div>
        </div>
        <div className=" border border-indigo-500/20 ">
          <div className="bg-gray-100 rounded-lg">
            <img
              className="md:h-[500px] rounded w-full object-cover object-top mb-6"
              src={dat && dat[0].image.url}
              alt="content"
            />
            <div className="flex gap-6 items-center my-6">
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

      <div className="col-span-1">
        <Socials />
      </div>
    </section>
  );
};

export default BlogDetails;
