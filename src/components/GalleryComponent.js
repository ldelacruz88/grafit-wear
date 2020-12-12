import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/assets/images/Img_1.png",
    thumbnail: "/assets/images/Img_1.png",
  },
  {
    original: "/assets/images/Img_3.png",
    thumbnail: "/assets/images/Img_3.png",
  },
  {
    original: "/assets/images/Img_4.png",
    thumbnail: "/assets/images/Img_4.png",
  },
  {
    original: "/assets/images/Img_5.png",
    thumbnail: "/assets/images/Img_5.png",
  },
  {
    original: "/assets/images/Img_6.png",
    thumbnail: "/assets/images/Img_6.png",
  },
  {
    original: "/assets/images/Img_7.png",
    thumbnail: "/assets/images/Img_7.png",
  },
  {
    original: "/assets/images/Img_8.png",
    thumbnail: "/assets/images/Img_8.png",
  },
  {
    original: "/assets/images/Img_9.png",
    thumbnail: "/assets/images/Img_9.png",
  },
  {
    original: "/assets/images/Img_10.png",
    thumbnail: "/assets/images/Img_10.png",
  },
  {
    original: "/assets/images/Img_11.png",
    thumbnail: "/assets/images/Img_11.png",
  },
  {
    original: "/assets/images/Img_13.png",
    thumbnail: "/assets/images/Img_13.png",
  },
];

function Gallery(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-10 ">
          <ImageGallery items={images} />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Gallery;
