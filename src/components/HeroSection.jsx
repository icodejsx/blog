import React from "react";
import { Lightning } from "phosphor-react";
import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <div className="container mx-auto flex md:px-5 px-3 xl:flex-row flex-col items-center gap-1">
      <div className=" xl:w-1/2  w-full ">
        <div className="relative h-full object-cover group ">
          <img
            src="https://media.istockphoto.com/id/1366052585/photo/shot-of-a-group-of-friends-hanging-out-before-working-out-together.jpg?s=612x612&w=0&k=20&c=rj7LgjUuXde0eLWikS1rvDnsKDdBotgsy9eM5HDzko0="
            alt=""
            className=" xl:w-[40rem] object-cover w-full md:h-96 xl:h-full bg-opacity-50"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
          <div className="absolute top-5 left-6  bg-amber-500 p-1 px-2 rounded-md">
            <p className="text-white text-sm ">Life style</p>
          </div>
          <div className="absolute bottom-0 left-0  p-1 flex flex-col gap-4 text-white font-bold md:px-7 ">
            <p className="font-normal md:block hidden">oct 27, 2022</p>
            <h1 className=" md:text-4xl text-xl mb-4 xl:mb-0">
              After all is said and done, more is done
            </h1>

            <p className="font-medium text-sm xl:block hidden group ">
              stay focused and remember we design the best WordPress News and
              Magazine Themes. It’s the....
            </p>
          </div>
        </div>
      </div>

      <div className=" xl:w-1/2 xl:h-1/2 flex gap-1 flex-col p-1">
        <div className="group relative w-full hover:transition ease-in-out  delay-150 ho">
          <img
            src="https://media.istockphoto.com/id/507872584/photo/colorful-hot-air-balloons-over-green-rice-field.jpg?s=612x612&w=0&k=20&c=HZfr7MATl9WTTLTcxfqesX8J9ErLPuwkwP-QMQfkbWY="
            alt=""
            className="w-full h-[12.9rem] object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
          <div className="absolute top-5 left-6  bg-blue-700 p-1 px-3 rounded-md">
            <p className="text-white text-sm ">Travel</p>
          </div>
          <div className="absolute bottom-0 left-0  gap-2 p-1 flex flex-col  text-white font-bold md:px-7 ">
            <div className="flex flex-row items-center gap-2">
              <p className="bg-red-500 h-5 w-5 rounded-full items-center justify-center md:flex  hidden ">
                <Lightning size={15} color="#ffffff" />
              </p>
              <p className="  font-normal md:block hidden">oct 27, 2022</p>
            </div>
            <div className="flex flex-col ">
              <h1 className=" md:text-xl text-xl mb-4 xl:mb-2 group-hover:transition-all  duration-300">
                Success is not a good techer, but failure makes you humble
              </h1>

              <p className="font-medium text-sm hidden ">
                <Fade>
                  stay focused and remember we design the best WordPress News
                  and Magazine Themes. It’s the....
                </Fade>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-1 ">
          <div className="relative onhover">
            <img
              src="https://media.istockphoto.com/id/1353365157/photo/copy-space-shot-of-young-woman-lounging-on-sofa-with-hands-behind-head-and-daydreaming.jpg?s=612x612&w=0&k=20&c=gX4WnuUB_jmI066Iz7Tw50V6LOFVgO-t2G6NRcsz6os= "
              alt=""
              className="object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <div className="absolute  md:top-5 md:left-6  top-3 left-4  bg-blue-700 p-1 px-3 rounded-md">
              <p className="text-white text-sm ">Travel</p>
            </div>
            <div className="absolute bottom-0 left-0  gap-1 p-1 flex flex-col  text-white font-bold md:px-7 ">
              <div className="flex flex-row items-center gap-2">
                <p className="bg-red-500 h-5 w-5 rounded-full items-center justify-center md:flex  hidden ">
                  <Lightning size={15} color="#ffffff" />
                </p>
                <p className="font-normal md:block hidden">oct 27, 2022</p>
              </div>
              <div className="flex flex-col ">
                <h1 className=" md:text-xl text-xl md:mb-4 xl:mb-2">
                  Success is not a good techer,
                </h1>

                <p className="font-medium text-sm hidden hover:flex ">
                  <Fade>
                    stay focused and remember we design the best WordPress News
                    and Magazine Themes. It’s the....
                  </Fade>
                </p>
              </div>
            </div>
          </div>
          <div className="relative onhover">
            <img
              src="https://media.istockphoto.com/id/1382390344/photo/diverse-women-volunteers.jpg?s=612x612&w=0&k=20&c=z3AQ4oUUBOJlPHUAD03KN56ddnKglsIRlnmyqhiQuZc="
              alt=""
              className="object-cover"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <div className="absolute md:top-5 md:left-6  top-3 left-4 bg-blue-500 p-1 px-3 rounded-md">
              <p className="text-white text-sm ">Technology</p>
            </div>
            <div className="absolute bottom-0 left-0  gap-1 p-1 flex flex-col  text-white font-bold md:px-7 ">
              <div className="flex flex-row items-center gap-2">
                <p className="bg-red-500 h-5 w-5 rounded-full items-center justify-center md:flex  hidden ">
                  <Lightning size={15} color="#ffffff" />
                </p>
                <p className="font-normal md:block hidden">oct 27, 2022</p>
              </div>
              <div className="flex flex-col ">
                <h1 className=" md:text-xl text-xl md:mb-4 xl:mb-2">
                  Success is not a good techer,
                </h1>

                <p className="font-medium text-sm hidden hover:flex ">
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
    </div>
  );
};

export default HeroSection;
