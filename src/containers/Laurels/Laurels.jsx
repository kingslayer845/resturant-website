import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { data, images } from "../../constants";
import "./Laurels.css";
function AwardMarkup({ data }) {
  return (
    <>
      {data.map((award, index) => (
        <div key={index} className={`award award-${index}`}>
          <div className="award__image">
            <img src={award.imgUrl} alt="" />
          </div>
          <div className="award__content">
            <h3>{award.title}</h3>
            <p>{award.subtitle}</p>
          </div>
        </div>
      ))}
    </>
  );
}

function Laurels() {
  return (
    <div className="app__laurels section__padding app__bg">
      <div className="app__laurels-content">
        <SubHeading title={"Awards & recognition"} />
        <h1>Our Laurels</h1>
        <div className="app__laurels-content_awards">
          <AwardMarkup data={data.awards} />
        </div>
      </div>
      <div className="app__laurels-image">
        <img src={images.laurels} alt="" />
      </div>
    </div>
  );
}

export default Laurels;
