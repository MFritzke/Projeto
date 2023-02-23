import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function C_Notify(props) {

    if (props.showError) {
      toast.error(props.message, {
        position: props.position,
        autoClose: props.autoClose,
        hideProgressBar: props.hideProgressBar,
        closeOnClick: props.closeOnClick,
        pauseOnHover: props.pauseOnHover,
        draggable: props.draggable,
        progress: props.progress,
        theme: "colored",
      });
    }
    if (props.showInfo) {
      toast.info(props.message, {
        position: props.position,
        autoClose: props.autoClose,
        hideProgressBar: props.hideProgressBar,
        closeOnClick: props.closeOnClick,
        pauseOnHover: props.pauseOnHover,
        draggable: props.draggable,
        progress: props.progress,
        theme: "colored",
      });
    }
    if (props.showSuccess) {
      toast.success(props.message, {
        position: props.position,
        autoClose: props.autoClose,
        hideProgressBar: props.hideProgressBar,
        closeOnClick: props.closeOnClick,
        pauseOnHover: props.pauseOnHover,
        draggable: props.draggable,
        progress: props.progress,
        theme: "colored",
      });
    }
    if (props.showWarn) {
      toast.warn(props.message, {
        position: props.position,
        autoClose: props.autoClose,
        hideProgressBar: props.hideProgressBar,
        closeOnClick: props.closeOnClick,
        pauseOnHover: props.pauseOnHover,
        draggable: props.draggable,
        progress: props.progress,
        theme: "colored",
      });
    }

  return (
    <ToastContainer />
  )
}