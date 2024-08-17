import { AnnotationInfo } from "@/features/AnnotationInfo";
import * as React from "react";
import { Footer, Image, Heading } from "../ui";
import { useAnnotationContext } from "@/hooks/useAnnotationContext";
import { AnnotationContextType } from "@/providers/AnnotationContextProvider";
import Tilt from "react-parallax-tilt";

type ContentLayoutProps = {
  children: React.ReactNode;
};

export const ContentLayout = ({ children }: ContentLayoutProps) => {
  const { annotations } = useAnnotationContext() as AnnotationContextType;
  return (
    <div className="bg__image mx-auto my-auto w-full h-[90dvh] px-4 py-6 sm:px-6 md:px-8 bg-gray-200 shadow-2xl rounded">
      <div className="bg__text relative" data-bg-text="MrRobot"></div>
      <div className="flex flex-col justify-start items-start absolute z-10">
        <Heading className="text-[#555]" level="h1" text="MrRobot" />
        <p className="text-[#555] text-left">
          Toggle the annotation headings <br /> to the left to show and hide the
          annotation boxes
        </p>
      </div>
      <AnnotationInfo items={annotations} />
      {children}
      <Tilt className="absolute top-[5rem] z-0 opacity-0 md:opacity-100 md:w-2/6 2xl:w-5/12">
        <Image className="" url="/logo.png" altText="logo image" />
      </Tilt>
      <Footer />
    </div>
  );
};
