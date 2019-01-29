import { css } from "styled-components";

export default css`
  &.images-wrapper {
    margin: 10px;
    padding: 0;

    .carousel-images {
      width: 50px;
      height: 50px;
    }

    .selected-image {
      border: 5px solid #fff;
    }
  }
`;
