import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useState } from "react";
import ImageLightbox from "./ImageLightbox";

export default function ImageCarousel({ images, onLightboxChange }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const changeOpen = (value) => {
    setOpen(value);
    onLightboxChange?.(value);
  };

  return (
    <>
      <div className="bg-black/80 text-white text-sm px-2 py-1 rounded-t">
        {images[index].title}
      </div>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
      >
        {images.map((img) => (
          <SwiperSlide key={img.src}>
            <button
              type="button"
              aria-label={`Enlarge: ${img.title}`}
              onClick={() => changeOpen(true)}
              className="w-full aspect-[16/9] flex justify-center bg-black/20 cursor-zoom-in"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-contain"
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <ImageLightbox
        open={open}
        setOpen={changeOpen}
        slides={images}
        index={index}
      />
    </>
  );
}
