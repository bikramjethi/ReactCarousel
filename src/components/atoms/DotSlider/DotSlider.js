import React from "react";
import styles from "./DotSlider.style";
import styleWrapper from "../../../lib/styleWrapper";

const DotSlider = props => {
  const { className, onClick, imageList, selectedImage } = props;
  return (
    <ul className={`${className} dots-wrapper`}>
      {imageList &&
        imageList.map((image, index) =>
          selectedImage === index ? (
            <li
              className="selected-dot carousel-dots"
              onClick={() => onClick(index)}
              key={`dot${index}`}
            />
          ) : (
            <li
              className="carousel-dots"
              onClick={() => onClick(index)}
              key={`dot${index}`}
            />
          )
        )}
    </ul>
  );
};

const DotSliderStyles = styleWrapper(DotSlider, styles);
export default DotSliderStyles;
