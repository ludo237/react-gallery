import React from "react";
import Stat from "./Stat";

const ImageStats = ({ image }) => {
  return (
    <ul>
      <Stat name="views" value={image.views} />
      <Stat name="downloads" value={image.downloads} />
      <Stat name="likes" value={image.likes} />
    </ul>
  );
};

export default ImageStats;
