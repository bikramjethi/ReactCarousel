import { css } from "styled-components";

export default css`
  &.dots-wrapper {
    margin: 0;
    padding: 0;
    position: absolute;
    top: -40px;

    .carousel-dots {
      display: inline-block;
      width: 16px;
      height: 16px;
      background: #f1f1f1;
      border-radius: 50%;
      margin: 0 3px;
    }

    .selected-dot {
      background: #181818;
    }
  }
`;
