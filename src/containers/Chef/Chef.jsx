import React from "react";

import "./Chef.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants/index";
const Chef = () => (
  <div className="app__chef section__padding app__bg" >
    <div className="app__chef-image">
      <img src={images.chef} alt="" />
    </div>
    <div className="app__chef-content">
      <SubHeading title={"Chef’s Word"} />
      <h1>What we believe in</h1>
      <p>
        <img src={images.quote} alt="" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit . auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
        Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
      </p>
      <h2>Kevin Luo</h2>
      <p>Chef & Founder</p>
      <img src={images.sign} alt="" />
    </div>
  </div>
);

export default Chef;
