import { Footer, FooterProps } from "@/components/ui";
import type { StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Footer",
  component: Footer,
};

export default meta;
type Story = StoryObj<FooterProps>;

export const Example: Story = {
  // args: { className: "relative" },
};
