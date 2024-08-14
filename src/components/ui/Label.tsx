import { Sizes } from "@/types/Size";
import { cn } from "@/utils/cn";
import React, { ReactNode, useMemo } from "react";

export type LabelProps = {
  size: Sizes;
  children: ReactNode;
  className?: string;
};

export const Label = ({ size, children, className }: LabelProps) => {
  const labelSizes = useMemo(() => {
    return {
      xs: "text-xs",
      small: "text-sm",
      medium: "text-base",
      large: "text-xl",
      xl: "text-2xl",
    }[size];
  }, [size]);

  return <label className={cn(labelSizes, className)}>{children}</label>;
};
