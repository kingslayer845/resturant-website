import React from "react";

import "./Header.css";
import images from "../../constants/images";
import SubHeading from "../../components/SubHeading/SubHeading";
const Header = () => (
  <div className="app__header app__wrapper section__padding">
    <div className="app__header-content app__wrapper_info">
      {/* <h3>Chase the new Flavour</h3> */}
      <SubHeading title={"Chase the new Flavour"} type={"h3"} />
      <h1>The key to Fine dining</h1>
      <p className="p__opensans">
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className=" app__wrapper_img flex__center app__header-image">
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
