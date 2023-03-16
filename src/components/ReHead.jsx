import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_NEWS } from "../newsQueries";
import { Fade } from "react-awesome-reveal";

const ReHead = () => {
  const [content, updateContent] = useState("General");

  //   console.log(content);

  useEffect(() => {
    const onClick = (event) => {
      let cName = document.querySelectorAll(".reHead");
      updateContent(event.target.textContent);
      if (cName) {
        cName.forEach((element) => {
          element.classList.remove("bg-blue-500", "text-white");
        });
        event.target.classList.add("bg-blue-500", "text-white");
      }
    };

    const dropdownElements = document.querySelectorAll(".reHead");
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

  const trendingNews = data.blog.filter((blog) => blog.category === content);
  console.log(trendingNews);
  return (
    <div className="bg-black  mx-[3.3rem] justify-center items-center text-sm border border-t-4 border-blue-600 ">
      <div className="flex flex-row gap-6 text-white p-5">
        <Link className="hover:bg-blue-600 rounded-sm px-2  bg-blue-500 text-white reHead">
          General
        </Link>
        <Link className="hover:bg-blue-600 rounded-sm px-2 reHead">
          politics
        </Link>
        <Link className="hover:bg-blue-600 rounded-sm px-2 reHead"> Food</Link>
        <Link className="hover:bg-blue-600 rounded-sm px-2 reHead">
          {" "}
          Travel
        </Link>
      </div>
      <div>
        <div className="flex flex-wrap flex-row m-5 p-3">
          {trendingNews.slice(0, 5).map((blog, index) => {
            const date = new Date(blog.time);
            const formattedDate = date.toLocaleString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            });

            return (
              <div
                className=" w-1/5 flex  flex-row  items-center  p-3 "
                key={index}
              >
                <Fade>
                  <div className="h-full  overflow-hidden ">
                    <Link to={`/posts/${blog.id}`}>
                      <img
                        className="h-40  w-full object-cover object-center"
                        src={blog.image.url}
                        alt="blog"
                      />
                    </Link>
                    <div className="flex flex-col justify-start items-start text-gray-400 ">
                      <p className="leading-relaxed mb-1">
                        {blog.heading.length >= 40
                          ? blog.heading.slice(0, 40) + "..."
                          : blog.heading}
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <span className="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                          {" "}
                          {formattedDate}
                        </span>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReHead;
