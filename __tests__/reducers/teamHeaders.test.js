import teamHeader from "../../front-end/src/reducers/teamHeaderReducer";

test("initial state should be an empty array", () => {
  const expected = [];
  const state = teamHeader(undefined, {});
  expect(state).toEqual(expected);
});