import { css } from "styled-components";

export default css`
  position: relative;
  .carousel-main {
    position: relative;
  }
  .slider-image {
    width: 100%;
    max-height: 768px;
    animation-name: imageAnimation;
    animation-duration: 3s;
  }

  @keyframes imageAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .arrow-left,
  .arrow-right {
    position: absolute;
    top: 40%;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f9f9f9;
    border-radius: 50%;
    cursor: pointer;
    transition: transform ease-in 0.1s;
  }

  .arrow-right {
    right: 5px;
  }

  .arrow-left {
    left: 5px;
  }

  .slider-options {
    display: flex;
    justify-content: center;
    position: relative;
  }

  @media only screen and (min-width: 768px) {
    .arrow-left,
    .arrow-right {
      width: 50px;
      height: 50px;
    }
  }
`;
