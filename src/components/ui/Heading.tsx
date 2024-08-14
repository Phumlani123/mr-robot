import { cn } from "@/utils/cn";
import React, { useMemo } from "react";

type HeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingProps = {
  level: HeadingLevels;
  text: string;
  className?: string;
};

export const Heading = ({ text, level, className }: HeadingProps) => {
  const headingSizes = useMemo(() => {
    return {
      h1: "text-5xl",
      h2: "text-4xl",
      h3: "text-3xl",
      h4: "text-2xl",
      h5: "text-xl",
      h6: "text-lg",
    }[level];
  }, [level]);

  return React.createElement(
    level,
    { className: cn(headingSizes, className) },
    text
  );
};
