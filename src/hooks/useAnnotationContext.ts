import { AnnotationContext } from "@/providers/AnnotationContextProvider";
import { useContext } from "react";

// Custom hook to expose the AnnotationContext
export const useAnnotationContext = () => useContext(AnnotationContext);
