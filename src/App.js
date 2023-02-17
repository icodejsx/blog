import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Head from "./components/Head";
import Home from "./components/Home";
import Host from "./components/Host";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="bg-slate-100 w-full h-auto">
      <Head />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/host" element={<Host />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
