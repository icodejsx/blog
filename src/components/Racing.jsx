import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_NEWS } from "../newsQueries";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  UserCircle,
  Lightning,
} from "phosphor-react";

const Racing = () => {
  const [content, updateContent] = useState("politics");

  console.log(content);

  useEffect(() => {
    const onClick = (event) => {
      updateContent(event.target.textContent);
      let cName = document.querySelectorAll(".tre");
      if (cName) {
        cName.forEach((element) => {
          element.classList.remove("bg-red-500", "text-white");
        });
        event.target.classList.add("bg-red-500", "text-white");
      }
    };

    const dropdownElements = document.querySelectorAll(".tre");
    dropdownElements.forEach((element) =>
      element.addEventListener("click", onClick)
    );

    return () => {
      dropdownElements.forEach((element) =>
        element.removeEventListener("click", onClick)
      );
    };
  }, []);

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
  } else console.log();
  if (content === "All") {
    updateContent("General");
  }

  const SportNews = data.blog.filter((blog) => blog.category === content);
  console.log(SportNews);

  return (
    <div className=" flex flex-col   items-center gap-5 md:w-1/2  ">
      <div className="flex flex-row justify-between  w-full border-b-2 border-gray-500 pb-2  ">
        <div>
          <p className="font-bold text-xl text-blue-500">Racing</p>
        </div>
        <div className="flex flex-row items-center  gap-4 ">
          <div className="flex flex-row gap-3  ">
            <div className="flex gap-3 items-center">
              <div className=" border border-gray-400 hover:bg-blue-500 ">
                <ArrowLeft size={15} />
              </div>
              <div className=" border border-gray-400 hover:bg-blue-500 ">
                <ArrowRight size={15} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-col  flex-col justify-between gap-7 ">
        {SportNews.slice(3, 4).map((blog, index) => {
          const date = new Date(blog.time);
          const formattedDate = date.toLocaleString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });

          return (
            <div className="flex  flex-col  gap-4   ">
              <div className="relative md:w-[21rem] xl:w-[25rem] ">
                <img
                  src={blog.image.url}
                  alt=""
                  className=" md:h-[13rem] md:w-[25rem] object-cover "
                  key={index}
                />
                <p className="bg-red-500 h-9 w-9 rounded-full items-center justify-center flex absolute -top-2 left-5  ">
                  <Lightning size={25} color="#ffffff" />
                </p>
                <div className="absolute bottom-4  right-5  bg-purple-500 p-1 px-2 rounded-md">
                  <p className="text-white text-sm ">Creative</p>
                </div>
              </div>
              <div className=" flex flex-col gap-3 e  ">
                <div className="flex gap-2 items-center text-xs">
                  <div className="flex gap-1 items-center">
                    <UserCircle size={16} color="#1d1d1d" />
                    <p>{blog.author} </p>
                  </div>
                  <div className="flex gap-1 items-center  ">
                    <Clock size={16} color="#1d1d1d" />
                    <p>{formattedDate}</p>
                  </div>
                </div>
                <div className=" ">
                  <h1 className=" md:text-xl text-xl mb-4 xl:mb-0 font-bold hover:text-blue-400">
                    {blog.heading}
                  </h1>
                  <p className="text-sm mt-3 ">
                    {blog.newsContent.length >= 140
                      ? blog.newsContent.slice(0, 140) + "..."
                      : blog.newsContent}
                  </p>
                  <Link
                    to={`/posts/${blog.id}`}
                    className="bg-blue-500 px-6 py-2 mt-3 inline-block rounded text-white"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}

        <div className=" flex flex-col justify-between flex-wrap gap-7  xl:gap-6  md:gap-4">
          {SportNews.slice(1, 3).map((blog, index) => {
            const date = new Date(blog.time);
            const formattedDate = date.toLocaleString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            });

            return (
              <div className="flex flex-row md:gap-3 gap-2   ">
                <div className="  object-cover  object-center ">
                  <Link to={`/posts/${blog.id}`}>
                    <div className="square-image-container">
                      <img
                        className="square-image"
                        src={blog.image.url}
                        alt="blog"
                      />
                    </div>
                  </Link>
                </div>
                <div className="flex flex-col justify-start text-sm gap-2">
                  <div className="flex items-center gap-1">
                    <div className="flex items-center gap-2">
                      <p className="bg-red-500 h-4 w-4 rounded-full items-center justify-center flex   ">
                        <Lightning size={12} color="#ffffff" />
                      </p>
                      <Clock size={14} color="#1d1d1d" />
                    </div>
                    <p>{formattedDate}</p>
                  </div>
                  <div className="font-bold hover:text-blue-500">
                    <p>{blog.heading}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Racing;
