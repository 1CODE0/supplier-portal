import type { ToastOptions } from "react-toastify";
import { toast } from "react-toastify";

export type ToastType = "success" | "error" | "info" | "warning" | "warn";

const toastOptions = { autoClose: 5000 };

const customToast = (type: ToastType, message: string, options?: ToastOptions) => {
  const toastMethods = {
    success: toast.success,
    error: toast.error,
    info: toast.info,
    warning: toast.warning,
    warn: toast.warn,
  };

  const showToast = toastMethods[type];

  return showToast(message, { ...toastOptions, ...options });
};

export default customToast;
