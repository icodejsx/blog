import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_NEWS } from "../newsQueries";
import { ArrowLeft, ArrowRight, Clock, UserCircle } from "phosphor-react";

const WhatsNew = () => {
  const [content, updateContent] = useState("sports");

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

  const SportNews = data.blog.filter((blog) => blog.category === content);
  console.log(SportNews);

  return (
    <div className="container mx-auto flex flex-col   items-center gap-5 w-full bg-green-100 text-black p-9 ">
      <div className="flex flex-row justify-between  w-full border-b-2 border-gray-500 pb-2 ">
        <div>
          <p className="font-bold text-xl text-green-500">Whats New</p>
        </div>
        <div className="flex flex-row items-center  gap-4 "></div>
      </div>
      <div className="flex md:flex-row flex-col  flex-wrap justify-between gap-3 ">
        {SportNews.slice(0, 5).map((blog, index) => {
          const date = new Date(blog.time);
          const formattedDate = date.toLocaleString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });

          return (
            <div className="flex md:flex-col flex-col w-[20rem]">
              <div className="relative md:w-[20rem] ">
                <img
                  src={blog.image.url}
                  alt=""
                  className=" md:h-[13rem] md:w-[20rem] object-cover "
                  key={index}
                />

                <div className="absolute bottom-4  right-5  bg-purple-500 p-1 px-2 rounded-md">
                  <p className="text-white text-sm ">Travel</p>
                </div>
              </div>
              <div className=" flex flex-col gap-1 text-black ">
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
                  <h1 className=" md:text-xl text-xl mb-2 xl:mb-0 font-bold hover:text-green-400">
                    {blog.heading}
                  </h1>
                  <p className="text-sm mt-1 ">
                    {blog.newsContent.length >= 60
                      ? blog.newsContent.slice(0, 60) + "..."
                      : blog.newsContent}
                  </p>
                  <Link
                    to={`/posts/${blog.id}`}
                    className="bg-green-500 px-6 py-2 mt-3 inline-block rounded text-white"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatsNew;
