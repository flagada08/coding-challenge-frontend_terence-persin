import PropTypes from "prop-types";
import React from "react";

import { Dot } from "pure-react-carousel";
import { Button, Container } from "semantic-ui-react";

const CustomDotGroup = ({ slides, size }) => (
  <Container textAlign="center">
    <Button.Group size={size}>
      {[...Array(slides).keys()].map(slide => (
        <Button as={Dot} key={slide} icon="circle" slide={slide} />
      ))}
    </Button.Group>
  </Container>
);

CustomDotGroup.propTypes = {
  slides: PropTypes.number.isRequired,
  size: PropTypes.string
};

export default CustomDotGroup;
