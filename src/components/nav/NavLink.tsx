import * as React from "react";
import { NavLink as BaseNavLink, NavLinkProps } from "react-router-dom";

type Props = NavLinkProps & {
  disabled?: boolean;
};

export const NavLink = React.forwardRef(
  ({ disabled, ...props }: Props, ref) => {
    return (
      <BaseNavLink
        ref={ref as React.Ref<HTMLAnchorElement> | null}
        {...props}
        className={({ isActive }) =>
          [
            "focus:bg-transparent",
            props.className,
            isActive ? "font-bold" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
          }
        }}
        style={({ isActive }) => ({
          ...props.style,
          ...(isActive ? {} : null),
        })}
      />
    );
  }
);
