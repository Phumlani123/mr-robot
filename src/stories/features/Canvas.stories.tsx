import { Canvas, CanvasProps } from "@/features/MrRobot/components/Canvas";

const meta = {
  title: "Features/Canvas",
  component: Canvas,
  parameters: {
    layout: "center",
  },
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
  },
};

export default meta;

const drawExample = (context: CanvasRenderingContext2D) => {
  context.fillStyle = "blue";
  context.fillRect(10, 10, 100, 100);
  context.strokeStyle = "red";
  context.strokeRect(10, 10, 100, 100);
};

const Template: any = (args: CanvasProps) => <Canvas {...args} />;

export const Example = Template.bind({});
Example.args = {
  draw: drawExample,
  width: 500,
  height: 500,
};
