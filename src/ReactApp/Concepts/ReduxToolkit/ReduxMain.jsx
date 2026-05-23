import { Provider } from "react-redux";
import store from "./store";
import UserLogin from "./UserLogin";
import NthChild from "./NthChild";

const ReduxMain = () => {
  return (
    <Provider store={store}>
      <UserLogin />
      <NthChild />
    </Provider>
  );
};

export default ReduxMain;
