import React from "react";

export type ImageType = {
  url: string;
  altText?: string;
  className?: string;
};

export const Image = ({ url, altText }: ImageType) => {
  return <img src={url} alt={altText ?? "image"} />;
};
