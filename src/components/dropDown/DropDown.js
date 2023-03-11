import React, { useState } from "react";
import { BlogList } from "../../Data/BlogData";
import { Link } from "react-router-dom";

const DropDown = () => {
  const [news, setNews] = useState([]);
  // console.log(category);

  return (
    <div>
      <section className="text-gray-600 body-font hidden lg:flex ">
        <div className="container px-10 py-5 mx-auto items-center flex justify-center ">
          <div className="flex flex-wrap flex-row -m-4  ">
            {news.slice(0, 5).map((blog, index) => (
              <div
                className="p-1 md:w-1/5 flex  flex-row  items-center  "
                key={index}
                data-aos="fade-up"
              >
                <div className="h-full  overflow-hidden ">
                  <Link to={`/posts/${blog.id}`}>
                    <img
                      className="lg:h-40 md:h-20 w-full object-cover object-center"
                      src={blog.media}
                      alt="blog"
                    />
                  </Link>
                  <div className="flex flex-col justify-start items-start text-gray-400 ">
                    <p className="leading-relaxed mb-1">
                      {blog.title.length >= 40
                        ? blog.title.slice(0, 40) + "..."
                        : blog.title}
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <span className="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                        {" "}
                        {blog.published_date}
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
