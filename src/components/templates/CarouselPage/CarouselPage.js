import React, { Component } from "react";
import { imageUrls } from "./mockData";
import Carousel from "../../organisms/Carousel";

class CarouselPage extends Component {
  render() {
    return <Carousel imageList={imageUrls} circular dots slides />;
  }
}

export default CarouselPage;
