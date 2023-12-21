import React, { useEffect } from "react";

const SpaceImagesModal = ({ imagesModalVisible }) => {
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
      className={`${ imagesModalVisible ? "fixed" : "none"} top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] flex justify-center items-center`}
      style={{zIndex: 2000}}
    >
      {/* Your modal content */}
      <div className="modal-content"> 
        {/* Your modal content goes here */}
      </div>
    </div>
  );
};

export default SpaceImagesModal;
