import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
// import { ArrowLeft } from "phosphor-react";

const Head = () => {
  const el = useRef(null);
  const typed = useRef(null);

  // const [open, setOpen] = useState(false);
  // const handleHamburger = () => {
  //   setOpen(true);
  // };

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
    <div className="hidden md:flex flex-row justify-start px-10 bg-yellow-400 gap-2">
      <div className="flex flex-row justify-center items-start ">
        <div className="py-2">🕧{current}</div>
        <span className="bg-red-800 text-white inline p-2">Braking News</span>
        <span className=".mov py-2">
          <span style={{ whiteSpace: "pre" }} ref={el} />
        </span>
      </div>
      <div></div>
    </div>
  );
};

export default Head;
