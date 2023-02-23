import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import {
  ArrowLeft,
  ArrowRight,
  WhatsappLogo,
  FacebookLogo,
  InstagramLogo,
  Basketball,
  User,
  TiktokLogo,
  List,
  Cloud,
} from "phosphor-react";

const Head = () => {
  const el = useRef(null);
  const typed = useRef(null);

  const current = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    const options = {
      strings: [
        "Instagram’s big redesign goes live with black-and-white app",
        "After all is said and done, more is done",
        "The Top 10 Best Computer Speakers in the Market",
        " Success is not a good teacher failure makes you humble ",
        " Budget issues force the Tour to be cancelled",
        "The only thing that overcomes hard luck is hard work",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="hidden md:flex flex-row px-10 gap-2 justify-between border bottom-15 ">
      <div className="flex flex-row justify-center items-start  w-50">
        <div className="py-2 hidden lg:flex">🕧{current}</div>
        <span className="bg-red-800 text-white inline p-2">Braking News</span>
        <span className=".mov py-2">
          <span style={{ whiteSpace: "pre" }} ref={el} />
        </span>
      </div>
      <div className="md:flex justify-end p-2 gap-3">
        <div className=" md:flex md:felx-row gap-2 ">
          <div className="border border-spacing-1 shadow-md ">
            <ArrowLeft size={20} />
          </div>
          <div className="border border-spacing-1 shadow-md ">
            <ArrowRight size={20} />
          </div>
        </div>
        <div className=" lg:flex flex-row gap-3 hidden ">
          <FacebookLogo size={20} className=" hover:text-blue-700" />

          <WhatsappLogo size={20} className=" hover:text-blue-500" />

          <Basketball size={20} className=" hover:text-red-500" />
          <Cloud size={20} className=" hover:text-red-500" />
          <InstagramLogo size={20} className=" hover:text-red-500" />

          <TiktokLogo size={20} className=" hover:text-red-500" />
          <User size={20} className=" hover:text-blue-700" />
          <List size={20} className=" hover:text-blue-700" />
        </div>
      </div>
    </div>
  );
};

export default Head;
