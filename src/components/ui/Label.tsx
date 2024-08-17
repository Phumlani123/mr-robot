import { Sizes } from "@/types/Size";
import { cn } from "@/utils/cn";
import { LabelHTMLAttributes, ReactNode, useMemo } from "react";

export type LabelProps = {
  size: Sizes;
  children: ReactNode;
  className?: string;
};

export const Label = ({
  size,
  children,
  className,
  ...rest
}: LabelProps & LabelHTMLAttributes<HTMLLabelElement>) => {
  const labelSizes = useMemo(() => {
    return {
      xs: "text-xs",
      small: "text-sm",
      medium: "text-base",
      large: "text-xl",
      xl: "text-2xl",
    }[size];
  }, [size]);

  return (
    <label {...rest} className={cn(labelSizes, className)}>
      {children}
    </label>
  );
};
