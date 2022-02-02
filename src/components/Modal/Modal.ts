import { ReactNode } from "react";
import ModalBasic from "./Modal.Basic";

const Modal = (props: { children: ReactNode }) => {
  return props.children;
};

Modal.Basic = ModalBasic;

export default Modal;
