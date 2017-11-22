import React from "react";
import { Provider } from "react-redux";

import RouterContainer from "../containers/RouterContainer";
import Header from "./Header";

const App = ({ store }) => (
  <Provider store={store}>
    <div>
      <Header />
      <RouterContainer />
    </div>
  </Provider>
);

export default App;