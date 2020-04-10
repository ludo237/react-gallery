import React from "react";

const Stat = ({ name, value }) => {
  return (
    <li>
      <span className="font-semibold capitalize">{name}</span>
      <span>{value}</span>
    </li>
  );
};

export default Stat;
