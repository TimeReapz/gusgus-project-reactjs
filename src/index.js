import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "animate.css";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import postReducer from "./reducers/postReducer";

const store = createStore(postReducer);

const AppWithRouter = () => (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(<AppWithRouter />, document.getElementById("root"));
registerServiceWorker();
