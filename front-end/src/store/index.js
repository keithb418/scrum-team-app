import { createStore } from "redux";
import reducers from "../reducers";

import middleware from "./middleware";

export default function configureStore (initialState) {
  return createStore(
    reducers,
    initialState,
    middleware
  );
}
