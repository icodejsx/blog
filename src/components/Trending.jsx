import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_NEWS } from "../newsQueries";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Lightning,
  UserCircle,
} from "phosphor-react";

const Trending = () => {
  const [content, updateContent] = useState("General");

  console.log(content);

  useEffect(() => {
    const onClick = (event) => {
      updateContent(event.target.textContent);
      let cName = document.querySelectorAll(".trend");
      if (cName) {
        cName.forEach((element) => {
          element.classList.remove("bg-red-500", "text-white");
        });
        event.target.classList.add("bg-red-500", "text-white");
      }
    };

    const dropdownElements = document.querySelectorAll(".trend");
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

  const trendingNews = data.blog.filter((blog) => blog.category === content);
  console.log(trendingNews);

  return (
    <div className="container mx-auto flex flex-col   items-center gap-5 w-full">
      <div className="flex flex-row justify-between  w-full border-b-2 border-black pb-2 ">
        <div>
          <p className="font-bold text-xl text-red-500">TrendingNews</p>
        </div>
        <div className="flex flex-row items-center  gap-4 ">
          <div className="flex flex-row gap-3  ">
            <Link className="text-red-500 text-xs p-1 rounded-sm trend">
              All
            </Link>
            <div className="md:flex hidden flex-row gap-3 ">
              <Link
                to=""
                className="hover:bg-red-500 hover:text-white text-xs p-1 rounded-sm trend "
              >
                sports
              </Link>
              <Link
                to=""
                className="hover:bg-red-500 hover:text-white text-xs p-1 rounded-sm trend"
              >
                Life Style
              </Link>
              <Link
                to=""
                className="hover:bg-red-500 hover:text-white text-xs p-1 rounded-sm trend"
              >
                Racing
              </Link>
              <Link
                to=""
                className="hover:bg-red-500 hover:text-white text-xs p-1 rounded-sm trend"
              >
                Sport
              </Link>
              <Link
                to=""
                className="hover:bg-red-500 hover:text-white text-xs p-1 rounded-sm trend"
              >
                Swimming
              </Link>
              <Link
                to=""
                className="hover:bg-red-500 hover:text-white text-xs p-1 rounded-sm trend"
              >
                Technology
              </Link>
              <Link
                to=""
                className="hover:bg-red-500 hover:text-white text-xs p-1 rounded-sm trend"
              >
                Travel
              </Link>
              <Link
                to=""
                className="hover:bg-red-500 hover:text-white text-xs p-1 rounded-sm trend"
              >
                World
              </Link>
            </div>
            <div className="flex gap-3 items-center">
              <div className=" border border-gray-400 hover:bg-red-500 ">
                <ArrowLeft size={15} />
              </div>
              <div className=" border border-gray-400 hover:bg-red-500 ">
                <ArrowRight size={15} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row  flex-col justify-between gap-7 ">
        {trendingNews.slice(0, 1).map((blog, index) => {
          const date = new Date(blog.time);
          const formattedDate = date.toLocaleString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });

          return (
            <div className="relative md:w-[30rem]  bg-blue-600">
              <img
                src={blog.image.url}
                alt=""
                className=" md:h-[30rem] object-cover "
                key={index}
              />
              <div class="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

              <p className="bg-red-500 h-9 w-9 rounded-full items-center justify-center flex absolute -top-2 left-5  ">
                <Lightning size={25} color="#ffffff" />
              </p>
              <div className="absolute bottom-32  left-5  bg-purple-500 p-1 px-2 rounded-md">
                <p className="text-white text-sm ">Creative</p>
              </div>
              <div className="absolute bottom-0 md:left-0 left-5  p-1 flex flex-col gap-3 text-white md:px-4 ">
                <h1 className=" md:text-2xl text-xl mb-4 xl:mb-0 font-bold">
                  {blog.heading}
                </h1>
                <div className="flex gap-2 items-center text-sm">
                  <div className="flex gap-1 items-center">
                    <UserCircle size={16} color="#d9d3d3" />
                    <p>{blog.author} </p>
                  </div>
                  <div className="flex gap-1 items-center  ">
                    <Clock size={16} color="#d9d3d3" />
                    <p>{formattedDate}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className=" flex flex-col gap-5 ">
          {trendingNews.slice(0, 5).map((blog, index) => {
            const date = new Date(blog.time);
            const formattedDate = date.toLocaleString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            });

            return (
              <div className="flex flex-row md:gap-4 gap-2 ">
                <div className=" w-40 object-cover bg-red-400 object-center ">
                  <Link to={`/posts/${blog.id}`}>
                    <img
                      className="h-20   object-cover object-center"
                      src={blog.image.url}
                      alt="blog"
                      key={index}
                    />
                  </Link>
                </div>
                <div className="flex flex-col justify-start text-sm gap-2">
                  <div className="flex items-center gap-1">
                    <div className="flex items-center gap-2">
                      <p className="bg-red-500 h-4 w-4 rounded-full items-center justify-center flex   ">
                        <Lightning size={12} color="#ffffff" />
                      </p>
                      <Clock size={14} color="#000000" />
                    </div>
                    <p>{formattedDate}</p>
                  </div>
                  <div className="font-bold hover:text-red-500">
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

export default Trending;
