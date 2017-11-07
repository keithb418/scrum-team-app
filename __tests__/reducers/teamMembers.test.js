import teamMember from "../../front-end/src/reducers/teamMembersReducer";

test("initial state should be an empty array", () => {
  const expected = [];
  const state = teamMember(undefined, {});
  expect(state).toEqual(expected);
});