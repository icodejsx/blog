import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Lightning,
  UserCircle,
} from "phosphor-react";

const Trending = () => {
  return (
    <div className="container mx-auto flex flex-col   items-center gap-5 w-full">
      <div className="flex flex-row justify-between  w-full border-b-2 border-black pb-2 ">
        <div>
          <p className="font-bold text-xl text-red-500">TrendingNews</p>
        </div>
        <div className="flex flex-row items-center gap-4 ">
          <div className="flex flex-row gap-3 ">
            <p className="text-red-500 text-xs p-1 rounded-sm">All</p>
            <p className="hover:bg-red-500 hover:text-white text-xs p-1 rounded-sm">
              Food
            </p>
            <p className="hover:bg-red-500 hover:text-white text-xs p-1 rounded-sm">
              Life Style
            </p>
            <p className="hover:bg-red-500 hover:text-white text-xs p-1 rounded-sm">
              Racing
            </p>
            <p className="hover:bg-red-500 hover:text-white text-xs p-1 rounded-sm">
              Sport
            </p>
            <p className="hover:bg-red-500 hover:text-white text-xs p-1 rounded-sm">
              Swimming
            </p>
            <p className="hover:bg-red-500 hover:text-white text-xs p-1 rounded-sm">
              Technology
            </p>
            <p className="hover:bg-red-500 hover:text-white text-xs p-1 rounded-sm">
              Travel
            </p>
            <p className="hover:bg-red-500 hover:text-white text-xs p-1 rounded-sm">
              World
            </p>
          </div>
          <div className="flex gap-1">
            <div className=" border border-gray-700">
              <ArrowLeft size={15} />
            </div>
            <div className=" border border-gray-700">
              <ArrowRight size={15} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-7 ">
        <div className="relative w-[30rem] object-fit bg-blue-600">
          <img
            src="https://media.istockphoto.com/id/1388417963/photo/strong-confident-athletic-sportswoman-standing.jpg?s=612x612&w=0&k=20&c=5obM0vzsantwg6RnLMrJXy-nkJ2cs1K5XvW1eyAJ7FU="
            alt=""
            className=" h-[30rem] object-cover "
          />
          <p className="bg-red-500 h-9 w-9 rounded-full items-center justify-center md:flex absolute -top-2 left-5  ">
            <Lightning size={25} color="#ffffff" />
          </p>
          <div class="absolute bottom-32 left-5  bg-purple-500 p-1 px-2 rounded-md">
            <p class="text-white text-sm ">Creative</p>
          </div>
          <div class="absolute bottom-0 left-0  p-1 flex flex-col gap-3 text-white md:px-4 ">
            <h1 className=" md:text-2xl text-xl mb-4 xl:mb-0 font-bold">
              Not who has more Is Rich, But who gives more
            </h1>
            <div className="flex gap-2 items-center text-sm">
              <div className="flex gap-1 items-center">
                <UserCircle size={14} color="#d9d3d3" />
                <p>Author </p>
              </div>
              <div className="flex gap-1 items-center  ">
                <Clock size={14} color="#d9d3d3" />
                <p>oct 27, 2022</p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-row gap-4">
            <img
              src="https://media.istockphoto.com/id/1425532235/photo/watching-soccer-championship-at-home.jpg?s=612x612&w=0&k=20&c=O1n9fnvCFmPZS9qL22A17a3yzsZxAWLjaQxs7qa9_VQ="
              alt=""
              className="h-20 w-22 "
            />
            <div className="flex flex-col justify-start text-sm gap-2">
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-2">
                  <p className="bg-red-500 h-4 w-4 rounded-full items-center justify-center md:flex  hidden ">
                    <Lightning size={12} color="#ffffff" />
                  </p>
                  <Clock size={14} color="#000000" />
                </div>
                <p>oct 19, 2022</p>
              </div>
              <div className="font-bold hover:text-red-500">
                <p>The Top 10 Best Computer Speakers in the Market</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
