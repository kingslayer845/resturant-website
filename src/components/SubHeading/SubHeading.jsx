import React from "react";
import { images } from "../../constants";
const SubHeading = ({ title }) => {
  return (
    <div>
      <h3 className="p__opensans">{title}</h3>
      <img src={images.spoon} alt="" />
    </div>
  );
};

export default SubHeading;
