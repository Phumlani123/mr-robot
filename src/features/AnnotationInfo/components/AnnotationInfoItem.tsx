import React from "react";

export type AnnotationInfoItemProps = {
  label: string;
  isChecked: boolean;
};

export const AnnotationInfoItem = ({
  label,
  isChecked,
}: AnnotationInfoItemProps) => {
  return <p className="no-underline text-[#666] mx-0 my-2">{label}</p>;
};
