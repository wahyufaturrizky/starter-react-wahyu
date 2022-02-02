import { FunctionComponent, SVGProps } from "react";

export type SizeInput = "small" | "default" | "large";
export interface InputProps {
  name?: string;
  id?: string;
  icon?: string;
  fontSize?: string;
  size?: SizeInput;
  label?: string;
  placeHolder?: string;
  borderRadius?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  type?: string;
  marginTop?: string;
  marginBottom?: string;
  marginRight?: string;
  marginLeft?: string;
  onChange?: () => void;
}
