import React from "react";

const CustomLoader = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* <Hourglass
        height={60}
        width={60}
        ariaLabel="loading-indicator"
    /> */}
    </div>
  );
};

export default CustomLoader;
