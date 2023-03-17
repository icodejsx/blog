import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Lightning } from "phosphor-react";

const SportSec = () => {
  return (
    <div className="bg-gray-200 md:flex block  items-center justify-center">
      <div className="container mx-auto flex md:px-5 px-3 xl:flex-row flex-col items-center gap-3 p-16">
        <div className=" md:w-4/5 object-cover relative onhover ">
          <img
            src=" https://media.istockphoto.com/id/1366052585/photo/shot-of-a-group-of-friends-hanging-out-before-working-out-together.jpg?s=612x612&w=0&k=20&c=rj7LgjUuXde0eLWikS1rvDnsKDdBotgsy9eM5HDzko0="
            alt=""
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
          <div className="absolute top-5 left-6  bg-blue-700 p-1 px-3 rounded-md">
            <p className="text-white text-sm ">Sport</p>
          </div>
          <div className="absolute bottom-0 left-0  gap-2 p-1 flex flex-col  text-white font-bold md:px-7 ">
            <div className="flex flex-row items-center gap-2">
              <p className="  font-normal md:block hidden">oct 27, 2022</p>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="">
                <h1 className=" md:text-4xl text-xl mb-4 xl:mb-0">
                  After all is said and done, more is done
                </h1>
              </Link>

              <p className="font-medium text-sm hidden ">
                <Fade>
                  stay focused and remember we design the best WordPress News
                  and Magazine Themes. It’s the....
                </Fade>
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-4/5 object-cover relative onhover">
          <img
            src=" https://media.istockphoto.com/id/507872584/photo/colorful-hot-air-balloons-over-green-rice-field.jpg?s=612x612&w=0&k=20&c=HZfr7MATl9WTTLTcxfqesX8J9ErLPuwkwP-QMQfkbWY="
            alt=""
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
          <div className="absolute top-5 left-6  bg-blue-700 p-1 px-3 rounded-md">
            <p className="text-white text-sm ">Sport</p>
          </div>
          <div className="absolute bottom-0 left-0  gap-2 p-1 flex flex-col  text-white font-bold md:px-7 ">
            <div className="flex flex-row items-center gap-2">
              <p className="bg-red-500 h-4 w-4 rounded-full items-center justify-center flex   ">
                <Lightning size={12} color="#ffffff" />
              </p>
              <p className="  font-normal md:block hidden">oct 27, 2022</p>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="">
                <h1 className=" md:text-4xl text-xl mb-4 xl:mb-0">
                  After all is said and done, more is done
                </h1>
              </Link>

              <p className="font-medium text-sm hidden ">
                <Fade>
                  stay focused and remember we design the best WordPress News
                  and Magazine Themes. It’s the....
                </Fade>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportSec;
