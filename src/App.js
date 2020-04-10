import React, { useState, useEffect } from "react";
import ImagesGrid from "./components/ImagesGrid";
import Loader from "./components/Loader";

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
      .catch(error => {
        console.error(error);
        setIsLoading(true);
      });
  }, [query, images, isLoading]);


  return (
    <div className="container mx-auto">
      <div className="mb-10">
        <h1 className="font-semibold text-6xl capitalize">React Gallery</h1>
        <p className="text-gray-700">A gallery of photos made possible thanks to Pixabay APIs</p>
      </div>
      {isLoading
        ? <Loader />
        : <ImagesGrid images={images} />
      }
    </div>
  );
}

export default App;
