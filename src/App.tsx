import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./common/reducers";
import rootSaga from "./common/sagas";
import createSagaMiddleware from "redux-saga";
//COMPONENT IMPORTS
const App = () => {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    allReducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
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
