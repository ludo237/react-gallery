import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, className, spin, size }) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      className={className}
      spin={spin}
      size={size}
    />
  );
};

export default Icon;
