import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Switch } from "../Switch";

describe("Switch Component", () => {
  it("should render correctly", () => {
    const toggleItems = vi.fn();
    render(<Switch toggleItems={toggleItems} />);

    expect(screen.getByText("Show All")).toBeDefined();
    expect(screen.getByText("Hide All")).toBeDefined();
    expect(screen.getByTestId("switch")).toBeDefined();
  });

  it("should toggle the checkbox state", () => {
    const toggleItems = vi.fn();
    render(<Switch toggleItems={toggleItems} />);

    const switchInput = screen.getByTestId("switch-input");
    console.log(switchInput);
    expect(switchInput).to.haveOwnProperty("checked", false);

    fireEvent.click(switchInput);
    expect(switchInput).to.haveOwnProperty("checked", true);

    fireEvent.click(switchInput);
    expect(switchInput).to.haveOwnProperty("checked", false);
  });

  it("should call toggleItems with the correct state", () => {
    const toggleItems = vi.fn();
    render(<Switch toggleItems={toggleItems} />);

    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);
    expect(toggleItems).toHaveBeenCalledWith(false);

    fireEvent.click(checkbox);
    expect(toggleItems).toHaveBeenCalledWith(true);
  });
});
