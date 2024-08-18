import { StoryFn } from "@storybook/react";
import AnnotationProvider from "@/providers/AnnotationContextProvider";
import { MrRobot } from "@/features/MrRobot";

const meta = {
  title: "Features/MrRobot",
  component: MrRobot,
  parameters: {
    layout: "center",
  },
  decorators: [
    (Story: any) => (
      <AnnotationProvider>
        <Story />
      </AnnotationProvider>
    ),
  ],
};

export default meta;

const Template: StoryFn<any> = (args) => <MrRobot {...args} />;

export const Default = Template.bind({});
