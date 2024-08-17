import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, assert } from "vitest";
import { AnnotationInfoItem } from "../AnnotationInfo/components/AnnotationInfoItem";

describe("AnnotationInfoItem", () => {
  const mockUpdateItem = vi.fn();
  const item: any = {
    class_name: "Test Class",
    class_uuid: "1234",
    status: true,
  };

  it("renders the component with the correct class name", () => {
    render(<AnnotationInfoItem item={item} updateItem={mockUpdateItem} />);
    const labelElement = screen.getByText("Test Class");
    expect(labelElement).toBeDefined();
  });

  it("calls updateItem with the correct arguments when checkbox is clicked", () => {
    render(<AnnotationInfoItem item={item} updateItem={mockUpdateItem} />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(mockUpdateItem).toHaveBeenCalledWith("1234", false);
  });

  it("applies the correct class when status is false", () => {
    const itemWithFalseStatus = { ...item, status: false };
    render(
      <AnnotationInfoItem
        item={itemWithFalseStatus}
        updateItem={mockUpdateItem}
      />
    );
    const labelElement = screen.getByText("Test Class");
    console.log(labelElement);
    assert.match(labelElement.className, /line-through/);
  });
});
