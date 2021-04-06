import React from "react";
import "./model.css";
import { motion } from "framer-motion";

export default function Modal(props) {
  const handleClick = (e) => {
    props.setSelectedImg(null);
  };
  // const showLeftimg = () => {
  //   console.log("left clicked");
  // };
  // const showRightimg = () => {
  //   console.log("right clicked");
  // };

  return (
    <div className="backdrop" onClick={handleClick}>
      <motion.img
        src={props.selectedImg}
        loading="eagar"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      />

      {/* <button className="left" onClick={showLeftimg}>
        &lt;
      </button>
      <button className="right" onClick={showRightimg}>
        &gt;
      </button> */}
    </div>
  );
}
