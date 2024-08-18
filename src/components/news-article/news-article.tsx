import { Link } from "react-router-dom";

import { INewsArticle } from "../../utils/interfaces";

import { getArticlePublishDate } from "../../utils/helpers";

import "./news-article.scss";

export const NewsArticle = ({ article }: { article: INewsArticle }) => {
  const articlePublishDate: string = getArticlePublishDate(article.publishedAt);

  return (
    <Link to={article.url} target="_blank" className="news-article-container">
      <div className="article-content">
        <h2 className="mt-0">{article.title}</h2>
        <p>{article.description}</p>
      </div>
      <div className="article-meta-data">
        <p className="mb-0 mr-8">
          <strong>Source:</strong> {article.author}
        </p>
        <p className="mb-0 mr-8">
          <strong>Published:</strong> {articlePublishDate}
        </p>
      </div>
    </Link>
  );
};
