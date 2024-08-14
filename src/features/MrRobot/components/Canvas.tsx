import { useCanvas } from "@/hooks/useCanvas";
import React, { CanvasHTMLAttributes, DetailedHTMLProps, FC } from "react";

type CanvasProps = DetailedHTMLProps<
  CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
> & { draw: (context: CanvasRenderingContext2D) => void };

export const Canvas: FC<CanvasProps> = ({ draw, ...props }) => {
  const canvasRef = useCanvas(draw);

  return (
    <canvas
      className={"w-full h-full absolute top-0 left-0 " + props.className}
      width={props.width}
      height={props.height}
      ref={canvasRef}
    />
  );
};
