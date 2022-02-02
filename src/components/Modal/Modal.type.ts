import { ReactNode } from "react";

export interface ModalBasicProps {
  header?: boolean;
  footer?: boolean;
  visible?: boolean;
  widthModal?: string;
  children?: ReactNode;
  backgroundColor?: string;
  onOk?: () => void;
  onCancel?: () => void;
  headerTitle?: string;
}
