import { ReactNode } from "react";

export type ButtonType = "button" | "submit" | "reset";
export type ButtonShape = "default" | "circle" | "round";
export type ButtonSize = "large" | "default" | "small";
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "dashed"
  | "text"
  | "link";

export interface ButtonNormalPropsInterface {
  label?: string;
  className?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  marginTop?: string;
  color?: string;
  type?: ButtonType;
  icon?: ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
  block?: boolean;
  ghost?: boolean;
  danger?: boolean;
  loading?: boolean;
  size?: ButtonSize;
  shape?: ButtonShape;
  onClick?: () => void;
}
