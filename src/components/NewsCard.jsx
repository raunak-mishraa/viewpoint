import React from "react";

const NewsCard = React.memo(({ article, onClick  }) => {
  // console.log("NewsCard rendered");

  return (
    <div
    onClick={onClick}
      className="flex p-4 border rounded-lg shadow-md bg-white cursor-pointer relative"
    >
      <div className="w-1/3 h-60">
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-2/3 pl-4">
        <h2 className="text-lg font-semibold">{article.title}</h2>
        <p className="text-gray-500 text-sm my-0.5">
          <span>Written By</span> {article.author} / &nbsp;
          {new Date(article.publishedAt).toDateString()}
        </p>
        <p className="text-gray-700 mb-4 h-24 line-clamp-2 my-3">
          {article.description || "No description available"}
        </p>
        <a
          href={article.url}
          target="_blank"
          className="text-black/70 block absolute bottom-6 text-sm font-medium"
        >
          Read More at <span className="underline">{article.source.name}</span>
        </a>
      </div>
    </div>
  );
});

export default NewsCard;
