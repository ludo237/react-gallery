import React from "react";
import Title from "./Title";
import ImageStats from "./ImageStats";
import Tags from "./Tags";

const ImageCard = ({ image }) => {

  // Tags are string based, we need an array
  const tags = image.tags.split(",");

  return (
    <div className="rounded overflow-hidden shadow-sm border border-gray-100">
      <div className="flex flex-col  h-full justify-between">
        <img
          src={image.webformatURL}
          alt=""
          className="w-full" />

        <div className="px-3 py-4 flex flex-col">
          <Title user={image.user} />

          <ImageStats image={image} />

          <Tags tags={tags} />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
