import { css } from "styled-components";

export default css`
  .left-arrow {
    border-top: 3px solid #000;
    border-left: 3px solid #000;
    min-width: 5px;
    min-height: 5px;
    transform: rotate(-45deg);
  }

  @media only screen and (min-width: 768px) {
    .left-arrow {
      min-width: 10px;
      min-height: 10px;
    }
  }
`;
