import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_NEWS } from "../newsQueries";

import { Link } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const idNum = parseInt(id);

  // logiv for getting the news from the data vase
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

  const dat = data.blog.filter((blog) => blog.id === idNum);
  console.log(dat[0]);

  return (
    <section className="grid md:grid-cols-3 gap-8 mt-20">
      <div className="md:col-span-2">
        <div className="p-4 border border-indigo-500/20 ">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-4xl capitalize text-gray-900 font-medium title-font mb-4">
              {dat[0].heading}
            </h2>
            <img
              className="h-[500px] rounded w-full object-cover object-top mb-6"
              src={dat[0].image.url}
              alt="content"
            />
            <div className="flex gap-6 items-center my-6">
              <p className="flex items-center gap-2">
                Author:
                <span className="text-indigo-500">{dat[0].author}</span>
              </p>
            </div>
            <p className="leading-relaxed text-xl text-justify tracking-wide mt-1">
              {dat[0].newContent}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
