import React from "react";
import { Provider } from "react-redux";

import RouterContainer from "../containers/RouterContainer";
import LoadingContainer from "../containers/LoadingContainer";
import Header from "./Header";

const App = ({ store }) => (
  <Provider store={store}>
    <div>
      <Header />
      <LoadingContainer />
      <RouterContainer />
    </div>
  </Provider>
);

export default App;