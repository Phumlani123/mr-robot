import { Sizes } from "@/types/Size";
import { cn } from "@/utils/cn";
import React, { ReactNode, useMemo } from "react";

export type ButtonProps = {
  size: Sizes;
  children: ReactNode;
  className?: string;
  withIcon?: boolean;
};

export const Button = ({
  size,
  children,
  className,
  withIcon,
}: ButtonProps) => {
  const buttonSizes = useMemo(() => {
    return {
      xs: "text-xs",
      small: "text-sm",
      medium: "text-base",
      large: "text-xl",
      xl: "text-2xl",
    }[size];
  }, [size]);

  return (
    <button
      className={cn(
        "border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-500 inline-flex items-center hover:text-white",
        buttonSizes,
        className
      )}
    >
      {children}
      {withIcon && (
        <svg
          className="h-6 ml-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};
