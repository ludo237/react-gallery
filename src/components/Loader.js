import React from "react";
import Icon from "./Icon";

const Loader = () => {
  return (
    <div className="min-w-full flex justify-center">
      <Icon
        icon="circle-notch"
        spin size="4x"
        className="text-indigo-500" />
    </div>
  );
};

export default Loader;
