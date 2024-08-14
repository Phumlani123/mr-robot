import React, {
  CanvasHTMLAttributes,
  DetailedHTMLProps,
  FC,
  useEffect,
  useRef,
} from "react";

type CanvasProps = DetailedHTMLProps<
  CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
> & { draw: (context: CanvasRenderingContext2D) => void };

export const Canvas: FC<CanvasProps> = ({ draw, ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    draw(context);
  }, [draw]);

  return (
    <canvas
      className="z-10"
      width={props.width}
      height={props.height}
      ref={canvasRef}
    />
  );
};
