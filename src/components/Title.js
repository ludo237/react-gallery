import React from "react";

const Title = ({ user }) => {
  return (
    <h2 className="font-bold text-indigo-500 text-3xl md:text-xl mb-2">
      <span className="mr-2">Photo by</span>
      <span className="capitalize">{user}</span>
    </h2>
  );
};

export default Title;
