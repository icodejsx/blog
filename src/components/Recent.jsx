import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_NEWS } from "../newsQueries";
import { ArrowLeft, ArrowRight, Clock, Lightning } from "phosphor-react";

const Recent = () => {
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

    const SportNews = data.blog.filter((blog) => blog.category === content);
    console.log(SportNews);

    return (
        <div className="container mx-auto flex flex-col   items-center gap-5 w-full  text-black p-9 ">
            <div className="flex flex-row justify-between  w-full border-b-2 border-gray-500 pb-2 ">
                <div>
                    <p className="font-bold  ">Recent Tech News</p>
                </div>

            </div>
            <div className="flex md:flex-row  flex-col justify-between gap-3 ">
                <div className=" flex flex-col lg:justify-between flex-wrap gap-7  xl:gap-6  md:gap-5   justify-start">
                    {SportNews.slice(0, 5).map((blog, index) => {
                        const date = new Date(blog.time);
                        const formattedDate = date.toLocaleString("en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        });

                        return (
                            <div className="flex flex-row md:gap-3 gap-2  lg:w-80 ">
                                <div className="flex flex-col justify-start text-sm gap-2">
                                    <div className="font-bold hover:text-green-500">
                                        <p>{blog.heading}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="flex items-center gap-2">
                                            <Clock size={14} color="#1d1d1d" />
                                        </div>
                                        <p>{formattedDate}</p>
                                    </div>
                                </div>
                                <div className="  object-cover  object-center relative ">
                                    <Link to={`/posts/${blog.id}`}>
                                        <div className="square-image-container ">
                                            <img
                                                className="square-image"
                                                src={blog.image.url}
                                                alt="blog"
                                                key="index"
                                            />
                                        </div>
                                    </Link>

                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Recent;
