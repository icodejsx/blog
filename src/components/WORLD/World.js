import React from "react";
import { Link } from "react-router-dom";

const World = () => {
  return (
    <div>
      <div className=" bg-black  ">
        <div className="text-white flex flex-row  bg-red-300 gap-5 p-5">
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
