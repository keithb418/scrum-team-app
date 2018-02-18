import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import LoadingContainer from "../containers/LoadingContainer";
import TeamsColumnsContainer from "../containers/TeamColumnsContainer";
import AddTeam from "./forms/AddTeam";
import EditTeam from "./forms/EditTeam";
import AddTeamMember from "./forms/AddTeamMember";
import EditTeamMember from "./forms/EditTeamMember";
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
          <Route exact path="/team/add" component={AddTeam} />
          <Route exact path="/team/:id/edit" component={EditTeam} />
          <Route exact path="/member/:id/add" component={AddTeamMember} />
          <Route exact path="/member/:id/edit" component={EditTeamMember} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;