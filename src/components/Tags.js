import React from "react";
import Tag from "./Tag";

const Tags = ({ tags }) => {

  return (
    <div className="inline-block w-full mt-3">
      {tags.map((tag, index) => (
        <Tag tag={tag} key={index} />
      ))}
    </div>
  );
};

export default Tags;
