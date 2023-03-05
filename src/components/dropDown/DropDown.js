import React, { useState, useEffect } from "react";
import { BlogList } from "../../Data/BlogData";
import { Link } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const DropDown = ({ category }) => {
  const [news, setNews] = useState([]);
  console.log(news);

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://newsdata.io/api/1/news?apikey=pub_180765eeaff5bca6c20aef0b559d95647954f"
  //       );
  //       setNews(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchNews();

  //   AOS.init();
  // }, []);

  useEffect(() => {
    const fetchNews = async () => {
      const options = {
        method: "GET",
        url: "https://api.newscatcherapi.com/v2/search",
        params: {
          q: `{${category}}`,
          lang: "en",
          sort_by: "relevancy",
          page: "1",
        },
        headers: {
          "x-api-key": "_ZlYiesryo1-7V2KRW4GtEQ87-U-m9agyXqTmuZ8JWE",
        },
      };

      try {
        const response = await axios.request(options);
        setNews(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font hidden lg:flex ">
        <div className="container px-10 py-5 mx-auto items-center flex justify-center ">
          <div className="flex flex-wrap flex-row -m-4  ">
            {BlogList.slice(0, 5).map((blog, index) => (
              <div
                className="p-1 md:w-1/5 flex  flex-row  items-center  "
                key={index}
                data-aos="fade-up"
              >
                <div className="h-full  overflow-hidden ">
                  <Link to={`/posts/${blog.id}`}>
                    <img
                      className="lg:h-40 md:h-20 w-full object-cover object-center"
                      src={blog.img}
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
                        {blog.date}
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
