import { AnnotationInfo } from "@/features/AnnotationInfo";
import * as React from "react";
import { Footer, Image, Heading } from "../ui";

type ContentLayoutProps = {
  children: React.ReactNode;
};

export const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <div className="mx-auto my-auto w-full h-[90dvh] px-4 py-6 sm:px-6 md:px-8 bg-gray-200 shadow-2xl rounded">
      <Heading className="absolute z-10 " level="h3" text="MrRobot" />
      <AnnotationInfo />

      {children}
      <Image
        className="absolute top-[5rem] z-0 opacity-0 md:opacity-100 md:w-2/6"
        url="/logo.png"
      />
      <Footer />
    </div>
  );
};
