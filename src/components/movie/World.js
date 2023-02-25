import React from "react";
import { Link } from "react-router-dom";

const World = () => {
  return (
    <div className=" lg:flex flex-row items-center justify-center  hidden  ">
      <div
        className=" bg-black w-[77.5rem] "
        aria-labelledby="dropdownHoverButton  w-full "
      >
        <div className="text-white flex flex-row bg-balck gap-5 p-5  ">
          <Link to="" className="bg-black hover:bg-blue-700 px-4">
            All
          </Link>
          <Link to="" className="bg-black hover:bg-blue-700 px-4">
            {" "}
            Create
          </Link>
          <Link to="" className="bg-black hover:bg-blue-700 px-4">
            Food{" "}
          </Link>
          <Link to="" className="bg-black hover:bg-blue-700 px-4">
            Travel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default World;
