import { ReactNode } from "react";

export type TextAlignType = "left" | "center" | "right";

export interface TitleProps {
  children?: ReactNode;
  level?: number;
  label?: string;
  color?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
  textAlign?: TextAlignType;
}
