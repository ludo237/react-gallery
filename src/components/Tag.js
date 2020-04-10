import React from "react";

const Tag = ({ tag }) => {

  return (
    <span
      className="bg-gray-200 rounded-full px-2 mr-2 font-semibold text-indigo-500 text-xs">
      #{tag}
    </span>
  );
};

export default Tag;
