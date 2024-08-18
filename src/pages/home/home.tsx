import { useContext, useEffect, useState, MouseEvent } from "react";
import { UserSettingsContext } from "../../utils/userSettings";

import { NewsArticle } from "../../components/news-article/news-article";

import { INewsAPIResponse, INewsArticle } from "../../utils/interfaces";
import { newsAPIMockData, availableCategories } from "../../utils/content";

import ICON_MAGNIFYING_GLASS from "../../images/magnifier.svg";

import "./home.scss";
import { getDateNDaysAgo } from "../../utils/helpers";

export default function HomePage() {
  const currentDate: string = getDateNDaysAgo(0);
  const userContext = useContext(UserSettingsContext);

  const [searchText, setSearchText] = useState<string>("");
  const [dateFilterFrom, setDateFilterFrom] = useState<string>(
    getDateNDaysAgo(5)
  );
  const [dateFilterTo, setDateFilterTo] = useState<string>(currentDate);
  const [selectedNewsCategory, setSelectedNewsCategory] = useState<string>("");

  // use these after testing
  // const [newsAPIArticles, setNewAPIArticles] = useState<INewsArticle[]>([]);
  // const [totalArticles, setTotalArticles] = useState<number>(0);

  const [newsAPIArticles, setNewAPIArticles] = useState<INewsArticle[]>(
    newsAPIMockData.articles
  );
  const [totalArticles, setTotalArticles] = useState<number>(
    newsAPIMockData.totalResults
  );

  const getNewsArticles = async () => {
    // TODO: Remove
    console.log(userContext);

    const categories: string =
      selectedNewsCategory.length > 0
        ? `&category=${selectedNewsCategory}`
        : "";
    const keywordFromUser: string =
      searchText.length > 0 ? `&q=${searchText}` : "";

    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?language=en&sortBy=popularity&q=${searchText}${categories}${keywordFromUser}&from=${dateFilterFrom}&to${dateFilterTo}`,
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

  useEffect(() => {
    // getNewsArticles();
  }, [selectedNewsCategory]);

  const updateSelectedCategories = (
    e: MouseEvent<HTMLInputElement>,
    category: string
  ) => {
    e.stopPropagation();
    setSelectedNewsCategory(selectedNewsCategory === category ? "" : category);
  };

  return (
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
            src={ICON_MAGNIFYING_GLASS}
          />
        </div>
        <div className="date-filter-container">
          From&nbsp;
          <input
            type="date"
            value={dateFilterFrom}
            onChange={(e) => setDateFilterFrom(e.target.value)}
          />
          &nbsp;to&nbsp;
          <input
            type="date"
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
          Total results: {totalArticles === 0 ? "-loading-" : totalArticles}
        </p>
        {newsAPIArticles.map((article: INewsArticle, index: number) => (
          <NewsArticle key={`${index}-${article.title}`} article={article} />
        ))}
      </section>

      {/* TODO: move to a separate component once setting up the user settings with context */}
      <section className="categories-container">
        <h2 className="category-heading">Select a category</h2>
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
      </section>
    </div>
  );
}
