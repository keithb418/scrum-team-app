import { combineReducers } from 'redux';
import teams from './teams';
import teamMembers from './teamMembers';

const reducers = combineReducers({
  teams,
  teamMembers
});

export default reducers;