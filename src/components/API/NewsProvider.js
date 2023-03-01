import React, { useEffect, useState } from "react";
import axios from "axios";
import { NewsContext } from "../../App";

const NewsProvider = ({ childern }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.newscatcherapi.com/v2/search?q=food&lang=en&sort_by=relevancy&page=1&media=True"
      )
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <NewsContext.Provider value={news}>{childern}</NewsContext.Provider>;
};

export default NewsProvider;
