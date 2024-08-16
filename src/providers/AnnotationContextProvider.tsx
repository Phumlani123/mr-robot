import regions from "@/features/MrRobot/robot_regions";
import { AnnotationItemType } from "@/types/AnnotationItemType";
import { createContext, ReactNode, useState } from "react";

export type AnnotationContextType = {
  annotations: AnnotationItemType[];
  allChecked: boolean;
  setAnnotationStatus: (id: string | undefined, status: boolean) => void;
  setAllAnnotationsStatus: (status: boolean) => void;
};

export const AnnotationContext = createContext<AnnotationContextType | null>(
  null
);

const AnnotationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [annotations, setAnnotations] = useState(regions);
  const [allChecked, setAllChecked] = useState<boolean>(false);

  const setAnnotationStatus = (
    id: string | undefined,
    currentStatus: boolean
  ) => {
    setAnnotations(
      annotations.map((item) =>
        item.class_uuid === id ? { ...item, status: currentStatus } : item
      )
    );
  };

  const setAllAnnotationsStatus = (currentStatus: boolean) => {
    setAnnotations(
      annotations.map((item) => ({ ...item, status: currentStatus }))
    );
    setAllChecked(currentStatus);
  };

  return (
    <AnnotationContext.Provider
      value={{
        annotations,
        setAnnotationStatus,
        setAllAnnotationsStatus,
        allChecked,
      }}
    >
      {children}
    </AnnotationContext.Provider>
  );
};

export default AnnotationProvider;
