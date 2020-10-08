import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import ImageComponent from "./ImageComponent";
import Masonry from "react-masonry-css";
import "./primarycomp.css";
import InfiniteScroll from "react-infinite-scroll-component";

export default function PrimaryComponent() {
  const [imgs, setimgs] = useState([]);
  useEffect(() => fetchingfunc(), []);

  const fetchingfunc = () => {
    var link =
      "https://api.unsplash.com/photos/random?client_id=1K_oRGKchkQNsBTR4lFz15C1PgjUhrCyi-Y-AkRqdlo&count=20";
    fetch(link).then((res) => res.json().then((res) => setimgs([...imgs, ...res])));
    console.log("happening");
  };
  console.log(imgs);
  const oneofthefunc = imgs.map((i) => (
    <ImageComponent src={i.urls.thumb} key={i.id} alt={i.alt_description} />
  ));
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  console.log(imgs);
  return (
    <div>
      <InfiniteScroll
        dataLength={imgs.length}
        next={fetchingfunc}
        style={{ display: "flex", flexDirection: "column-reverse" }}
        hasMore={true}
        // loader={<Loader />}
        // scrollableTarget="scrollableDiv"
      >
        <Loader />
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {oneofthefunc}
        </Masonry>
      </InfiniteScroll>
    </div>
  );
}
