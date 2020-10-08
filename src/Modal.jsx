import React from "react";
import "./model.css";
export default function Modal(props) {
  const handleClick = (e) => {
    props.setSelectedImg(null);
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={props.selectedImg} alt="" />
    </div>
  );
}
