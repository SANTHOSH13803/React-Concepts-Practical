import DemoBlock from "../../../Preview/DemoBlock";
import appRaw from "../../../App?raw";
import reactAppRaw from "../../../ReactApp/App?raw";
import reactRoutes from "../../index?raw";
import mainRoutes from "../../../routes/index?raw";
const RouterTheory = () => {
  return (
    <DemoBlock
      title="React Router"
      preview={<span> Refer Left tab panel router component </span>}
      files={{
        "src/App.jsx": appRaw,
        "src/routes/index.jsx": mainRoutes,
        "src/ReactApp/index.jsx": reactRoutes,
        "src/ReactApp.jsx": reactAppRaw
      }}
    />
  );
};

export default RouterTheory;
