import React from "react";

const NewsCard = React.memo(({ article, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col sm:flex-row p-4 border rounded-lg shadow-md bg-white cursor-pointer relative space-y-4 sm:space-y-0 sm:space-x-4"
    >
      <div className="w-full sm:w-1/3 h-40 sm:h-60">
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="w-full sm:w-2/3">
        <h2 className="text-base sm:text-lg font-semibold">{article.title}</h2>
        <p className="text-gray-500 text-xs sm:text-sm my-1">
          <span>Written By</span> {article.author} / &nbsp;
          {new Date(article.publishedAt).toDateString()}
        </p>
        <p className="text-gray-700 mb-4 line-clamp-2 my-3 text-sm sm:text-base">
          {article.description || "No description available"}
        </p>
        <a
          href={article.url}
          target="_blank"
          // rel="noopener noreferrer"
          className="text-black/70 text-xs sm:text-sm font-medium underline mt-2 block"
        >
          Read More at <span className="underline">{article.source.name}</span>
        </a>
      </div>
    </div>
  );
});

export default NewsCard;
