import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import App from "./components/App";
import style from "./scss/index.scss";
import reducers from "./reducers/index";
import middleware from './middleware/index';
import { handleResize } from "./handleResize";

const store = createStore(
  reducers,
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

handleResize();

ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
