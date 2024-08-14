import "./App.css";
import { ContentLayout } from "@components/layout";
import { Button, Heading } from "@components/ui";
import { MrRobot } from "@features/MrRobot";

function App() {
  return (
    <ContentLayout>
      <div className="flex justify-end w-full">
        <MrRobot />
      </div>
    </ContentLayout>
  );
}

export default App;
