import "./App.css";
import { ContentLayout } from "@components/layout";
import { MrRobot } from "@features/MrRobot";

function App() {
  return (
    <ContentLayout>
      <div className="flex justify-end w-full">
        <MrRobot className="-mt-12 mr-0 lg:mr-24" />
      </div>
    </ContentLayout>
  );
}

export default App;
