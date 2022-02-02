import { ReactNode } from "react";
import TableBasic from "./Table.Basic";

const Table = (props: { children: ReactNode }) => {
  return props.children;
};

Table.Basic = TableBasic;

export default Table;
