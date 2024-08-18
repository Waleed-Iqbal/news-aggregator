import { useEffect, useState, MouseEvent } from "react";

import Loader from "../../components/loader/loader";
import { NewsArticle } from "../../components/news-article/news-article";

import {
  IAPIError,
  INewsArticle,
  INewsAPIResponse,
} from "../../utils/interfaces";
import { getDateNDaysAgo } from "../../utils/helpers";
import { availableCategories } from "../../utils/content";

import ICON_MAGNIFYING_GLASS from "../../images/magnifier.svg";

import "./home.scss";

export default function HomePage() {
  const numberOfArticles: number = 20;
  const currentDate: string = getDateNDaysAgo(0);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [APIError, setAPIError] = useState<IAPIError>({
    isFailed: false,
    message: "",
  });
  const [searchText, setSearchText] = useState<string>("");
  const [dateFilterFrom, setDateFilterFrom] = useState<string>(
    getDateNDaysAgo(5)
  );
  const [dateFilterTo, setDateFilterTo] = useState<string>(currentDate);
  const [selectedNewsCategory, setSelectedNewsCategory] = useState<string>("");
  const [articleSources, setArticleSources] = useState<string[]>([]);
  const [selectedArticleSource, setSelectedArticleSource] =
    useState<string>("");

  // use these after testing
  const [newsAPIArticles, setNewAPIArticles] = useState<INewsArticle[]>([]);
  const [totalArticles, setTotalArticles] = useState<number>(0);

  const getNewsArticles = async () => {
    setAPIError({ ...APIError, isFailed: false });
    setIsLoading(true);
    setTotalArticles(0);
    setArticleSources([]);
    setSelectedArticleSource("");

    const category: string =
      selectedNewsCategory.length > 0
        ? `&category=${selectedNewsCategory}`
        : "";
    const keywordFromUser: string =
      searchText.length > 0 ? `&q=${searchText}` : "";

    fetch(
      `https://newsapi.org/v2/top-headlines?language=en&sortBy=popularity${category}${keywordFromUser}&from=${dateFilterFrom}&to${dateFilterTo}&pageSize=${numberOfArticles}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": process.env.REACT_APP_NEWS_API_KEY?.toString() || "",
        },
      }
    )
      .then((response) => response.json())
      .then((newsAPIResponse: INewsAPIResponse) => {
        setNewAPIArticles(newsAPIResponse.articles);
        setTotalArticles(newsAPIResponse.articles.length);

        // get unique sources
        setArticleSources([
          ...new Set(
            newsAPIResponse.articles.map((item: INewsArticle) => item.author)
          ),
        ]);
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
    // eslint-disable-next-line
  }, [selectedNewsCategory]);

  const updateSelectedCategories = (
    e: MouseEvent<HTMLInputElement>,
    category: string
  ) => {
    e.stopPropagation();
    setSelectedNewsCategory(selectedNewsCategory === category ? "" : category);
  };

  const updateSelectedSource = (
    e: MouseEvent<HTMLInputElement>,
    source: string
  ) => {
    e.stopPropagation();
    setSelectedArticleSource(selectedArticleSource === source ? "" : source);

    const filteredArticles: INewsArticle[] = newsAPIArticles.filter(
      (article: INewsArticle) => article.author === source
    );

    // set total articles based on selected source filter
    // if no source is selected, show all articles and update total count
    setTotalArticles(
      selectedArticleSource === source
        ? newsAPIArticles.length
        : filteredArticles.length
    );
  };

  return (
    <>
      <h1 className="page-heading">Top Headlines</h1>
      <div className="mt-24 page-container home-page">
        <section className="filters-container">
          <div className="keyword-input-container">
            <input
              type="text"
              className="keyword-input"
              placeholder="Enter keywords (press enter to search)"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.keyCode === 13) {
                  getNewsArticles();
                }
              }}
              onBlur={getNewsArticles}
            />
            <img
              width={20}
              height={20}
              alt="Search"
              className="search-icon"
              onClick={getNewsArticles}
              src={ICON_MAGNIFYING_GLASS}
            />
          </div>
          <div className="date-filter-container">
            From&nbsp;
            <input
              type="date"
              className="date-filter-input"
              value={dateFilterFrom}
              onChange={(e) => setDateFilterFrom(e.target.value)}
            />
            &nbsp;to&nbsp;
            <input
              type="date"
              className="date-filter-input"
              value={dateFilterTo}
              onChange={(e) => setDateFilterTo(e.target.value)}
            />
            &nbsp;
            <button className="apply-filters-button" onClick={getNewsArticles}>
              Search
            </button>
          </div>
        </section>

        <section className="news-articles-container">
          <p className="articles-count">
            Total results:&nbsp;
            {totalArticles === 0 && isLoading ? "Loading" : totalArticles}
          </p>
          {!isLoading && totalArticles > 0 && !APIError.isFailed && (
            <>
              {selectedArticleSource.length > 0 &&
                newsAPIArticles
                  .filter(
                    (article: INewsArticle) =>
                      article.author === selectedArticleSource
                  )
                  .map((article: INewsArticle, index: number) => (
                    <NewsArticle
                      key={`${index}-${article.title}`}
                      article={article}
                    />
                  ))}
              {selectedArticleSource.length === 0 &&
                newsAPIArticles.map((article: INewsArticle, index: number) => (
                  <NewsArticle
                    key={`${index}-${article.title}`}
                    article={article}
                  />
                ))}
            </>
          )}
          {!isLoading && totalArticles === 0 && !APIError.isFailed && (
            <h2>No results found</h2>
          )}
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

        <section className="categories-authors-container">
          <div className="categories-container">
            <h2 className="category-heading">Select category</h2>
            <div className="categories-list">
              {availableCategories.newsAPI.map((category: string) => (
                <label key={category} className="label">
                  <input
                    type="checkbox"
                    value={category}
                    className="checkbox"
                    checked={selectedNewsCategory === category}
                    onClick={(e) => updateSelectedCategories(e, category)}
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>
          <br />
          <div className="categories-container">
            <h2 className="category-heading">Select source</h2>
            <div className="categories-list">
              {!isLoading &&
                !APIError.isFailed &&
                articleSources.length > 0 &&
                articleSources.map((source: string) => (
                  <label key={source} className="label">
                    <input
                      type="checkbox"
                      value={source}
                      className="checkbox"
                      checked={selectedArticleSource === source}
                      onClick={(e) => updateSelectedSource(e, source)}
                    />
                    {source}
                  </label>
                ))}
              {!isLoading &&
                articleSources.length === 0 &&
                !APIError.isFailed && <h3>No sources available</h3>}
              {isLoading && <Loader />}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
