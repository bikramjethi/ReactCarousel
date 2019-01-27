import React from "react";
import styles from "./LeftArrow.style";
import styleWrapper from "../../../lib/styleWrapper";

const LeftArrow = props => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <div className="left-arrow" />
    </div>
  );
};

const LeftArrowStyles = styleWrapper(LeftArrow, styles);
export default LeftArrowStyles;
