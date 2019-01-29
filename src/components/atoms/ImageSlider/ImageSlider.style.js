import { css } from "styled-components";

export default css`
  &.images-wrapper {
    margin: 10px;
    padding: 0;

    .carousel-images {
      width: 25px;
      height: 25px;
    }

    .selected-image {
      border: 2px solid #fff;
    }
  }

  @media only screen and (min-width: 768px) {
    .carousel-images {
      width: 50px;
      height: 50px;
    }

    .selected-image {
      border: 5px solid #fff;
    }
  }
`;
