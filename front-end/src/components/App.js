import React from "react";
import TeamColumnsContainer from "../containers/TeamColumnsContainer";
import AddTeamMember from "./forms/AddTeamMember";
import Header from "./Header";

const App = () => (
  <div>
    <Header />
    <TeamColumnsContainer />
    <AddTeamMember />
  </div>
);

export default App;
