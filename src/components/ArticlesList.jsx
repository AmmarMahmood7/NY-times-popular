import React, { useEffect, useState } from "react";
import ArticleItem from "./ArticleItem";

const ArticlesList = () => {
  const [popularArticles, setPopularArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const api_key = import.meta.env.VITE_APP_API_KEY;
  const URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${api_key}`;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      const parsedData = await response.json();
      setPopularArticles(parsedData?.results);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      console.log(error);
    }
  };
  if (isLoading) {
    return <div className="text-5xl font-bold text-orange-500">Loading...</div>;
  }
  return (
    <>
      <h1 className="text-5xl m-4 font-bold">Daily News Roundup </h1>
      <div className="flex justify-center flex-wrap container gap-8">
        {popularArticles.map((item) => {
          return <ArticleItem key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};

export default ArticlesList;
