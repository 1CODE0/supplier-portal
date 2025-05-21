import { Box, CircularProgress } from "@mui/material";
import React from "react";

// const CustomLoader = () => {
//   return (
//     <div
//       style={{
//         position: "absolute",
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50%, -50%)",
//       }}
//     >
//       {/* <Hourglass
//         height={60}
//         width={60}
//         ariaLabel="loading-indicator"
//     /> */}
//     </div>
//   );
// };

// export default CustomLoader;

export const CustomLoader: React.FC = () => (
  <Box
    sx={{
      position: "fixed",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(255,255,255,0.8)",
      zIndex: (theme) => theme.zIndex.modal,
    }}
  >
    {/* <CircularProgress size={60} /> */}
    <CircularProgress size={60} thickness={5} />
  </Box>
);
