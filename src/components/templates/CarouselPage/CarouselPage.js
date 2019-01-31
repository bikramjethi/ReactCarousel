import React, { Component } from "react";
import { imageUrls } from "./mockData";
import Carousel from "../../organisms/Carousel";

class CarouselPage extends Component {
  render() {
    return <Carousel imageList={imageUrls} enableSwipe />;
  }
}

//dots slides circular

export default CarouselPage;
