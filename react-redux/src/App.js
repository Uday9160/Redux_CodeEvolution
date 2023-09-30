import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import { store } from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <CakeContainer />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
