import fetchReducer from "../../front-end/src/reducers/fetchReducer";
let initialState;
beforeEach(() => {
  initialState = {
    isFetching: false,
    error: ''
  }
});

test('should set default state', () => {
    const state = fetchReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
});

test('should set team members', () => {
    const action = { type: 'FETCH_DATA' };
    const state = fetchReducer(initialState, action);
    expect(state).toEqual({
        isFetching: true,
        error: ''
    });
});

test('should set team members', () => {
    const action = { type: 'FETCH_DATA_SUCCESS' };
    const state = fetchReducer(initialState, action);
    expect(state).toEqual(initialState);
});

test('should set team members', () => {
    const action = { type: 'FETCH_DATA_ERROR' };
    const state = fetchReducer(initialState, action);
    expect(state).toEqual(initialState);
});