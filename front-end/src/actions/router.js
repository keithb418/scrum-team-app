import { CHANGE_ROUTE } from '../actionTypes';

export const navigate = (route) => {
  return {
    type: CHANGE_ROUTE,
    route: route
  };
};