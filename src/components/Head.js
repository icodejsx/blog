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
    <div className="hidden md:flex flex-row px-10 bg-yellow-400 gap-2 justify-between ">
      <div className="flex flex-row justify-center items-start  w-50">
        <div className="py-2">🕧{current}</div>
        <span className="bg-red-800 text-white inline p-2">Braking News</span>
        <span className=".mov py-2">
          <span style={{ whiteSpace: "pre" }} ref={el} />
        </span>
      </div>
      <div className="md:flex justify-end p-2 gap-3">
        <div className="flex felx-row gap-2">
          <div className="border border-spacing-1 shadow-md ">
            <ArrowLeft size={20} />
          </div>
          <div className="border border-spacing-1 shadow-md ">
            <ArrowRight size={20} />
          </div>
        </div>
        <div clas>
          <FacebookLogo size={20} />
        </div>

        <WhatsappLogo size={20} />
        <TiktokLogo size={20} />
        <Cloud size={20} />
        <InstagramLogo size={20} />
        <User size={20} />

        <Basketball size={20} />
        <List size={20} />
      </div>
    </div>
  );
};

export default Head;
