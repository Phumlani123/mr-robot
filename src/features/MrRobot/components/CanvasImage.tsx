import { Image } from "@/components/ui";
import React from "react";

export const CanvasImage = () => {
  return (
    <Image
      className="w-full h-full absolute top-0 left-0"
      url="/mrRobot.png"
      altText="robot image"
    />
  );
};
