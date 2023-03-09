import { Dropdown } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DropDown from "../dropDown/DropDown";

const World = () => {
  const [dropDown, setDropDown] = useState();
  console.log(dropDown);

  useEffect(() => {
    const handleOnMouseHover = (event) => {
      setDropDown(event.target.textContent);
    };

    const dropdownElements = document.querySelectorAll(".dropdown button");
    dropdownElements.forEach((element) =>
      element.addEventListener("mouseover", handleOnMouseHover)
    );

    return () => {
      dropdownElements.forEach((element) =>
        element.removeEventListener("mouseover", handleOnMouseHover)
      );
    };
  }, []);

  return (
    <div className="lg:flex flex-row items-center justify-center hidden ">
      <div
        className="bg-black w-[77.5rem] border-t-4 border-blue-600"
        aria-labelledby="dropdownHoverButton w-full"
      >
        <div className="text-white flex flex-row bg-balck gap-5 p-5">
          <div className="relative dropdown">
            <button className="bg-blue-700 hover:bg-blue-700 px-4 news ">
              All
            </button>
            <div className="absolute z-10 left-0 mt-2  w-[77.5rem] dropdown-menu show-on-load mx-[-1.2rem] ">
              <div className="bg-black text-white py-2 rounded-md flex flex-row items-center justify-center ">
                <Link to="" className="block px-4 py-2 ">
                  <DropDown category={Dropdown} />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative dropdown">
            <button className="bg-black hover:bg-blue-700 px-4">
              Creative
            </button>
            <div className="absolute z-10 left-0 mt-2  w-[77.5rem] dropdown-menu mx-[-5.6 rem] ">
              <div className="bg-black text-white py-2 rounded-md flex flex-row items-center justify-center ">
                <Link to="" className="block px-4 py-2 ">
                  <DropDown category={DropDown} />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative dropdown">
            <button className="bg-black hover:bg-blue-700 px-4">Foods</button>
            <div className="absolute z-10 left-0 mt-2 w-full dropdown-menu hidden">
              <div className="bg-black text-white py-2 rounded-md shadow-lg">
                <Link to="" className="block px-4 py-2 hover:bg-blue-700">
                  Sublink 1
                </Link>
                <Link to="" className="block px-4 py-2 hover:bg-blue-700">
                  Sublink 2
                </Link>
              </div>
            </div>
          </div>
          <div className="relative dropdown">
            <button className="bg-black hover:bg-blue-700 px-4">Travel</button>
            <div className="absolute z-10 left-0 mt-2 w-full dropdown-menu hidden">
              <div className="bg-black text-white py-2 rounded-md shadow-lg">
                <Link to="" className="block px-4 py-2 hover:bg-blue-700">
                  Sublink 1
                </Link>
                <Link to="" className="block px-4 py-2 hover:bg-blue-700">
                  Sublink 2
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default World;
