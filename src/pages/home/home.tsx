import { useContext, useEffect, useState } from "react";
import { UserSettingsContext } from "../../utils/userSettings";

import { newsAPIMockData, availableCategories } from "../../utils/content";
import { NewsArticle } from "../../components/news-article/news-article";

import { INewsAPIResponse, INewsArticle } from "../../utils/interfaces";

import "./home.scss";

export default function HomePage() {
  const userContext = useContext(UserSettingsContext);

  // use these after testing
  // const [newsAPIArticles, setNewAPIArticles] = useState<INewsArticle[]>([]);
  // const [totalArticles, setTotalArticles] = useState<number>(0);

  const [newsAPIArticles, setNewAPIArticles] = useState<INewsArticle[]>(
    newsAPIMockData.articles
  );
  const [totalArticles, setTotalArticles] = useState<number>(
    newsAPIMockData.totalResults
  );

  const setHeadlines = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?language=en&sortBy=popularity",
      {
        method: "GET",
        headers: {
          "X-Api-Key": process.env.REACT_APP_NEWS_API_KEY?.toString() || "",
        },
      }
    );

    const newsAPIResponse: INewsAPIResponse = await response.json();
    setNewAPIArticles(newsAPIResponse.articles);
    setTotalArticles(newsAPIResponse.totalResults);
  };

  // useEffect(() => {
  //   setHeadlines();
  // }, []);

  return (
    <div className="mt-24 page-container">
      {/* to avoid excessive API calls */}
      {/* <p>Total results: {totalArticles === 0 ? "-loading-" : totalArticles}</p> */}

      <section className="filters-container">
        <div>Search by typing</div>
        <div>Last x days/months/years</div>
      </section>

      <section className="news-articles-container">
        {newsAPIArticles.map((article: INewsArticle, index: number) => (
          <NewsArticle key={`${index}-${article.title}`} article={article} />
        ))}
      </section>

      <section className="categories-container">
        <h2>Categories</h2>
        {availableCategories.newsAPI.map((category: string) => (
          <li key={category} className="category">
            {category}
          </li>
        ))}
      </section>
    </div>
  );
}
