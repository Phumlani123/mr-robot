import regions from "@/features/MrRobot/robot_regions";
import { AnnotationItemType } from "@/types/AnnotationItemType";
import { createContext, ReactNode, useState } from "react";

export type AnnotationContextType = {
  annotations: AnnotationItemType[];
  setAnnotationStatus: (id: string | undefined, status: boolean) => void;
  setAllAnnotationsStatus: (status: boolean) => void;
};

// Create the context with a default value of null
export const AnnotationContext = createContext<AnnotationContextType | null>(
  null
);

const AnnotationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [annotations, setAnnotations] = useState(regions);

  // Update the status of a single annotation
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

  // Update the status of all annotations
  const setAllAnnotationsStatus = (currentStatus: boolean) => {
    setAnnotations(
      annotations.map((item) => ({ ...item, status: currentStatus }))
    );
  };

  return (
    // Provide the context to child components
    <AnnotationContext.Provider
      value={{
        annotations,
        setAnnotationStatus,
        setAllAnnotationsStatus,
      }}
    >
      {children}
    </AnnotationContext.Provider>
  );
};

export default AnnotationProvider;
