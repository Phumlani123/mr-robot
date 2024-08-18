import { Image, ImageProps } from "@/components/ui";
import type { StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Image",
  component: Image,
};

export default meta;
type Story = StoryObj<ImageProps>;

export const Example: Story = {
  args: { url: "https://picsum.photos/300/300", altText: "random image" },
};
