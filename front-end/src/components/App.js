import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { connect } from 'react-redux'
import LoadingContainer from "../containers/LoadingContainer";
import TeamsColumns from "../components/TeamColumns";
import AddTeam from "./forms/AddTeam";
import EditTeam from "./forms/EditTeam";
import AddTeamMember from "./forms/AddTeamMember";
import EditTeamMember from "./forms/EditTeamMember";
import TeamMember from "./TeamMember";
import MemberProfile from "../components/MemberProfile";
import ErrorMessageContainer from "../containers/ErrorMessageContainer";
import { fetchInitialData } from '../actions/shared'
import Header from "./Header";


class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchInitialData())
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <LoadingContainer />
          <ErrorMessageContainer />
          <Switch>
            <Route exact path="/" component={TeamsColumns} />
            <Route exact path="/team/add" component={AddTeam} />
            <Route exact path="/team/:id/edit" component={EditTeam} />
            <Route exact path="/team/:id/member/add" component={AddTeamMember} />
            <Route exact path="/member/:id/edit" component={EditTeamMember} />
            <Route exact path="/member/:id" component={MemberProfile} />
          </Switch>
        </div>
      </Router>
    )
  } 
}

export default connect()(App);

