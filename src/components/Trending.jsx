import React from "react";
import { ArrowLeft, ArrowRight } from "phosphor-react";
const Trending = () => {
  return (
    <div className="container mx-auto flex flex-col   items-center gap-1 w-full">
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
      <div className="flex flex-row ">
        <div className="relative ">
          <img
            src="https://jannah.tielabs.com/jannah/wp-content/uploads/sites/8/2016/10/post-image-1.jpg"
            alt=""
            className=" f"
          />
          <div class="absolute bottom-36 left-6  bg-amber-500 p-1 px-2 rounded-md">
            <p class="text-white text-sm ">Life style</p>
          </div>
          <div class="absolute bottom-0 left-0  p-1 flex flex-col gap-4 text-white font-bold md:px-4 ">
            <h1 className=" md:text-2xl text-xl mb-4 xl:mb-0">
              Not who has more Is Rich, But who gives more
            </h1>

            <p className="font-normal md:block hidden">oct 27, 2022</p>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Trending;
