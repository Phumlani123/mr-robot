import { Heading, HeadingProps } from "@/components/ui";
import type { StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Heading",
  component: Heading,
  parameters: {
    layout: "center",
  },
};

export default meta;
type Story = StoryObj<HeadingProps>;

export const Example: Story = {
  args: { level: "h1", text: "I'm a heading" },
};
