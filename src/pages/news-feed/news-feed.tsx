import { useContext } from "react";
import { UserSettingsContext } from "../../utils/userSettings";

export default function NewsFeedPage() {
  const userContext = useContext(UserSettingsContext);

  // const getNewsArticles = async () => {
  //   setAPIError({ ...APIError, isFailed: false });
  //   setIsLoading(true);
  //   setTotalArticles(0);
  //   setArticleSources([]);
  //   setSelectedArticleSource("");

  //   const categories: string =
  //     selectedNewsCategory.length > 0
  //       ? `&category=${selectedNewsCategory}`
  //       : "";
  //   const keywordFromUser: string =
  //     searchText.length > 0 ? `&q=${searchText}` : "";

  //   fetch(
  //     `https://newsapi.org/v2/top-headlines?language=en&sortBy=popularity${categories}${keywordFromUser}&from=${dateFilterFrom}&to${dateFilterTo}&pageSize=${pageSize}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "X-Api-Key": process.env.REACT_APP_NEWS_API_KEY?.toString() || "",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((newsAPIResponse: INewsAPIResponse) => {
  //       setNewAPIArticles(newsAPIResponse.articles);
  //       setTotalArticles(newsAPIResponse.articles.length);

  //       // get unique sources
  //       setArticleSources([
  //         ...new Set(
  //           newsAPIResponse.articles.map((item: INewsArticle) => item.author)
  //         ),
  //       ]);
  //     })
  //     .catch((error) => {
  //       setAPIError({ message: error, isFailed: true });
  //       console.log("News API Failed");
  //       console.error(error);
  //     })
  //     .finally(() => setIsLoading(false));
  // };

  return (
    <>
      <h1>This is news feed page</h1>
      <pre>
        <code>{JSON.stringify(userContext, null, 2)}</code>
      </pre>
    </>
  );
}
