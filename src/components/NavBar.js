import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Head from "./Head";

const NavBar = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleHamburger = () => {
    setOpen(true);
  };

  return (
    <section>
      <Head />
      <header className="text-gray-600 body-font border-b border-slate-900 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailwind Snippets</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
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
          <button
            onClick={() => navigate("/signup")}
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Get Started
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </section>
  );
};

export default NavBar;
