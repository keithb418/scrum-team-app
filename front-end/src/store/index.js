import { createStore } from 'redux'
import reducers from '../reducers'

import middleware from './middleware'

export default function configureStore (initialState) {
  const route = window.location.pathname.replace(/\//g, "");

  return createStore(
    reducers,
    initialState,
    middleware,
    route
  );
}
