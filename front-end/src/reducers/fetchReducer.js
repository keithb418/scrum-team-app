import * as types from '../actionTypes'

const initialState = {
    isFetching: false,
    error: ''
}
export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DATA: 
      return {
        ...state,
        isFetching: true
      }
    case types.FETCH_DATA_SUCCESS: 
      return {
        ...state,
        isFetching: false
      }
    case types.FETCH_DATA_ERROR: 
      return {
        ...state,
        isFetching: false
      }
    default: {
      return state;
    }
  }
};