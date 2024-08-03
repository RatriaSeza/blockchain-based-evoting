import { toast } from "react-toastify";

export const ToastError = (message: string) => {
  toast.error(message, {
    position: "bottom-right",
  });
};

export const ToastSuccess = (message: string) => {
  toast.success(message, {
    position: "bottom-right",
  });
};

export const ToastWarning = (message: string) => {
  toast.warning(message, {
    position: "bottom-right",
  });
}