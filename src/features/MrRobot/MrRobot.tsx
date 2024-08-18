import { Canvas } from "./components/Canvas";
import { useAnnotationContext } from "@/hooks/useAnnotationContext";
import { AnnotationContextType } from "@/providers/AnnotationContextProvider";
import { AnnotationItemType } from "@/types/AnnotationItemType";
import { CanvasImage } from "./components/CanvasImage";

const IMAGE_WIDTH = 605;
const IMAGE_HEIGHT = 807;

export const MrRobot = () => {
  const { annotations } = useAnnotationContext() as AnnotationContextType;

  const drawCanvas = (context: CanvasRenderingContext2D) => {
    context.canvas.width = IMAGE_WIDTH;
    context.canvas.height = IMAGE_HEIGHT;

    annotations
      .filter((item) => {
        if (item.status === undefined) item.status = true;
        return item.status;
      })
      .map((item) => annotationBoxes(context, item));
  };

  return (
    <div className="w-[605px] h-[807px] 3xl:w-[786.5px] 3xl:h-[1049.1px] -mt-12">
      <div className="w-full h-full relative mr-0 lg:mr-24">
        <CanvasImage />
        <Canvas draw={drawCanvas} />
      </div>
    </div>
  );
};

const annotationBoxes = (
  context: CanvasRenderingContext2D,
  item: AnnotationItemType
) => {
  context.fillStyle = item.color;
  context.strokeStyle = item.color;

  const drawRect = (
    context: CanvasRenderingContext2D,
    item: AnnotationItemType,
    IMAGE_WIDTH: number,
    IMAGE_HEIGHT: number
  ) => {
    const x = Math.round(item.x * IMAGE_WIDTH);
    const y = Math.round(item.y * IMAGE_HEIGHT);
    const w = Math.round(item.w * IMAGE_WIDTH);
    const h = Math.round(item.h * IMAGE_HEIGHT);

    context.strokeRect(x, y, w, h);
    context.fillRect(x, y, w, h);
  };

  drawRect(context, item, IMAGE_WIDTH, IMAGE_HEIGHT);

  return context;
};
