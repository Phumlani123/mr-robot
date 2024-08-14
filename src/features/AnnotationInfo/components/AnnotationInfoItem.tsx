import { AnnotationItemType } from "@/types/AnnotationItemType";
import { cn } from "@/utils/cn";
import React, { useState } from "react";

export type AnnotationInfoItemProps = {
  item?: AnnotationItemType;
  className?: string;
  updateItem: (id: string | undefined, status: boolean) => void;
};

export const AnnotationInfoItem = ({
  item,
  className,
  updateItem,
}: AnnotationInfoItemProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const { class_name, class_uuid, status } = item as AnnotationItemType;

  const handleItemChecked = () => {
    setChecked((prev) => !prev);
    updateItem(class_uuid, checked);
  };

  return (
    <label
      htmlFor={class_uuid}
      className={cn(
        "no-underline text-[#555] mx-0 my-2",
        checked ? "line-through" : "",
        className
      )}
    >
      <input
        className="hidden relative"
        onChange={handleItemChecked}
        type="checkbox"
        id={class_uuid}
        checked={status}
        value={`${checked}`}
      />
      {class_name}
    </label>
  );
};
