import { gql } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import client from "../ApolloClient";
import { BlogList } from "../Data/BlogData";

const Blogs = ({ news }) => {
  console.log(news + "00");
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Todays General Hot News 🔥🔥🔥
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 ">
          {BlogList.slice(0, 6).map((blogList, index) => (
            <div
              className="p-4 border border-indigo-500/20 shadow-sm :hover-shadow-xl"
              key={index}
            >
              <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {blogList.title.length >= 50
                    ? blogList.title.slice(0, 50) + "...."
                    : blogList.title}
                </h2>
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={blogList.img}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font uppercase">
                  {blogList.type}
                </h3>
                <p className="flex items-center gap-2">
                  Author:
                  <span className="text-indigo-500">
                    {" "}
                    {blogList.author}
                  </span>{" "}
                </p>
                <p className="flex items-center gap-2">
                  Time:
                  <span className="text-indigo-500"> {blogList.time}</span>
                </p>

                <p className="leading-relaxed text-base mt-4">
                  {blogList.body.length >= 150
                    ? blogList.body.slice(0, 150) + " ...."
                    : blogList.body}
                </p>
                <Link
                  to={`/posts/${blogList.id}`}
                  className="bg-indigo-500 px-6 py-2 mt-3 inline-block rounded text-white"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className=" sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Sport News 🤾🏿🤾🏿
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

export async function getStaticProps() {
  const { data: news } = await client.query({
    query: gql`
      query {
        new {
          id
          newsContent
          author
          category
          time
          heading
          image {
            url
          }
        }
      }
    `,
  });
  console.log(news);
  return {
    props: {
      news,
    },
  };
}
