import { ComponentProps } from "react";

interface INavLinkProps extends ComponentProps<"a"> {
  text: string;
}

export function NavLink(props: INavLinkProps) {
  return (
    <a {...props} className="font-medium text-sm">
      {props.text}
    </a>
  );
}
