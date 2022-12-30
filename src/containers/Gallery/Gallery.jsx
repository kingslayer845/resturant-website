import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { data, images } from "../../constants";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import "./Gallery.css";
import { useRef } from "react";
const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];
function Gallery() {
  const scrollRef = useRef(null);
  const handleClick = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery ">
      <div className="app__gallery-content">
        <SubHeading title={"Instagram"} />
        <h1>Photo Gallery</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button className="custom__button">View More</button>
      </div>
      <div className="app__gallery-slider">
        <div className="app__gallery-slider_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="app__gallery-slider_image-card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-slider_arrows">
          <BsArrowLeftShort className="arrowleft" color={"white"} onClick={() => handleClick("left")} />

          <BsArrowRightShort className="arrowright" color={"white"} onClick={() => handleClick("right")} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
