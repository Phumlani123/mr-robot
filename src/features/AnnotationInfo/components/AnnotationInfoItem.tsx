import { useAnnotationContext } from "@/hooks/useAnnotationContext";
import { AnnotationContextType } from "@/providers/AnnotationContextProvider";
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
  const [checked, setChecked] = useState<boolean>(true);
  const { class_name, class_uuid, status } = item as AnnotationItemType;
  const { allChecked } = useAnnotationContext() as AnnotationContextType;

  const handleItemChecked = () => {
    setChecked((prev) => {
      const newChecked = !prev;
      updateItem(class_uuid, newChecked);
      return newChecked;
    });
  };

  console.log(status, checked);

  return (
    <label
      htmlFor={class_uuid}
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
        checked={!allChecked ? allChecked : status}
        value={`${!allChecked ? allChecked : status}`}
      />
      {class_name}
    </label>
  );
};
