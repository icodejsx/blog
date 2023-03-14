import React from "react";
import {
  ThumbsUp,
  Heart,
  FacebookLogo,
  TwitterLogo,
  YoutubeLogo,
  Webcam,
  DribbbleLogo,
  BehanceLogo,
  InstagramLogo,
  GithubLogo,
} from "phosphor-react";

const Socials = () => {
  return (
    <div className="flex flex-col items-center justify-center content-around mx-auto w-full xl:px-4 gap-3">
      <div className="flex flex-row justify-between w-full  border-b-2 border-black pb-2  ">
        <p className="font-bold">Follow Us </p>
        <ThumbsUp size={28} color="#0f0f0f" />
      </div>

      <div className="flex flex-row items-center">
        <Heart size={28} color="#f72222" />
        <p>
          Join <span className="font-bold">1.5</span>followers
        </p>
      </div>
      <div className="flex flex-row flex-wrap  gap-3 w-full xl:p-3 ">
        <div className="flex flex-row w-full gap-3">
          <div className="w-1/2 flex flex-row items-center gap-3 bg-blue-600 text-white justify-start ">
            <div className="mx-5 flex-row flex items-center gap-3 py-1 ">
              <FacebookLogo size={28} color="#ffffff" />
              <div className="flex flex-col  gap-0">
                <p className=" text-sm font-bold">1.4M</p>
                <p className=" text-sm ">Fans</p>
              </div>
            </div>
          </div>

          <div className="w-1/2 flex flex-row items-center gap-3 bg-blue-500 text-white justify-start ">
            <div className="mx-5 flex-row flex items-center gap-3 py-1 ">
              <TwitterLogo size={28} color="#ffffff" />
              <div className="flex flex-col  gap-0">
                <p className=" text-sm font-bold">1,281</p>
                <p className=" text-sm ">followers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row w-full gap-3">
          <div className="w-1/2 flex flex-row items-center gap-3 bg-red-600 text-white justify-start ">
            <div className="mx-5 flex-row flex items-center gap-3 py-1 ">
              <YoutubeLogo size={28} color="#ffffff" />
              <div className="flex flex-col  gap-0">
                <p className=" text-sm font-bold">50,400</p>
                <p className=" text-sm ">followers</p>
              </div>
            </div>
          </div>

          <div className="w-1/2 flex flex-row items-center gap-3 bg-blue-500 text-white justify-start ">
            <div className="mx-5 flex-row flex items-center gap-3 py-1 ">
              <Webcam size={28} color="#ffffff" />
              <div className="flex flex-col  gap-0">
                <p className=" text-sm font-bold">1,471</p>
                <p className=" text-sm ">Subscribers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row w-full gap-3">
          <div className="w-1/2 flex flex-row items-center gap-3 bg-pink-600 text-white justify-start ">
            <div className="mx-5 flex-row flex items-center gap-3 py-1 ">
              <DribbbleLogo size={28} color="#ffffff" />
              <div className="flex flex-col  gap-0">
                <p className=" text-sm font-bold">63</p>
                <p className=" text-sm ">followers</p>
              </div>
            </div>
          </div>

          <div className="w-1/2 flex flex-row items-center gap-3 bg-blue-400 text-white justify-start ">
            <div className="mx-5 flex-row flex items-center gap-3 py-1 ">
              <BehanceLogo size={28} color="#ffffff" />
              <div className="flex flex-col  gap-0">
                <p className=" text-sm font-bold">64,662</p>
                <p className=" text-sm ">followers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row w-full gap-3">
          <div className="w-1/2 flex flex-row items-center gap-3 bg-pink-400 text-white justify-start ">
            <div className="mx-5 flex-row flex items-center gap-3 py-1 ">
              <InstagramLogo size={28} color="#ffffff" />
              <div className="flex flex-col  gap-0">
                <p className=" text-sm font-bold">4,500</p>
                <p className=" text-sm ">followers</p>
              </div>
            </div>
          </div>

          <div className="w-1/2 flex flex-row items-center gap-3 bg-blue-300 text-white justify-start ">
            <div className="mx-5 flex-row flex items-center gap-3 py-1 ">
              <GithubLogo size={28} color="#ffffff" />
              <div className="flex flex-col  gap-0">
                <p className=" text-sm font-bold">3</p>
                <p className=" text-sm ">followers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
