import { Label, LabelProps } from "@/components/ui";
import type { StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Label",
  component: Label,
};

export default meta;
type Story = StoryObj<LabelProps>;

export const Example: Story = {
  args: { size: "medium", children: "I am a label" },
};
