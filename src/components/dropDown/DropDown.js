import React from "react";
import { BlogList } from "../../Data/BlogData";
import { Link } from "react-router-dom";

const DropDown = () => {
  return (
    <div>
      <section className="text-gray-600 body-font hidden lg:flex">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-wrap flex-row -m-4">
            {BlogList.slice(0, 5).map((blog, index) => (
              <div
                className="p-1 md:w-1/5 flex  flex-row  items-center"
                key={index}
              >
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden  ">
                  <img
                    className="lg:h-40 md:h-20 w-full object-cover object-center"
                    src={blog.img}
                    alt="blog"
                  />
                  <div className="">
                    <p className="leading-relaxed mb-3">
                      {blog.title.length >= 30
                        ? blog.title.slice(0, 30)
                        : blog.title}
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <Link
                        to={`/posts/${blog.ids}`}
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        href="a"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        {" "}
                        {blog.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DropDown;
