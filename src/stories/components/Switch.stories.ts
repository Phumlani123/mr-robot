import { Switch, SwitchProps } from "@/components/ui";
import type { StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Switch",
  component: Switch,
};

export default meta;
type Story = StoryObj<SwitchProps>;

export const Example: Story = {
  args: { toggleItems: () => !true },
};
