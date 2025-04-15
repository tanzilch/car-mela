/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Btn = ({ onClick, children, className }) => {

  return (
    <div>
      <button className={`${className}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Btn;
