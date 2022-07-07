import React from "react";
import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import { Divider } from "semantic-ui-react";

import image from '../twins-beer.gif';

import CustomDotGroup from "./CustomDotGroup";

const ImageCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1.8}
    naturalSlideHeight={1.2}
    totalSlides={3}
  >
    <Slider>
      <Slide tag="a" index={0}>
        <Image src={image} />
      </Slide>
      <Slide tag="a" index={1}>
        <Image src={image} />
      </Slide>
      <Slide tag="a" index={2}>
        <Image src={image} />
      </Slide>
    </Slider>

    <Divider />
    <CustomDotGroup slides={3} />
  </CarouselProvider>
);

export default ImageCarousel;
