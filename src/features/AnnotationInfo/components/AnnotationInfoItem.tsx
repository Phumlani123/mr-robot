import { Label } from "@/components/ui/Label";
import { AnnotationItemType } from "@/types/AnnotationItemType";
import { cn } from "@/utils/cn";
import { useState } from "react";

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
  const { class_name, class_uuid, status } = item as AnnotationItemType;
  const [checked, setChecked] = useState<boolean>(status ?? true);

  const handleItemChecked = () => {
    setChecked((prev) => {
      const newChecked = !prev;
      updateItem(class_uuid, newChecked);
      return newChecked;
    });
  };

  return (
    <Label
      htmlFor={class_uuid}
      size="medium"
      className={cn(
        `no-underline text-[#555] mx-0 my-2 hover:text-[#888]`,
        status === undefined ? "" : !status ? "line-through" : "",
        className
      )}
    >
      <input
        className="hidden relative"
        onChange={handleItemChecked}
        type="checkbox"
        id={class_uuid}
        checked={checked}
        value={`${checked}`}
      />
      {class_name}
    </Label>
  );
};
