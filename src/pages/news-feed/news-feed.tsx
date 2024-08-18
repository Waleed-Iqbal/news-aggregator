import { useContext, useEffect, useState } from "react";
import { UserSettingsContext } from "../../utils/userSettings";

import "./news-feed.scss";
import {
  IAPIError,
  INewsAPIResponse,
  INewsArticle,
  IUserSettings,
} from "../../utils/interfaces";
import Loader from "../../components/loader/loader";
import { NewsArticle } from "../../components/news-article/news-article";

import "./news-feed.scss";

export default function NewsFeedPage() {
  const userSettings: IUserSettings =
    useContext(UserSettingsContext).userSettings;
  const [APIError, setAPIError] = useState<IAPIError>({
    isFailed: false,
    message: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [newsAPIArticles, setNewAPIArticles] = useState<INewsArticle[]>([]);
  const [totalArticles, setTotalArticles] = useState<number>(0);

  const getNewsArticles = async () => {
    setAPIError({ ...APIError, isFailed: false });
    setIsLoading(true);
    setTotalArticles(0);
    const category: string =
      userSettings.categories.length > 0
        ? `&q=${userSettings.categories.join(" ")}`
        : "";
    fetch(
      `https://newsapi.org/v2/everything?language=en&sortBy=popularity${category}&pageSize=${userSettings.numberOfArticles}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": process.env.REACT_APP_NEWS_API_KEY?.toString() || "",
        },
      },
    )
      .then((response) => response.json())
      .then((newsAPIResponse: INewsAPIResponse) => {
        setNewAPIArticles(newsAPIResponse.articles);
        setTotalArticles(newsAPIResponse.articles.length);
      })
      .catch((error) => {
        setAPIError({ message: error, isFailed: true });
        console.log("News API Failed");
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getNewsArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="page-container news-feed">
        <h1>Personalized feed page</h1>

        <section className="news-articles-container">
          <p className="articles-count">
            Total results:&nbsp;
            {totalArticles === 0 && isLoading ? "Loading" : totalArticles}
          </p>
          {!isLoading && totalArticles === 0 && !APIError.isFailed && (
            <h2>No results found</h2>
          )}
          {!isLoading &&
            totalArticles > 0 &&
            !APIError.isFailed &&
            newsAPIArticles.length > 0 &&
            newsAPIArticles.map((article: INewsArticle, index: number) => (
              <NewsArticle
                key={`${index}-${article.title}`}
                article={article}
              />
            ))}
          {!isLoading && APIError.isFailed && (
            <>
              <h2 className="error">News API failed to fetch news articles</h2>
              {Object.keys(APIError.message).length > 0 && (
                <pre>
                  <code>{JSON.stringify(APIError.message, null, 2)}</code>
                </pre>
              )}
            </>
          )}
          {isLoading && <Loader />}
        </section>
      </div>
    </>
  );
}
