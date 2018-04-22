import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import App from "./components/App";
import style from "./scss/index.scss";
import reducers from "./reducers/index";
import middleware from "./middleware/index";
import { handleResize } from "./handleResize";
import StateLoader from "./utils/stateLoader";

const store = createStore(
  reducers,
  StateLoader.loadState(),
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(_.throttle(() => {
  StateLoader.saveState(store.getState());
}, 1000));

handleResize();

ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
