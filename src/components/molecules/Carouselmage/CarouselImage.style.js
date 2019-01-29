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
  .slider-options {
    display: flex;
    justify-content: center;
    position: relative;
  }
`;
