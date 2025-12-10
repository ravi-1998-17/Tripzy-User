import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Slider() {
  const slides = [
    "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    "https://dofurnish.com/wp-content/uploads/2024/01/fabric-sofa-set-.effectsResult.jpg",
    "https://cdn.vox-cdn.com/thumbor/YmxH8bjRjDscpIg-_JKdsHVM5MY=/0x0:2000x1333/1200x900/filters:focal(840x506:1160x826)/cdn.vox-cdn.com/uploads/chorus_image/image/59574273/161122_14_59_10_5DS_7049.0.0.0.jpg",
  ];
  return (
    <Swiper spaceBetween={10} slidesPerView={1}>
      {slides.map((img, idx) => {
        return (
          <SwiperSlide key={idx}>
            <img
              src={img}
              style={{ width: "100%", height: "350px", objectFit: "cover" }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Slider;
