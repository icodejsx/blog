import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import BlogDetails from "./components/BlogDetails";
import Contact from "./components/Contact";
import { animateScroll } from "react-scroll";
import Home from "./components/Home";
import Host from "./components/Host";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import SignUp from "./components/SignUp";

import World from "./components/movie/World";

function App() {
  const directory = useLocation();

  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);

  // toggle or Light and dark mode
  const [theme, setTheme] = useState("light");

  // if the local storage is empty save theme as light
  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      localStorage.setItem("theme", "light");
    }
  }, []);

  //
  useEffect(() => {
    // select html element
    const html = document.querySelector("html");
    //add or remove class dark in html element according to theme in localstorage.
    if (localStorage.getItem("theme") === "dark") {
      html.classList.add("dark");
      setTheme("dark");
    } else {
      html.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  // Function  to Handle switch  them
  const handelThemeSwitch = () => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
      localStorage.removeItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.removeItem("theme", "light");
    }
  };

  return (
    <div className="bg-slate-100 w-full h-auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/posts/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/host" element={<Host />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <World />
    </div>
  );
}

export default App;
