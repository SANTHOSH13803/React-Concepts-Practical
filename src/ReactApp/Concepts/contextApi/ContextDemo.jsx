import DemoBlock from "../../../Preview/DemoBlock";
import ContextAPI from "./ContextAPI";
import contextCode from "./ContextAPI.jsx?raw";
import contextCodeMain from "./context.js?raw";
import dashboardraw from "./Dashboard.jsx?raw";
import sideBarRaw from "./SideBar.jsx?raw";
import ContextConcepts from "./ContextConcepts";

function ContextDemo() {
  return (
    <>
      <ContextConcepts />
      <DemoBlock
        title="Context API"
        preview={<ContextAPI />}
        files={{
          "src/context.js": contextCodeMain,
          "src/ContextAPI.jsx": contextCode,
          "src/Dashboard.jsx": dashboardraw,
          "src/SideBar.jsx": sideBarRaw
        }}
      />
    </>
  );
}

export default ContextDemo;
