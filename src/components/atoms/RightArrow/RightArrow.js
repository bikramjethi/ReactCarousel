import React from "react";
import styles from "./RightArrow.style";
import styleWrapper from "../../../lib/styleWrapper";

const RightArrow = props => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <div className="right-arrow" />
    </div>
  );
};

const RightArrowStyles = styleWrapper(RightArrow, styles);
export default RightArrowStyles;