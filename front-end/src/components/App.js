import React from 'react';
import TeamMemberContainer from '../containers/TeamMemberContainer';
import Header from './Header'

const App = () => (
  <div>
    <Header />
    <TeamMemberContainer id={1} />
    <TeamMemberContainer id={2} />
  </div>
);

export default App;
