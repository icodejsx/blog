import React, { useState } from "react";
import { Handbag, Moon, X, MagnifyingGlass, List } from "phosphor-react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import myGif from "../assets/cloud.gif";
import World from "./movie/World";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  const handleHambuger = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div>
      <nav
        className={`lg:ml-auto lg:flex lg:flex-row lg:flex-wrap lg:items-center flex flex-col lg:justify-between text-white bg-black lg:p-1 lg:w-full decoration-20 top-0 pl-8 ${
          navOpen
            ? "fixed left-0 w-full text-white h-screen pt-4 overflow-x-auto overflow-hidden transition-all duration-100 ease-out relative"
            : "hidden"
        }`}
      >
        <div className="lg:flex lg:flex-row gap-30 lg:justify-center items-center flex flex-col justify-between gap-10 ">
          <div onClick={handleHambuger} className="lg:hidden items-center ">
            {navOpen ? <X size={30} /> : <List size={30} />}
          </div>
          <Link to="/">
            <button
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              className="text-whit focus:outline-none font-medium text text-sm px-4 py-2.5 text-center inline-flex items-center  "
              type="button"
            >
              HOME
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </Link>
          {/* <!-- Dropdown menu --> */}
          <div id="dropdownHover" className="z-10 hidden w-full   ">
            <World />
          </div>

          <Link to="/host" className="mr-5 hover:text-gray-900">
            WORLD
          </Link>
          <Link to="/about" className="mr-5 hover:text-gray-900">
            SPORT
          </Link>
          <Link to="/contact" className="mr-5 hover:text-gray-900">
            TECH
          </Link>
          <Link to="/contact" className="mr-5 hover:text-gray-900">
            COMMUNITY
          </Link>
          <Link to="/contact" className="mr-5 hover:text-gray-900">
            SHOP
          </Link>
          <Link to="/contact" className="mr-5 hover:text-gray-900">
            FEATURES
          </Link>
        </div>
        <div className="lg:flex lg:flex-row lg:gap-4 lg:w-auto items-center flex flex-col gap-3">
          <div className="flex flex-row items-center  text-white gap-3">
            <div className="flex flex-row items-center">
              <img src={myGif} alt="" className="w-11" />{" "}
              <p className="font-sm font-thin">Cario</p>
              <p>
                31{" "}
                <sup>
                  <sup className="font-extrabold">.</sup>c
                </sup>
              </p>
            </div>
          </div>

          <div>
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm  bg-black  d "
                  placeholder="Search "
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </nav>

      {/* navbar  mobile responsive  */}

      <nav className="lg:hidden ">
        <div className="flex flex-row justify-between items-center  p-4 bg-slate-100 shadow-lg w-full">
          <div className="flex flex-row gap-3 text-lg items-center">
            <div onClick={handleHambuger}>
              {navOpen ? <X size={30} /> : <List size={30} />}
            </div>

            <MagnifyingGlass size={23} />
          </div>
          <Link to="/">
            <div className="flex flex-row items-center ">
              <h1 className=" font-extrabold text-3xl ">Jonnah</h1>
              <sub className=" text-slate-400 font-medium text-xl">news</sub>
            </div>
          </Link>
          <div className="flex flex-row gap-4 ">
            <Handbag size={25} className="text-black" />

            <Moon size={25} />
          </div>
        </div>

        <div
          className="flex flex-row justify-between h-70 items-center p-2 px-1 md:px-6 gap-2  mt-3 text-[5px]"
          style={{
            backgroundImage: `url(${"https://media.istockphoto.com/id/1360408960/vector/realistic-starry-night-sky-galaxy-background-abstract-constellation-background-with-nebula.jpg?s=612x612&w=0&k=20&c=jRiMFd_-cW1i1eKvSDbNEpR6pf2xiwtIorKjV4N3z0k="})`,
          }}
        >
          <div className="flex flex-row  w-full text-white items-center justify-start gap-3 content-start   ">
            <div className=" flex flex-col justify-end text-end font-thin text-[5px]  ">
              <p className=" text-[12px] font-bold ">ADS</p>
              <p className="">720 x 90 Area!</p>
            </div>
            <div className="w-70 font-thin text-xs  text-[9px]  w-40  ">
              <p>
                Jannah Responsive Newspaper {"\n"}
                and Magazine Wordpress Theme
              </p>
            </div>
          </div>
          <div>
            <button className="bg-blue-600 text-white text-center w-[6rem] p-1 text-[10px] font-thin items-center">
              PURSCHASE NOW
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
