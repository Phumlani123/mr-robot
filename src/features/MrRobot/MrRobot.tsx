import { useCallback } from "react";
import { Canvas } from "./components/Canvas";
import regions, { Region } from "./robot_regions";

const BACKGROUND_IMAGE = new Image();
BACKGROUND_IMAGE.src = "./mrRobot.png";
BACKGROUND_IMAGE.className = "mr__robot";

export const MrRobot = () => {
  const annotationBoxes = useCallback(
    (context: CanvasRenderingContext2D, item: Region) => {
      context.fillStyle = item.color;
      context.strokeStyle = item.color;
      context.strokeRect(
        Math.round(item.x * BACKGROUND_IMAGE.width),
        Math.round(item.y * BACKGROUND_IMAGE.height),
        Math.round(item.w * BACKGROUND_IMAGE.width),
        Math.round(item.h * BACKGROUND_IMAGE.height)
      );
      context.fillRect(
        Math.round(item.x * BACKGROUND_IMAGE.width),
        Math.round(item.y * BACKGROUND_IMAGE.height),
        Math.round(item.w * BACKGROUND_IMAGE.width),
        Math.round(item.h * BACKGROUND_IMAGE.height)
      );

      return context;
    },
    []
  );

  const drawCanvas = (context: CanvasRenderingContext2D) => {
    const rect = context.canvas.getBoundingClientRect();
    context.drawImage(BACKGROUND_IMAGE, 0, 0);
    return regions.map((item) => annotationBoxes(context, item));
  };

  return (
    <Canvas
      draw={drawCanvas}
      width={BACKGROUND_IMAGE.width}
      height={BACKGROUND_IMAGE.height / 1.3}
    />
  );
};
