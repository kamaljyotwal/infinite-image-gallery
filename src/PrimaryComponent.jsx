import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Loader from "./Loader";
import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroll-component";
import "./primarycomp.css";

export default function PrimaryComponent() {
  const [imgs, setimgs] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetchingfunc();
    //eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   setloading(false);
  // }, [imgs]);

  const fetchingfunc = () => {
    setloading(true);
    
    var link =
      "https://api.unsplash.com/photos/random?client_id=1K_oRGKchkQNsBTR4lFz15C1PgjUhrCyi-Y-AkRqdlo&count=30";
    fetch(link).then((res) => res.json().then((res) => setimgs([...imgs, ...res])));
  };

  // Masonry BreakPoints
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <div>
      <InfiniteScroll
        dataLength={imgs.length}
        next={fetchingfunc}
        style={{ display: "flex", flexDirection: "column-reverse" }}
        hasMore={true}
      >
        {loading && <Loader />}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {imgs.map((eachimg) => (
            <div
              className="imgwrapper"
              key={eachimg.id}
              onClick={() => setSelectedImg(eachimg.urls.regular)}
            >
              <img
                src={eachimg.urls.thumb}
                alt={eachimg.alt_description}
                style={{ width: "100%" }}
                loading="auto"
              />
            </div>
          ))}
        </Masonry>
      </InfiniteScroll>
      {/* for showing Modal on image click */}
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}
