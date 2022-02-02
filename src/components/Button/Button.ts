import { ReactNode } from "react";
import ButtonNormal from "./Button.Normal";

const Button = (props: { children: ReactNode }) => {
  return props.children;
};

Button.Normal = ButtonNormal;

export default Button;
