import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black ">
      <div className="grid gap-3  grid-cols-4 w-full p-20">
        <div className="col-span-1">
          <div className="">
            <p className="border-b-4 pb-3 border-green-500  inline-block">
              Most Viewed Post{" "}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Link to="">
              <div className=" hover:text-blue-600">
                <p className="text-xs"> oct 29, 2019 </p>
                <span className="font-bold text-white  hover:text-blue-600">
                  After all is said and done, more is done
                </span>
              </div>
            </Link>

            <Link to="">
              <div className=" hover:text-blue-600">
                <p className="text-xs"> oct 29, 2019 </p>
                <span className="font-bold text-white  hover:text-blue-600">
                  sucess is not a Good Teacher, failuire makes you humble
                </span>
              </div>
            </Link>

            <Link to="">
              <div className=" hover:text-blue-600">
                <p className="text-xs"> oct 29, 2019 </p>
                <span className="font-bold text-white  hover:text-blue-600">
                  enot who has much is rich, but who gives much
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-1">
          <div>
            <p className="border-b-4 pb-3  inline-block">Last Modified Posts</p>
          </div>
          <div className="flex flex-col ">
            <div></div>
          </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default Footer;
