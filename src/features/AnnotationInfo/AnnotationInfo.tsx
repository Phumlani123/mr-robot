import React from "react";
import { AnnotationInfoItem } from "./components/AnnotationInfoItem";
import { Switch } from "@/components/ui";
import { AnnotationItemType } from "@/types/AnnotationItemType";
import { useAnnotationContext } from "@/hooks/useAnnotationContext";
import { AnnotationContextType } from "@/providers/AnnotationContextProvider";

export type AnnotationInfoProps = {
  items: AnnotationItemType[];
};

export const AnnotationInfo = ({ items }: AnnotationInfoProps) => {
  const { setAnnotationStatus } =
    useAnnotationContext() as AnnotationContextType;
  return (
    <div className="flex flex-col z-10 absolute right-[4rem] justify-center items-end">
      {items.map((item) => (
        <AnnotationInfoItem
          key={item.class_uuid}
          item={item}
          updateItem={setAnnotationStatus}
        />
      ))}
      <Switch />
    </div>
  );
};
