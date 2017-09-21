import React from 'react';
import TeamMemberContainer from '../containers/TeamMemberContainer';
import Header from './Header';
import AddTeamColumn from './AddTeamColumn';

const App = () => (
  <div>
    <Header />
    <TeamMemberContainer id={1} />
    <TeamMemberContainer id={2} />
    <AddTeamColumn />
  </div>
);

export default App;
