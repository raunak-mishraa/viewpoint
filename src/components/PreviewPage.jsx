import React from "react";
import { IoCloseOutline } from "react-icons/io5";
const PreviewPage = ({ article, closePreview }) => (
  <div className="w-1/2 h-fit sticky top-24 right-0 py-8 px-24 border shadow-md rounded-lg bg-white ">
    <div onClick={() => closePreview(null)} className="absolute right-8 top-8">
      <IoCloseOutline className="text-4xl text-black text-opacity-75 cursor-pointer" />
    </div>
    <img
      src={article.urlToImage}
      alt={article.title}
      className="w-full h-72 object-cover rounded-lg"
    />
    <div>
      <h3 className="my-3 font-Inter text-black/80"><span className="font-bold">Written By</span> {article.author}</h3>
      <h2 className="my-3 font-Inter font-bold text-2xl text-black/80">
        {article.title}
      </h2>
      <p className="font-Inter">{article.description}...</p>
      <a
        href={article.url}
        target="_blank"
        className="text-black/70 block text-sm font-medium mt-4"
      >
        Read More at <span className="underline">{article.source.name}</span>
      </a>
    </div>
  </div>
);

export default PreviewPage;
