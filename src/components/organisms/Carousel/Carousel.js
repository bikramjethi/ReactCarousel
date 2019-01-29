import React, { Component } from "react";
import CarouselImage from "../../molecules/Carouselmage";

import styles from "./Carousel.style";

import styleWrapper from "../../../lib/styleWrapper";

class Carousel extends Component {
  static defaultProps = {
    className: "",
    circular: false,
    dots: false,
    slides: false,
    imageList: []
  };
  render() {
    const { className, circular, dots, slides, imageList } = this.props;
    return (
      <div className={className}>
        <CarouselImage
          className="col-xs-12"
          imageList={imageList}
          circular={circular}
          dots={dots}
          slides={slides}
        />
      </div>
    );
  }
}
const CarouselStyles = styleWrapper(Carousel, styles);

export default CarouselStyles;
