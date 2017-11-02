import route from "../../front-end/src/reducers/routeReducer";

// testing intial state of routeReducer
test("initial state should be empty string", () => {
  const expected = "";  
  const state = route(undefined, {});
  expect(state).toEqual(expected);
});