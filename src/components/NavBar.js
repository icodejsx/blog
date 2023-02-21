import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Head from "./Head";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <section>
      <Head />
      <header className="text-gray-600 body-font border-b border-slate-900  f">
        <div className="container mx-auto flex flex-wrap p-5 md:flex-col items-start  h-auto justify-start">
          <div className="flex flex-row  gap-20 justify-between w-full items-center">
            <div>
              <Link
                to="/"
                className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
              >
                <span className="ml-3 text-xl">
                  <img
                    src="https://vectorwiki.com/images/id-946-digiplus-logo.svg"
                    alt=""
                  />
                </span>
              </Link>
            </div>

            <div
              className="flex flex-row justify-between items-end bg-blue-500 h-50 p-5  w-1/2 gap-10 "
              style={{
                backgroundImage: `url(${"https://media.istockphoto.com/id/1360408960/vector/realistic-starry-night-sky-galaxy-background-abstract-constellation-background-with-nebula.jpg?s=612x612&w=0&k=20&c=jRiMFd_-cW1i1eKvSDbNEpR6pf2xiwtIorKjV4N3z0k="})`,
              }}
            >
              <div className="flex flex-row gap-10  text-white font-medium">
                <div className=" flex flex-col justify-end text-end">
                  <p className="font-bold text-lg">ADS</p>
                  <p className="font-sm">720 x 90 Area!</p>
                </div>
                <div className="w-60">
                  <p>
                    Jannah Responsive Newspaper {"\n"}
                    and Magazine Wordpress Theme
                  </p>
                </div>
              </div>
              <div>
                <button className=" p-3 bg-blue-600 text-white text-center ">
                  PURSCHASE NOW
                </button>
              </div>
            </div>
          </div>

          <div>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-3">
              <Link to="/" className="mr-5 hover:text-gray-900">
                Home
              </Link>
              <Link to="/host" className="mr-5 hover:text-gray-900">
                Host
              </Link>
              <Link to="/about" className="mr-5 hover:text-gray-900">
                About Us
              </Link>
              <Link to="/contact" className="mr-5 hover:text-gray-900">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </section>
  );
};

export default NavBar;
