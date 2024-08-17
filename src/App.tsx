import "./App.css";
import { ContentLayout } from "@/components/layout";
import { MrRobot } from "@/features/MrRobot";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <ContentLayout>
      <div className="flex justify-end w-full">
        <MrRobot />
      </div>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={10}
          outerSize={15}
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
    </ContentLayout>
  );
}

export default App;
