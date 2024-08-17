import { useRef, useEffect } from "react";

/**
 * Custom hook to handle canvas drawing.
 * This hook sets up a canvas element and provides a drawing context.
 *
 * @param {function} draw - A function that takes a CanvasRenderingContext2D and performs drawing operations.
 * @returns {React.RefObject<HTMLCanvasElement>} - A ref object to be attached to a canvas element.
 */
export const useCanvas = (
  draw: (context: CanvasRenderingContext2D) => void
) => {
  // Create a ref to store the canvas element
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Get the canvas element from the ref
    const canvas = canvasRef.current;
    if (!canvas) return; // Exit if canvas is not available

    // Get the 2D drawing context from the canvas
    const context = canvas.getContext("2d");
    if (!context) return; // Exit if context is not available

    draw(context);

    // Cleanup function to clear the canvas
    return () => {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    };
  }, [draw]); // Re-run the effect if the draw function changes

  return canvasRef;
};
