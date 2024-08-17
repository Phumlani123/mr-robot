import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MrRobot } from "../MrRobot";
import AnnotationProvider from "@/providers/AnnotationContextProvider";
import { AnnotationItemType } from "@/types/AnnotationItemType";
import "vitest-canvas-mock";

import regions from "../MrRobot/robot_regions";

describe("MrRobot Component", () => {
  it("renders without crashing", () => {
    render(
      <AnnotationProvider>
        <MrRobot />
      </AnnotationProvider>
    );
    expect(screen.getByTestId("canvas")).toBeDefined();
  });

  it("renders CanvasImage component", () => {
    render(
      <AnnotationProvider>
        <MrRobot />
      </AnnotationProvider>
    );
    expect(screen.getByRole("img")).toBeDefined();
  });

  it("renders Canvas component", () => {
    render(
      <AnnotationProvider>
        <MrRobot />
      </AnnotationProvider>
    );
    expect(screen.getByTestId("canvas")).toBeDefined();
  });

  it("draws annotations on the canvas", () => {
    const annotations: AnnotationItemType[] = regions;

    render(
      <AnnotationProvider>
        <MrRobot />
      </AnnotationProvider>
    );

    const canvas = screen.getByTestId("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as any;

    annotations.forEach((item) => {
      const x = Math.round(item.x * 605);
      const y = Math.round(item.y * 807);
      const w = Math.round(item.w * 605);
      const h = Math.round(item.h * 807);

      expect(context.strokeRect).toHaveBeenCalledWith(x, y, w, h);
      expect(context.fillRect).toHaveBeenCalledWith(x, y, w, h);
    });
  });
});
