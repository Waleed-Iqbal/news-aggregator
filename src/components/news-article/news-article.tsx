import { Link } from "react-router-dom";

import { INewsArticle } from "../../utils/interfaces";

import { getArticlePublishDate } from "../../utils/helpers";

import REDIRECT_ICON from "../../images/redirect.svg";

import "./news-article.scss";

export const NewsArticle = ({ article }: { article: INewsArticle }) => {
  const articlePublishDate: string = getArticlePublishDate(article.publishedAt);

  return (
    <Link to={article.url} target="_blank" className="news-article-container">
      <div className="article-content">
        {article.urlToImage && (
          <img className="article-image" src={article.urlToImage} alt="news" />
        )}
        <div className="text-content">
          <h2 className="mt-0 pr-30">{article.title}</h2>
          <p>{article.description}</p>
        </div>
      </div>
      <div className="article-meta-data">
        <p className="mb-0 mr-8">
          {
            // If there are multiple authors, add an "s" to the word "Author
            // to make it plural
            // Hide author if it is not available
            article.author ? (
              <>
                <strong>
                  Author
                  {article.author.indexOf(",") > -1 ? "s" : ""}:
                </strong>{" "}
                {article.author}
              </>
            ) : (
              <>
                <strong>Author:</strong> Not available
              </>
            )
          }
        </p>
        <p className="mb-0 mr-8">
          <strong>Published:</strong> {articlePublishDate}
        </p>
      </div>
      <img
        width={24}
        height={24}
        src={REDIRECT_ICON}
        className="redirect-icon"
        alt="open article in new tab"
      />
    </Link>
  );
};
