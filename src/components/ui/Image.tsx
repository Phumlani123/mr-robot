import { cn } from "@/utils/cn";
import React from "react";

export type ImageProps = {
  url: string;
  altText?: string;
  className?: string;
};

export const Image = ({ url, altText, className }: ImageProps) => {
  return (
    <img
      className={cn("max-w-full, block", className)}
      src={url}
      alt={altText ?? "image"}
    />
  );
};
