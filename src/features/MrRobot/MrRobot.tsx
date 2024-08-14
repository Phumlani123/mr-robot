import { Canvas } from "./components/Canvas";
import { useAnnotationContext } from "@/hooks/useAnnotationContext";
import { AnnotationContextType } from "@/providers/AnnotationContextProvider";
import { AnnotationItemType } from "@/types/AnnotationItemType";
import { CanvasImage } from "./components/CanvasImage";

const BACKGROUND_IMAGE = new Image();
BACKGROUND_IMAGE.src = "./mrRobot.png";

type MrRobotProps = {
  className: string;
};

export const MrRobot = ({ className }: MrRobotProps) => {
  const { annotations } = useAnnotationContext() as AnnotationContextType;

  const annotationBoxes = (
    context: CanvasRenderingContext2D,
    item: AnnotationItemType,
    image: HTMLImageElement
  ) => {
    context.fillStyle = item.color;
    context.strokeStyle = item.color;

    context.strokeRect(
      Math.round(item.x * image.width),
      Math.round(item.y * image.height),
      Math.round(item.w * image.width),
      Math.round(item.h * image.height)
    );
    context.fillRect(
      Math.round(item.x * image.width),
      Math.round(item.y * image.height),
      Math.round(item.w * image.width),
      Math.round(item.h * image.height)
    );

    return context;
  };

  const drawCanvas = (context: CanvasRenderingContext2D) => {
    BACKGROUND_IMAGE.onload = () => {
      context.canvas.width = BACKGROUND_IMAGE.width;
      context.canvas.height = BACKGROUND_IMAGE.height;
      console.log(BACKGROUND_IMAGE);
    };

    annotations.map((item) => annotationBoxes(context, item, BACKGROUND_IMAGE));
  };

  return (
    <div className="w-[605px] h-[805px]">
      <div className="w-full h-full relative">
        <CanvasImage />
        <Canvas
          draw={drawCanvas}
          className={className}
          // width={BACKGROUND_IMAGE.width}
          // height={BACKGROUND_IMAGE.height / 1.3}
        />
      </div>
    </div>
  );
};
