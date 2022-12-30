import React from "react";
import { images, data } from "../../constants/index";
import "./SpecialMenu.css";
import SubHeading from "../../components/SubHeading/SubHeading";
function MenuRender({ data, title }) {
  return (
    <>
      <h3>{title}</h3>
      <ul className="menu">
        {data.map((element, i) => (
          <li key={i} className="drink">
            <div className="drink__heading">
              <h4>{element.title}</h4>
              <div />
              <p>{element.price}</p>
            </div>
            <p className="drink__tags">{element.tags}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

function SpecialMenu() {
  return (
    <div className="app__specialMenu flex__center section__padding">
      <div className="app__specialMenu-heading">
        <SubHeading title={"Menu that fits you palatte"} />
        <h1>Today’s Special</h1>
      </div>
      <div className="app__specialMenu-content">
        <div className="app__specialMenu-content_wine">
          <MenuRender data={data.wines} title={"Wine & Beer"} />
        </div>
        <div className="app__specialMenu-content_image ">
          <img src={images.menu} alt="" />
        </div>
        <div className="app__specialMenu-content_cocktail">
          <MenuRender data={data.cocktails} title={"Cocktails"} />
        </div>
      </div>
    </div>
  );
}

export default SpecialMenu;
