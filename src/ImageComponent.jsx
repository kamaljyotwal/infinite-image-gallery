import React from "react";

function clickfunc() {
  console.log("something");
}
export default function ImageComponent(props) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      style={{ width: "100%" }}
      loading="auto"
      onChange={clickfunc}
    />
  );
}
