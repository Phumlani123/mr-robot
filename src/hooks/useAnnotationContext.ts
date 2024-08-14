import { AnnotationContext } from "@/providers/AnnotationContextProvider";
import { useContext } from "react";

export const useAnnotationContext = () => useContext(AnnotationContext);
