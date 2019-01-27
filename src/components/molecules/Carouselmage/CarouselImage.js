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

  nextImage = () => {
    const { imageList, circular } = this.props;
    const { selectedImage } = this.state;
    if (circular && selectedImage >= imageList.length - 1) {
      this.setState(prevState => ({
        selectedImage: 0
      }));
    }
    if (selectedImage < imageList.length - 1) {
      this.setState(prevState => ({
        selectedImage: prevState.selectedImage + 1
      }));
    }
  };

  prevImage = () => {
    const { imageList, circular } = this.props;
    const { selectedImage } = this.state;
    if (circular && selectedImage === 0) {
      this.setState(prevState => ({
        selectedImage: imageList.length - 1
      }));
    }
    if (selectedImage !== 0) {
      this.setState(prevState => ({
        selectedImage: prevState.selectedImage - 1
      }));
    }
  };

  render() {
    const { className, imageList } = this.props;
    return (
      <div className={`${className}`}>
        <LeftArrow className="arrow-left" onClick={this.prevImage} />

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
        <RightArrow className="arrow-right" onClick={this.nextImage} />
      </div>
    );
  }
}

const CarouselImageStyles = styleWrapper(CarouselImage, styles);

export default CarouselImageStyles;
