import React from "react";

import divideLine from "../../assets/divide_line.png";
import "../DivideLine/DivideLine.css";
export const DivideLine = () => {
  return (
    <div>
      <img src={divideLine} alt="divider" className="divide-line" />
    </div>
  );
};
