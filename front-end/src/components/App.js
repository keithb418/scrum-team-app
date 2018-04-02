import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Loading from './Loading';
import DynamicImport from './DynamicImport';

const TeamsColumns = (props) => (
  <DynamicImport load={() => import('./TeamColumns')}>
    {(Component) => Component === null
      ? <Loading />
      : <Component {...props} />}
  </DynamicImport>
)

const AddTeam = (props) => (
  <DynamicImport load={() => import('./forms/AddTeam')}>
    {(Component) => Component === null
      ? <Loading />
      : <Component {...props} />}
  </DynamicImport>
)

const EditTeam = (props) => (
  <DynamicImport load={() => import('./forms/EditTeam')}>
    {(Component) => Component === null
      ? <Loading />
      : <Component {...props} />}
  </DynamicImport>
)

const AddTeamMember = (props) => (
  <DynamicImport load={() => import('./forms/AddTeamMember')}>
    {(Component) => Component === null
      ? <Loading />
      : <Component {...props} />}
  </DynamicImport>
)

const EditTeamMember = (props) => (
  <DynamicImport load={() => import('./forms/EditTeamMember')}>
    {(Component) => Component === null
      ? <Loading />
      : <Component {...props} />}
  </DynamicImport>
)

const MemberProfile = (props) => (
  <DynamicImport load={() => import('./MemberProfile')}>
    {(Component) => Component === null
      ? <Loading />
      : <Component {...props} />}
  </DynamicImport>
)

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={TeamsColumns} />
            <Route exact path="/team/add" component={AddTeam} />
            <Route exact path="/team/:id/edit" component={EditTeam} />
            <Route exact path="/team/:id/member/add" component={AddTeamMember} />
            <Route exact path="/member/:id" component={MemberProfile} />
            <Route exact path="/member/:id/edit" component={EditTeamMember} />
          </Switch>
        </div>
      </Router>
    );
  } 
}

export default App;

