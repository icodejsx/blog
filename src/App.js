import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
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

function App() {
  const directory = useLocation();

  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);
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
    </div>
  );
}

export default App;
