import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-3 bg-black p-4 w-full">
        <button
          id="dropdownHoverButton"
          data-dropdown-toggle="dropdownHover"
          data-dropdown-trigger="hover"
          className="text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:static"
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        {/* <!-- Dropdown menu --> */}
        <div
          id="dropdownHover"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
          >
            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </Link>
            </li>
          </ul>
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
      </nav>
    </div>
  );
}

export default Nav;
