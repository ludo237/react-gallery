import React from "react";
import Icon from "./Icon";

const Stat = ({ icon, name, value }) => {
  return (
    <div className="text-sm mr-4" title={name}>
      <Icon icon={icon} className="text-gray-600" />
      <span className="ml-1 text-gray-700">{value}</span>
    </div>
  );
};

export default Stat;
