import { ReactNode } from "react";

export type TextAlignType = "left" | "center" | "right";
export type TargetType = "_blank" | "_self" | "_parent" | "_top" | "framename";
export type TypeText =
  | "code"
  | "danger"
  | "delete"
  | "disabled"
  | "ilnk"
  | "italic"
  | "keyboard"
  | "strong"
  | "success"
  | "underline"
  | "link"
  | "warning";

export interface TextProps {
  children?: ReactNode;
  level?: number;
  label?: string;
  href?: string;
  target?: TargetType;
  type?: TypeText;
  color?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
  textAlign?: TextAlignType;
}
