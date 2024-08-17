import { Canvas } from "./components/Canvas";
import { useAnnotationContext } from "@/hooks/useAnnotationContext";
import { AnnotationContextType } from "@/providers/AnnotationContextProvider";
import { AnnotationItemType } from "@/types/AnnotationItemType";
import { CanvasImage } from "./components/CanvasImage";

export const MrRobot = () => {
  const { annotations } = useAnnotationContext() as AnnotationContextType;
  const imageWidth = 605;
  const imageHeight = 807;

  const annotationBoxes = (
    context: CanvasRenderingContext2D,
    item: AnnotationItemType
  ) => {
    context.fillStyle = item.color;
    context.strokeStyle = item.color;

    const drawRect = (
      context: CanvasRenderingContext2D,
      item: AnnotationItemType,
      imageWidth: number,
      imageHeight: number
    ) => {
      const x = Math.round(item.x * imageWidth);
      const y = Math.round(item.y * imageHeight);
      const w = Math.round(item.w * imageWidth);
      const h = Math.round(item.h * imageHeight);

      context.strokeRect(x, y, w, h);
      context.fillRect(x, y, w, h);
    };

    drawRect(context, item, imageWidth, imageHeight);

    return context;
  };

  const drawCanvas = (context: CanvasRenderingContext2D) => {
    context.canvas.width = imageWidth;
    context.canvas.height = imageHeight;

    annotations
      .filter((item) => {
        if (item.status === undefined) item.status = true;
        return item.status;
      })
      .map((item) => annotationBoxes(context, item));
  };

  return (
    <div className="w-[605px] h-[807px] 2xl:w-[786.5px] 2xl:h-[1049.1px] -mt-12">
      <div className="w-full h-full relative mr-0 lg:mr-24">
        <CanvasImage />
        <Canvas draw={drawCanvas} />
      </div>
    </div>
  );
};
