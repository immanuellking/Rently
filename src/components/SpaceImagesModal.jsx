import React, { useEffect } from "react";
import { CgClose } from "react-icons/cg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const SpaceImagesModal = ({ setImagesModalVisible, spaceImages }) => {
  console.log("MOOOODDDDAAAAAALLLL", Object.values(spaceImages));
  const images = Object.values(spaceImages);
  useEffect(() => {
    // Disable scrolling on the body when the modal is mounted
    document.body.style.overflow = "hidden";

    // Re-enable scrolling on the body when the modal is unmounted
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.9)] flex justify-center items-center"
      style={{ zIndex: 2000 }}
    >
      {/* Your modal content */}
      <div className="modal-content w-full h-full relative flex items-center justify-center">
        <div
          className="absolute top-3 right-3 p-2 bg-red-600 rounded-md cursor-pointer"
          onClick={() => setImagesModalVisible(false)}
        >
          <CgClose
            size={23}
            color="#fff"
          />
        </div>

        <div className="w-4/5 m-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className=" h-[500px]"
          >
            {images.map((image, index) => (
              <SwiperSlide
                className="w-full h-full"
                style={{ margin: "0px", width: "100%" }}
              >
                <img
                  className="w-full h-full object-fill"
                  src={image}
                  key={index}
                  alt="available_space"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SpaceImagesModal;
