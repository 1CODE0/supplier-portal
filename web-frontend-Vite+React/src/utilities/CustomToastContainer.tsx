import { ToastContainer } from "react-toastify";
import useThemePalette from "../hooks/useThemePalette";
import style from "./toast.module.css";

const CustomToastContainer = () => {
  const { custom } = useThemePalette();

  const cssVars = {
    "--colorBgBase": custom.colorBgBase,
    "--colorText": custom.colorText,
  } as React.CSSProperties;

  return (
    <ToastContainer
      position="top-right"
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      theme={"colored"}
      style={{
        ...cssVars,
        // ...{
        //   top: "10px", // Adjust if needed to fine-tune vertical positioning
        //   right: "10px", // Adjust if needed to fine-tune horizontal positioning
        // },
      }}
      // toastClassName={() => style.customToast}
    />
  );
};

export default CustomToastContainer;
