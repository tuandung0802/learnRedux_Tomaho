import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import A from "./componentA";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <A></A>
        </header>
      </div>
    </Provider>
  );
}

export default App;
