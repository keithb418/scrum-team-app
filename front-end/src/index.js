import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { AppContainer } from "react-hot-loader"
import App from "./components/App";
import reducer from "./reducers";
import style from "./scss/index.scss";
import configureStore from "./store";


import { handleResize } from "./handleResize";
import { BrowserRouter } from "react-router-dom";

const store = configureStore(
  /*
    chrome redux dev tools
    download and install chrome plugin
    https://github.com/zalmoxisus/redux-devtools-extension
  */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

handleResize();


function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component store={store}/>
      </BrowserRouter>
    </AppContainer>,
    document.getElementById("root")
  );
}

render(App);

if (module.hot) {
  module.hot.accept("./components/App.js", () => {
    const NewApp = require("./components/App.js").default
    render(NewApp)
  })
}