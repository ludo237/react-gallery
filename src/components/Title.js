import React from "react";

const Title = ({ user }) => {
  return (
    <h2 className="font-bold text-indigo-500 text-xl mb-2">
      <span>Photo by</span>
      <span>{user}</span>
    </h2>
  );
};

export default Title;
