import React, { Component } from "react";
import LeftArrow from "../../atoms/LeftArrow";
import RightArrow from "../../atoms/RightArrow";

import styles from "./CarouselImage.style";
import styleWrapper from "../../../lib/styleWrapper";

class CarouselImage extends Component {
  constructor(props) {
    super();
    const { imageList } = props;
    this.state = {
      imageList,
      selectedImage: 0
    };
  }
  render() {
    const { className, imageList } = this.props;
    return (
      <div className={className}>
        <LeftArrow className="arrow-left" />

        {imageList &&
          imageList.map((image, index) =>
            imageList[this.state.selectedImage] === image ? (
              <img
                src={image}
                key={index}
                alt={`image${index}`}
                className="slider-image"
              />
            ) : (
              ""
            )
          )}
        <RightArrow className="arrow-right" />
      </div>
    );
  }
}

const CarouselImageStyles = styleWrapper(CarouselImage, styles);

export default CarouselImageStyles;
