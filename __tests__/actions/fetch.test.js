import { fetchData, fetchDataSuccess, fetchDataError } from '../../front-end/src/actions/fetch';

test('fetch data action', () => {
    const action = fetchData()
    expect(action).toEqual({
        type: 'FETCH_DATA',
    });
});

test('fetch data action successfully', () => {
    const action = fetchDataSuccess()
    expect(action).toEqual({
        type: 'FETCH_DATA_SUCCESS',
    });
});

test('fetch data action failure', () => {
    const action = fetchDataError()
    expect(action).toEqual({
        type: 'FETCH_DATA_ERROR',
        error: "An error has occured"
    });
});