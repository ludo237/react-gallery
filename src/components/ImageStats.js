import React from "react";
import Stat from "./Stat";

const ImageStats = ({ image }) => {
  return (
    <div className="inline-flex flex-row w-full">
      <Stat icon="eye" name="views" value={image.views} />
      <Stat icon="download" name="downloads" value={image.downloads} />
      <Stat icon="heart" name="likes" value={image.likes} />
    </div>
  );
};

export default ImageStats;
