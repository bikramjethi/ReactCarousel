import React from "react";
import styles from "./ImageSlider.style";
import styleWrapper from "../../../lib/styleWrapper";

const ImageSlider = props => {
  const { className, onClick, imageList, selectedImage } = props;
  return (
    <ul className={`${className} images-wrapper`}>
      {imageList &&
        imageList.map((image, index) =>
          selectedImage === index ? (
            <img
              className="selected-image carousel-images"
              src={image}
              onClick={() => onClick(index)}
              key={`slide${index}`}
              alt={`slide${index}`}
            />
          ) : (
            <img
              className="carousel-images"
              src={image}
              onClick={() => onClick(index)}
              key={`slide${index}`}
              alt={`slide${index}`}
            />
          )
        )}
    </ul>
  );
};

const ImageSliderStyles = styleWrapper(ImageSlider, styles);
export default ImageSliderStyles;
