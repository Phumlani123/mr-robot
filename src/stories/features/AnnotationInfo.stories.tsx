import { AnnotationInfo, AnnotationInfoProps } from "@/features/AnnotationInfo";
import AnnotationProvider from "@/providers/AnnotationContextProvider";
import type { StoryObj } from "@storybook/react";

const meta = {
  title: "Features/AnnotationInfo",
  component: AnnotationInfo,
  parameters: {
    layout: "fullscreen",
  },
  // Add decorators to wrap the story in the provider
  decorators: [
    (Story: any) => (
      <AnnotationProvider>
        <Story />
      </AnnotationProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<AnnotationInfoProps>;

export const Example: Story = {
  args: {
    items: [
      {
        class_uuid: "1",
        class_name: "Annotation 1",
        x: 0.1,
        y: 0.1,
        w: 0.2,
        h: 0.2,
        color: "red",
        status: true,
      },
      {
        class_uuid: "2",
        class_name: "Annotation 2",
        x: 0.3,
        y: 0.3,
        w: 0.2,
        h: 0.2,
        color: "blue",
        status: false,
      },
      {
        class_uuid: "3",
        class_name: "Annotation 3",
        x: 0.5,
        y: 0.5,
        w: 0.2,
        h: 0.2,
        color: "green",
        status: true,
      },
    ],
  },
};
