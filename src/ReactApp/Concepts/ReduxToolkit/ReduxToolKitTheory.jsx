import DemoBlock from "../../../Preview/DemoBlock";
import ReduxMain from "./ReduxMain";
import reduxMainCode from "./ReduxMain?raw";
import storeRaw from "./store?raw";
import sliceRaw from "./userSlice?raw";
import userLoginRaw from "./UserLogin?raw";
import nthChildRaw from "./NthChild?raw";

const ReduxToolKitTheory = () => {
  return (
    <>
      <DemoBlock
        title="Context API"
        preview={<ReduxMain />}
        files={{
          "src/store.js": storeRaw,
          "src/userSlice.js": sliceRaw,
          "src/ReduxMain.jsx": reduxMainCode,
          "src/UserLogin.jsx": userLoginRaw,
          "src/NthChild.jsx": nthChildRaw
        }}
      />
    </>
  );
};

export default ReduxToolKitTheory;
