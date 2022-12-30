import React from "react";

import "./Intro.css";
import { meal } from "../../constants";
import { useState, useRef, useEffect } from "react";
import { BsFillPlayFill, BsPauseBtnFill } from "react-icons/bs";
const Intro = () => {
  const [play, setPlay] = useState(false);
  const vidPlayer = useRef(null);
  function handleClick() {
    !play ? vidPlayer.current.play() : vidPlayer.current.pause();
    setPlay((prev) => !prev);
  }

  useEffect(() => {
    const overlay = document.querySelector(".app__intro-overlay");
    const videoLayer = document.querySelector(".app__intro-video");
    overlay.addEventListener("mouseleave", () => {
      overlay.style.display = "none";
    });
    videoLayer.addEventListener("mouseenter", () => {
      overlay.style.display = "flex";
    });
  }, []);

  return (
    <div className="app__intro">
      <div className="app__intro-video">
        <video ref={vidPlayer} src={meal} width={"100%"} height={"100%"} muted loop></video>
      </div>
      <div className="app__intro-overlay" onClick={handleClick}>
        <div className="app__intro-overlay_button">{play ? <BsPauseBtnFill /> : <BsFillPlayFill />}</div>
      </div>
    </div>
  );
};
export default Intro;
