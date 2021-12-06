import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./common/reducers";
//COMPONENT IMPORTS	
const App = () => {
  const store = createStore(allReducers);
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" />
</Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
