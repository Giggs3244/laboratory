import { Provider } from "react-redux";
import BloodTestView from "../../laboratory/view/BloodTest";
import { store } from "../data/appStore";

function AppProvider() {
  return (
    <Provider store={store}>
      <BloodTestView />
      <BloodTestView />
    </Provider>
  );
}

export default AppProvider;
