import { ToastContainer } from "react-toastify";
import useThemePalette from "../hooks/useThemePalette";

const CustomToastContainer = () => {
  const { custom } = useThemePalette();

  return (
    <ToastContainer
      position="top-right"
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      style={{ background: custom.colorBgBase }}
    />
  );
};

export default CustomToastContainer;
