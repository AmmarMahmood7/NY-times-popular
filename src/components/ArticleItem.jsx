import React, { memo, useState } from "react";

const ArticleItem = memo(({ ...item }) => {
  const { id, title, byline, media, published_date, abstract, url } = item;
  const [isClicked, setIsClicked] = useState(false);

  const imageUrl = media?.[0]["media-metadata"]?.[2].url;
  return (
    <div
      className=" flex bg-pink-50 flex-col justify-center items-center p-2 hover:scale-105 transition-transform duration-300 ease-in-out m-4 rounded-xl shadow-xl drop-shadow-xl text-black  basis-1/4 flex-1 cursor-pointer"
      onClick={() => setIsClicked(!isClicked)}
    >
      <img
        src={imageUrl}
        alt={title}
        className=" w-full h-full rounded-xl object-cover"
      />
      <div className="py-4 px-8 ">
        <h2 className="text-xl font-bold ">{title}</h2>
        <p>{byline}</p>
        <span className="text-gray-300 text-xs">
          - {new Date(published_date).toDateString()}
        </span>
        {/* <p>{abstract}</p> */}
      </div>
      {/* shows when isClicked is true */}
      {isClicked && (
        <div className=" flex flex-col items-center px-8 py-4">
          <p>{abstract}</p>
          {/* <span>{section}</span> */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="tex-sm text-blue-500 hover:underline"
          >
            Read Full article here
          </a>
        </div>
      )}
    </div>
  );
});

export default ArticleItem;
