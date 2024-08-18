import { useCanvas } from "@/hooks/useCanvas";
import { CanvasHTMLAttributes, DetailedHTMLProps } from "react";

export type CanvasProps = DetailedHTMLProps<
  CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
> & { draw: (context: CanvasRenderingContext2D) => void };

export const Canvas = ({ draw, ...props }: CanvasProps) => {
  const canvasRef = useCanvas(draw);

  return (
    <canvas
      data-testid="canvas"
      className={"w-full h-full absolute top-0 left-0"}
      width={props.width}
      height={props.height}
      ref={canvasRef}
    />
  );
};
