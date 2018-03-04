const error = (state = {}, action) => {
  if (action.type.endsWith("_FAILURE")) {
    return action.error;
  }

  return state;
};

export default error;