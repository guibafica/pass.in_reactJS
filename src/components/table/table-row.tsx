import { ComponentProps } from "react";

interface ITableRowProps extends ComponentProps<"tr"> {}

export function TableRow(props: ITableRowProps) {
  return (
    <tr {...props} className="border-b border-white/10 hover:bg-white/5" />
  );
}
