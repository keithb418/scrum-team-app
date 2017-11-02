import team from "../../front-end/src/reducers/teamsReducer";

// testing intial state of teamsReducer
test("initial state should be an empty array", () => {
  const expected = [];
  const state = team(undefined, {});
  expect(state).toEqual(expected);

});