import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";
function AboutAndHistory({ title, content }) {
  return (
    <>
      <h1>{title}</h1>
      <img src={images.spoon} alt="" />
      <p className="p__opensans">{content}</p>
      <button className="custom__button">Know More</button>
    </>
  );
}
const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding">
    <div className="app__aboutus-about">
      <AboutAndHistory
        title={"About Us"}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et."
        }
      />
    </div>
    <div className="app__aboutus-image">
      <img src={images.knife} alt="" />
    </div>
    <div className="app__aboutus-history">
      <AboutAndHistory
        title={"Our History"}
        content={
          "Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet."
        }
      />
    </div>
  </div>
);

export default AboutUs;
