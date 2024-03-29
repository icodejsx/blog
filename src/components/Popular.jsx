import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_NEWS } from "../newsQueries";
import { ArrowLeft, ArrowRight, Clock, Lightning, EnvelopeSimple } from "phosphor-react";

const Popular = () => {
    const [content, updateContent] = useState("politics");

    console.log(content);
    // logic for new selection
    const handleNewsPol = () => updateContent("politics");
    const handleNewsGen = () => updateContent("General");

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
        <div className="container mx-auto flex flex-col   items-center gap-5 w-full  text-black lg:p-9 ">
            <div className="flex flex-row justify-between  w-full  pb-2 ">
                <Link onClick={handleNewsPol} className=" border border-b-2 p-5 border-b-blue-500">
                    <p className="font-bold  text-blue-500">Recent</p>

                </Link>
                <Link onClick={handleNewsGen} className=" border p-6">
                    <p className="  ">Popular</p>

                </Link>
                <Link onClick={handleNewsGen} className=" border  p-6 ">
                    <p className=" ">comments</p>

                </Link>

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
                                <div className="flex flex-col justify-start text-sm gap-2">
                                    <div className="font-bold hover:text-blue-500">
                                        <p>{blog.heading.length >= 20 ? blog.heading.slice(20) : blog.heading}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="flex items-center gap-2">
                                            <Clock size={14} color="#1d1d1d" />
                                        </div>
                                        <p>{formattedDate}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className=" p-6 ">
                <div className=" w-full flex flex-col items-center justify-center gap-3">
                    <EnvelopeSimple size={80} color="#898080" weight="fill" />
                    <p>With Product You Purchase</p>
                    <p className="text-3xl font-bold text-center">Subscribe to our mailing list to get the new updates!</p>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
                <div>
                    <div className="w-80 mb-3">
                        <label
                            for="first_name"
                            className="block mb-2 text-sm font-medium text-white"
                        ></label>
                        <input
                            type="text"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <Link className="px-6 py-2 bg-blue-700 mt-2 text-white  flex items-center justify-center">
                        Subscribe
                    </Link>


                </div>
            </div>
        </div>
    );
};

export default Popular;
