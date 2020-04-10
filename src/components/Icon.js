import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, className }) => {
  return (
    <FontAwesomeIcon icon={icon} className={className} />
  );
};

export default Icon;
