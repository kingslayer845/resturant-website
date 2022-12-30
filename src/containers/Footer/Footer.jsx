import React from "react";
import "./Footer.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="app__footer app__bg section__padding">
      <div className="app__footer-uppersec">
        <div className="app__footer-newsletter">
          <SubHeading title={"Newsletter"} />
          <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
          <p className="P__opensans">And never miss latest Updates!</p>
          <form>
            <input type="email" />
            <button className="custom__button" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="app__footer-info">
        <div className="app__footer-info_contactus">
          <h3>Contact Us</h3>
          <p style={{ margin: "1rem 0 1rem" }}>9 W 53rd St, New York, NY 10019, USA</p>
          <p>+1 212-344-1230 </p>
          <p>+1 212-555-1230</p>
        </div>
        <div className="app__footer-info_gericht">
          <h2>Gerícht</h2>
          <SubHeading title={"The best way to find yourself is to lose yourself in the service of others."} />
          <div className="media">
            <FiFacebook />
            <FiInstagram />
            <FiTwitter />
          </div>
        </div>

        <div className="app__footer-info_workhours">
          <h3>Working Hours</h3>
          <p style={{ marginBottom: "1rem" }}>
            Monday-Friday:
            <br />
            08:00 am -12:00 am
          </p>
          <p>
            Saturday-Sunday:
            <br />
            07:00am -11:00 pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
