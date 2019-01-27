import React, { Component } from "react";
import CarouselImage from "../../molecules/Carouselmage";

import styles from "./Carousel.style";

import styleWrapper from "../../../lib/styleWrapper";
import { imageUrls } from "./mockData";

class Carousel extends Component {
  render() {
    const { className, circular } = this.props;
    return (
      <div className={className}>
        <CarouselImage
          className="col-xs-12"
          imageList={imageUrls}
          circular={circular}
        />
      </div>
    );
  }
}
const CarouselStyles = styleWrapper(Carousel, styles);

export default CarouselStyles;
