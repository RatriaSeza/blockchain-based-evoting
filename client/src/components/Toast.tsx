import React from "react";
import { toast } from "react-toastify";

type ToastProps = {
  message: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";
  duration?: number;
};

export const ToastError: React.FC<ToastProps> = ({ message, position = "bottom-right", duration = 5000}) => {
  toast.error(message, {
    position: position,
    autoClose: duration
  });

  return null
};

export const ToastSuccess: React.FC<ToastProps> = ({ message, position = "bottom-right", duration = 5000}) => {
  toast.success(message, {
    position: position,
    autoClose: duration
  });

  return null;
};

export const ToastWarning: React.FC<ToastProps> = ({ message, position = "bottom-right", duration = 5000 }) => {
  toast.warning(message, {
    position: position,
    autoClose: duration
  });

  return null;
}

export const ToastDefault: React.FC<ToastProps> = ({ message, position = "bottom-right", duration = 5000 }) => {
  toast(message, {
    position: position,
    autoClose: duration
  });

  return null;
}
