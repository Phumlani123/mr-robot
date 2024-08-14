import { useRef, useEffect } from "react";

export const useCanvas = (
  draw: (context: CanvasRenderingContext2D) => void
) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    draw(context);

    return () => {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    };
  }, [draw]);

  return canvasRef;
};
