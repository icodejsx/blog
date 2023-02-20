import React from "react";
import { useParams } from "react-router-dom";
import { BlogList } from "../Data/BlogData";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const idNum = parseInt(id);
  const data = BlogList.filter((blog) => blog.id === idNum);

  // picking arrays that dosent have to do with id founf in the parameter
  const other = BlogList.filter((blog) => blog.id !== idNum);
  return (
    <main className="w-full h-auto px-8">
      <section className="grid md:grid-cols-3 gap-8 mt-20">
        <div className="md:col-span-2">
          <div className="p-4 border border-indigo-500/20 ">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-4xl capitalize text-gray-900 font-medium title-font mb-4">
                {data[0].title}
              </h2>
              <img
                className="h-[500px] rounded w-full object-cover object-top mb-6"
                src={data[0].img}
                alt="content"
              />
              <div className="flex gap-6 items-center my-6">
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font uppercase flex items-center gap-2">
                  Category:
                  <span>{data[0].type}</span>
                </h3>
                <p className="flex items-center gap-2">
                  Author:
                  <span className="text-indigo-500">{data[0].author}</span>
                </p>
                <p className="flex items-center gap-2 text-lg">
                  Time:
                  <span className="text-indigo-500"> {data[0].time}</span>
                </p>
              </div>
              <p className="leading-relaxed text-xl text-justify tracking-wide mt-1">
                {data[0].body}
              </p>
            </div>
          </div>
        </div>
        <div className="md:cols-span-1">
          <h3
            className="text-3xl capit
             text-slate-900"
          >
            Related Post
          </h3>
          {other.slice(0, 5).map((blog, index) => (
            <div
              className="p-4 border border-indigo-500/20 shadow-sm :hover-shadow-xl"
              key={index}
            >
              <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {blog.title.length >= 50
                    ? blog.title.slice(0, 50) + "...."
                    : blog.title}
                </h2>
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={blog.img}
                  alt="content"
                />

                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {blog.title.length >= 50
                    ? blog.title.slice(0, 50) + "...."
                    : blog.title}
                </h2>

                <Link
                  to={`/posts/${blog.id}`}
                  className="bg-indigo-500 px-6 py-2 mt-3 inline-block rounded text-white"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
