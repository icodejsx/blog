import React from "react";
import { Link } from "react-router-dom";

const World = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className=" bg-black w-5/6 " aria-labelledby="dropdownHoverButton  ">
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
