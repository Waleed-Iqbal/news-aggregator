import { useContext, useEffect, useState, MouseEvent } from "react";
import { UserSettingsContext } from "../../utils/userSettings";

import { NewsArticle } from "../../components/news-article/news-article";

import { INewsAPIResponse, INewsArticle } from "../../utils/interfaces";
import { availableCategories } from "../../utils/content";

import ICON_MAGNIFYING_GLASS from "../../images/magnifier.svg";

import "./home.scss";
import { getDateNDaysAgo } from "../../utils/helpers";
import Loader from "../../components/loader/loader";

export default function HomePage() {
  const currentDate: string = getDateNDaysAgo(0);
  const userContext = useContext(UserSettingsContext);
  const pageSize: number =
    (userContext && userContext.userSettings.pageSize) || 20;

  const [isLoading, setIsLoading] = useState<boolean>(true);
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
    setIsLoading(true);
    setTotalArticles(0);
    setArticleSources([]);
    setSelectedArticleSource("");
    // TODO: Remove
    console.log(userContext);

    const categories: string =
      selectedNewsCategory.length > 0
        ? `&category=${selectedNewsCategory}`
        : "";
    const keywordFromUser: string =
      searchText.length > 0 ? `&q=${searchText}` : "";

    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?language=en&sortBy=popularity${categories}${keywordFromUser}&from=${dateFilterFrom}&to${dateFilterTo}&pageSize=${pageSize}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": process.env.REACT_APP_NEWS_API_KEY?.toString() || "",
        },
      }
    );

    const newsAPIResponse: INewsAPIResponse = await response.json();
    setNewAPIArticles(newsAPIResponse.articles);
    setTotalArticles(newsAPIResponse.articles.length);

    // get unique sources
    setArticleSources([
      ...new Set(
        newsAPIResponse.articles.map((item: INewsArticle) => item.author)
      ),
    ]);

    setIsLoading(false);
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

  const updateSelectedAuthor = (
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
      <div className="mt-24 page-container">
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
            Total results:{" "}
            {totalArticles === 0 && isLoading ? "Loading" : totalArticles}
          </p>
          {!isLoading && totalArticles > 0 && (
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
          {!isLoading && totalArticles === 0 && <h2>No results found</h2>}
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
                articleSources.length > 0 &&
                articleSources.map((source: string) => (
                  <label key={source} className="label">
                    <input
                      type="checkbox"
                      value={source}
                      className="checkbox"
                      checked={selectedArticleSource === source}
                      onClick={(e) => updateSelectedAuthor(e, source)}
                    />
                    {source}
                  </label>
                ))}
              {!isLoading && articleSources.length === 0 && (
                <h3>No sources available</h3>
              )}
              {isLoading && <Loader />}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
