import React from "react";
import { IoCloseOutline } from "react-icons/io5";
const PreviewPage = ({ article, closePreview }) => (
  <div className="w-full mx-auto sm:w-1/2 h-screen sm:h-fit sm:sticky fixed top-0 z-30 sm:z-0 left-0 right-0 py-8 px-6 sm:p-0 border shadow-md bg-black/30 sm:bg-transparent">
    <div className="relative w-full h-fit sm:sticky top-24 sm:top-0 mx-auto sm:m-0 py-8 px-6 sm:px-24 border shadow-md rounded-lg bg-white">
     <div onClick={() => closePreview(null)} className="absolute right-4 top-4">
        <IoCloseOutline className="text-3xl sm:text-4xl text-black text-opacity-75 cursor-pointer" />
      </div>
    <img
      src={article.urlToImage}
      alt={article.title}
     className="w-full h-48 sm:h-72 object-cover rounded-lg"
    />
    <div>
        <h3 className="my-3 font-Inter text-black/80">
          <span className="font-bold">Written By</span> {article.author}
        </h3>
        <h2 className="my-3 font-Inter font-bold text-xl sm:text-2xl text-black/80">
          {article.title}
        </h2>
        <p className="font-Inter text-sm sm:text-base">{article.description}...</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black/70 block text-sm font-medium mt-4"
        >
          Read More at <span className="underline">{article.source.name}</span>
        </a>
        </div>
      </div>
  </div>
);

export default PreviewPage;