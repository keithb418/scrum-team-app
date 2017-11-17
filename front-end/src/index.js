import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import reducer from "./reducers";
import style from "./scss/index.scss";

// import teams from "./mocked-teams.json";
// import teamMembers from "./mocked-members.json";

const store = createStore(reducer, {
  teams: [],
  teamMembers: [],
  route: window.location.pathname.replace(/\//g, "")
},
// to make code compatible with chrome extension
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
