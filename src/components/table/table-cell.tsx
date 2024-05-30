import { ComponentProps } from "react";

interface ITableCellProps extends ComponentProps<"td"> {}

export function TableCell(props: ITableCellProps) {
  return <td {...props} className="py-3 px-4 text-sm text-zinc-300" />;
}
