import React, { useState, useEffect } from "react";

const HygraphAPI = () => {
  const [data, setData] = useState();
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clezktqfq11s301uj42jf53gv/master"
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* {data.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))} */}
    </div>
  );
};

export default HygraphAPI;
