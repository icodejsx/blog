import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js";

const Head = () => {
  const current = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // const typed = new Typed(".mov", {
  //   strings: ["Ganesh", "Content Writer", "Web Developer"],
  //   typeSpeed: 100,
  //   backSpeed: 100,
  //   loop: true,
  // });
  const el = useRef(null);
  const typed = useRef(null);

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
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="flex flex-row  justify-start px-10 bg-yellow-400 gap-2">
      <div className="py-2">🕧{current}</div>
      <span className="bg-red-800 text-white inline p-2">Braking News</span>
      <span className=".mov py-2">
        <span style={{ whiteSpace: "pre" }} ref={el} />
      </span>
    </div>
  );
};

export default Head;
