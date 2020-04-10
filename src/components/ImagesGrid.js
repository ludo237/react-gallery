import React from "react";
import ImageCard from "./ImageCard";

const ImagesGrid = ({ images }) => {

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map(image => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImagesGrid;
