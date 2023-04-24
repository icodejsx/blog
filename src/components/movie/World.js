import { Link } from "react-router-dom";
import DropDown from "../dropDown/DropDown";

const World = () => {
  return (


    <div className="lg:flex flex-row items-center justify-center hidden ">
      <div
        className="bg-black w-[77.5rem] border-t-4 border-blue-600"
        aria-labelledby="dropdownHoverButton w-full"
      >
        <div className="text-white flex flex-row bg-balck gap-5 p-5">
          <div className="relative dropdown">
            <button className="bg-blue-700 hover:bg-blue-700 px-4 news ">
              General
            </button>
            <div className="absolute z-10 left-0 mt-2  w-[77.5rem] dropdown-menu show-on-load mx-[-1.2rem] ">
              <div className="bg-black text-white py-2 rounded-md flex flex-row items-center justify-center  ">
                <Link to="" className="block px-4 py-2  ">
                  <DropDown cat="General" />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative dropdown">
            <button className="bg-black hover:bg-blue-700 px-4">
              Politics
            </button>
            <div className="absolute z-10 left-0 mt-2  w-[77.5rem] dropdown-menu mx-[-7.8rem] ">
              <div className="bg-black text-white py-2 rounded-md flex flex-row items-center justify-center ">
                <Link to="" className="block px-4 py-2 ">
                  <DropDown cat="politics" />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative dropdown">
            <button className="bg-black hover:bg-blue-700 px-4">Food</button>
            <div className="absolute z-10 left-0 mt-2  w-[77.5rem] dropdown-menu mx-[-14.2rem] ">
              <div className="bg-black text-white py-2 rounded-md flex flex-row items-center justify-center ">
                <Link to="" className="block px-4 py-2 ">
                  <DropDown cat="politics" />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative dropdown">
            <button className="bg-black hover:bg-blue-700 px-4">Travel</button>
            <div className="absolute z-10 left-0 mt-2  w-[77.5rem] dropdown-menu mx-[-19.7rem] ">
              <div className="bg-black text-white py-2 rounded-md flex flex-row items-center justify-center ">
                <Link to="" className="block px-4 py-2 ">
                  <DropDown cat="politics" />
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
