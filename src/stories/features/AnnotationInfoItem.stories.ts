import {
  AnnotationInfoItem,
  AnnotationInfoItemProps,
} from "@/features/AnnotationInfo/components/AnnotationInfoItem";
import { AnnotationItemType } from "@/types/AnnotationItemType";
import type { StoryObj } from "@storybook/react";

const meta = {
  title: "Features/AnnotationInfoItem",
  component: AnnotationInfoItem,
  parameters: {
    layout: "fullscreen",
  },
};

const item = {
  class_name: "Test Class",
  class_uuid: "1234",
  status: true,
} as AnnotationItemType;

export default meta;
type Story = StoryObj<AnnotationInfoItemProps>;

export const Example: Story = {
  args: { item: item },
};
