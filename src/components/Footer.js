import React from "react";
import { Link } from "react-router-dom";
import { TwitterLogo } from "phosphor-react";
const Footer = () => {
  return (
    <div className=" bg-[#070505] ">
      <div className="md:grid gap-3  md:grid-cols-4 w-full lg:px-20 p-10 flex flex-col ">
        <div className="col-span-1">
          <div className="">
            <p className="border-b-4 pb-3 border-green-500  inline-block">
              Most Viewed Post{" "}
            </p>
          </div>
          <div className="flex flex-col gap-1">
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
          <div className="mb-2">
            <p className="border-b-4 pb-3  inline-block">Last Modified Posts</p>
          </div>
          <div className="flex flex-row gap-2 flex-wrap ">
            <div>
              <div>
                <img
                  src="https://jannah.tielabs.com/demo/wp-content/uploads/sites/8/2016/10/post-1-390x220.jpg"
                  alt=""
                  className="h-12"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://jannah.tielabs.com/demo/wp-content/uploads/sites/8/2016/05/11-390x220.jpg"
                  alt=""
                  className="h-12"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://jannah.tielabs.com/demo/#:~:text=Tags,a%20Clean%20Responsive"
                  alt=""
                  className="h-12"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://jannah.tielabs.com/demo/wp-content/uploads/sites/8/2016/10/slide-31-390x220.jpg"
                  alt=""
                  className="h-12"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://jannah.tielabs.com/demo/wp-content/uploads/sites/8/2016/10/slide-31-390x220.jpg"
                  alt=""
                  className="h-12"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://jannah.tielabs.com/demo/wp-content/uploads/sites/8/2016/10/slide-31-390x220.jpg"
                  alt=""
                  className="h-12"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://jannah.tielabs.com/demo/wp-content/uploads/sites/8/2016/10/post-1-390x220.jpg"
                  alt=""
                  className="h-12"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://jannah.tielabs.com/demo/wp-content/uploads/sites/8/2016/10/post-1-390x220.jpg"
                  alt=""
                  className="h-12"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://jannah.tielabs.com/demo/wp-content/uploads/sites/8/2016/10/post-1-390x220.jpg"
                  alt=""
                  className="h-12"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://jannah.tielabs.com/demo/wp-content/uploads/sites/8/2016/10/post-1-390x220.jpg"
                  alt=""
                  className="h-12"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="mb-2">
            <p className="border-b-4 pb-3 border-green-500  inline-block">
              Tag
            </p>
          </div>
          <div className="flex flex-row gap-2 flex-wrap">
            <Link to="">
              <div className=" hover:text-blue-600 border  border-gray-400 p-1 px-2 inline-block">
                app
              </div>
            </Link>

            <Link to="">
              <div className=" hover:text-blue-600 border  border-gray-400 p-1 px-2 inline-block">
                apple
              </div>
            </Link>

            <Link to="">
              <div className=" hover:text-blue-600 border  border-gray-400 p-1 px-2 inline-block">
                Facebook
              </div>
            </Link>

            <Link to="">
              <div className=" hover:text-blue-600 border  border-gray-400 p-1 px-2 inline-block">
                app
              </div>
            </Link>

            <Link to="">
              <div className=" hover:text-blue-600 border  border-gray-400 p-1 px-2 inline-block">
                apple
              </div>
            </Link>

            <Link to="">
              <div className=" hover:text-blue-600 border  border-gray-400 p-1 px-2 inline-block">
                Facebook
              </div>
            </Link>

            <Link to="">
              <div className=" hover:text-blue-600 border  border-gray-400 p-1 px-2 inline-block">
                app
              </div>
            </Link>

            <Link to="">
              <div className=" hover:text-blue-600 border  border-gray-400 p-1 px-2 inline-block">
                apple
              </div>
            </Link>
            <Link to="">
              <div className=" hover:text-blue-600 border  border-gray-400 p-1 px-2 inline-block">
                app
              </div>
            </Link>

            <Link to="">
              <div className=" hover:text-blue-600 border  border-gray-400 p-1 px-2 inline-block">
                Facebook
              </div>
            </Link>
            <Link to="">
              <div className=" hover:text-blue-600 border  border-gray-400 p-1 px-2 inline-block">
                app
              </div>
            </Link>

            <Link to="">
              <div className=" hover:text-blue-600 border  border-gray-400 p-1 px-2 inline-block">
                apple
              </div>
            </Link>

            <Link to="">
              <div className=" hover:text-blue-600 border  border-gray-400 p-1 px-2 inline-block">
                Facebook
              </div>
            </Link>
            <Link to="">
              <div className=" hover:text-blue-600 border  border-gray-400 p-1 px-2 inline-block">
                app
              </div>
            </Link>

            <Link to="">
              <div className=" hover:text-blue-600 border  border-gray-400 p-1 px-2 inline-block">
                apple
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-1">
          <div className="">
            <p className="border-b-4 pb-3 border-green-500  inline-block">
              Follow us
            </p>
          </div>
          <div className="flex flex-col gap-1 ">
            <Link to="" className="flex gap-1 items-start">
              <TwitterLogo size={30} color="#009ceb" />
              <div className=" hover:text-blue-600">
                <p className="text-xs">@kennykenzy</p>
                <span className=" text-white  hover:text-blue-600">
                  Themeforest doesn't provide multiple-use license, you need to
                  purchase a separate re… https://t.co/GI64fRkVvL
                </span>
              </div>
            </Link>

            <Link to="" className="flex gap-1 items-start">
              <TwitterLogo size={30} color="#009ceb" />
              <div className=" hover:text-blue-600">
                <p className="text-xs">@kennykenzy</p>
                <span className=" text-white  hover:text-blue-600">
                  Themeforest doesn't provide multiple-use license, you need to
                  purchase a separate re… https://t.co/GI64fRkVvL
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex md:px-20 p-10  gap-20">
        <div className=" flex items-end">
          <h1 className="text-7xl text-white font-bold">Jannah</h1>
          <span className="text-4xl text-white">news</span>
        </div>

        <div className=" w-96 text-sm">
          <p>
            Jannah is a Clean Responsive WordPress Newspaper, Magazine, News and
            Blog theme. Packed with options that allow you to completely
            customize your website to your needs.
          </p>
        </div>

        <div className="w-96">
          {" "}
          <div>
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-white"
            ></label>
            <input
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <p className="px-6 py-2 bg-blue-700 mt-2 text-white  flex items-center justify-center">
            Subscribe
          </p>
        </div>
      </div>

      <div className="flex md:px-20 p-6 bg-black">
        <p
          className="p-2 bg-blue-500 text-white
        "
        >
          &copy;Copyright 2023, All Rights Reserved
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
