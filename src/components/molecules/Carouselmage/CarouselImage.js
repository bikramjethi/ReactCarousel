import React, { Component } from "react";
import LeftArrow from "../../atoms/LeftArrow";
import RightArrow from "../../atoms/RightArrow";
import DotSlider from "../../atoms/DotSlider";
import ImageSlider from "../../atoms/ImageSlider";

import styles from "./CarouselImage.style";
import styleWrapper from "../../../lib/styleWrapper";

class CarouselImage extends Component {
  static defaultProps = {
    className: "",
    circular: false,
    dots: false,
    slides: false,
    imageList: []
  };

  constructor(props) {
    super();
    const { imageList } = props;
    this.state = {
      imageList,
      selectedImage: 0,
      touchInitial: 0,
      touchFinal: 0
    };
  }

  handleTouchStart = e => {
    const touchPoint = e.targetTouches[0];
    this.setState({
      touchInitial: touchPoint.clientX
    });
  };

  handleTouchEnd = e => {
    const { touchInitial, touchFinal } = this.state;
    touchInitial > touchFinal ? this.nextImage() : this.prevImage();
  };

  handleTouchMove = e => {
    const touchPoint = e.targetTouches[0];
    this.setState({
      touchFinal: touchPoint.clientX
    });
  };

  selectCarouselImage = index => {
    this.setState({
      selectedImage: index
    });
  };

  nextImage = () => {
    const { imageList, circular } = this.props;
    const { selectedImage } = this.state;
    if (circular && selectedImage >= imageList.length - 1) {
      this.setState({
        selectedImage: 0
      });
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
      this.setState({
        selectedImage: imageList.length - 1
      });
    }
    if (selectedImage !== 0) {
      this.setState(prevState => ({
        selectedImage: prevState.selectedImage - 1
      }));
    }
  };

  render() {
    const { className, imageList, dots, slides, enableSwipe } = this.props;
    const { selectedImage } = this.state;
    return (
      <div className={`${className}`}>
        <div className="carousel-main">
          <LeftArrow className="arrow-left" onClick={this.prevImage} />
          <img
            src={imageList[selectedImage]}
            alt={`carouselImage`}
            className="slider-image"
            onTouchStart={enableSwipe ? e => this.handleTouchStart(e) : null}
            onTouchMove={enableSwipe ? e => this.handleTouchMove(e) : null}
            onTouchEnd={enableSwipe ? e => this.handleTouchEnd(e) : null}
          />
          <RightArrow className="arrow-right" onClick={this.nextImage} />
        </div>
        <div className="slider-options">
          {dots && (
            <DotSlider
              imageList={imageList}
              onClick={this.selectCarouselImage}
              selectedImage={selectedImage}
            />
          )}
          {slides && (
            <ImageSlider
              imageList={imageList}
              onClick={this.selectCarouselImage}
              selectedImage={selectedImage}
            />
          )}
        </div>
      </div>
    );
  }
}

const CarouselImageStyles = styleWrapper(CarouselImage, styles);

export default CarouselImageStyles;
