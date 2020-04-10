import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";

function App() {
  // App level state
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_PIXABAY_API_URL}&q=${query}&image_type=photos&pretty=true`)
      .then(response => response.json())
      .then(data => {
        // Set the hits array to images
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, [query, images, isLoading]);


  return (
    <div className="container mx-auto">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
