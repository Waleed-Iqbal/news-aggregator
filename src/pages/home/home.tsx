import { useContext, useEffect, useState } from "react";
import { UserSettingsContext } from "../../utils/userSettings";

import { INewsAPIResponse, INewsArticle } from "../../utils/interfaces";

export default function HomePage() {
  const userContext = useContext(UserSettingsContext);
  const [newAPIHeadlines, setNewAPIHeadlines] = useState<INewsArticle[]>([]);
  const [totalArticles, setTotalArticles] = useState<number>(0);

  const getHeadlines = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?language=en",
      {
        method: "GET",
        headers: {
          "X-Api-Key": process.env.REACT_APP_NEWS_API_KEY?.toString() || "",
        },
      }
    );

    const newsAPIResponse: INewsAPIResponse = await response.json();
    setNewAPIHeadlines(newsAPIResponse.articles);
    setTotalArticles(newsAPIResponse.totalResults);
  };

  // useEffect(() => {
  //   getHeadlines();
  // }, []);

  return (
    <>
      {/* to avoid excessive API calls */}
      <button onClick={getHeadlines}>Set country to US</button>
      <h1>This is home page</h1>
      <p>Total results: {totalArticles === 0 ? "-loading-" : totalArticles}</p>
      <pre>
        <code>{JSON.stringify(setNewAPIHeadlines, null, 2)}</code>
      </pre>
    </>
  );
}
