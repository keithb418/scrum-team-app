import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import RouterContainer from "../containers/RouterContainer";
import LoadingContainer from "../containers/LoadingContainer";
import TeamsColumnsContainer from "../containers/TeamColumnsContainer";
import AddTeam from "./forms/AddTeam";
import Header from "./Header";

import { history } from "../store/middleware";

const App = ({ store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <LoadingContainer />
        <Switch>
          <Route exact path="/" component={TeamsColumnsContainer} />
          <Route exact path="/add-team" component={AddTeam} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;