import React from "react";
import Icon from "./Icon";

const NoImages = () => {
  return (
    <div className="w-full flex justify-center items-center mt-10">
      <h3>
        <Icon icon="frown" size="3x" className="text-indigo-400 mr-2" />
        <span className="font-bold text-4xl">No images fund</span>
      </h3>
    </div>
  );
};

export default NoImages;
