import { css } from "styled-components";

export default css`
  position: relative;
  .slider-image {
    width: 100%;
  }
  .arrow-left,
  .arrow-right {
    position: absolute;
    top: 50%;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f9f9f9;
    border-radius: 50%;
    cursor: pointer;
    transition: transform ease-in 0.1s;
  }

  .arrow-right {
    right: 0;
  }

  .arrow-left {
    left: 0;
  }
`;
