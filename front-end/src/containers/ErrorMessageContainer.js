import { connect } from "react-redux";

import ErrorMessage from "../components/ErrorMessage";

const mapStateToProps = (state, props) => {
  return {
    message: state.error && state.error.message
  };
};

const ErrorMessageContainer = connect(mapStateToProps)(ErrorMessage);

export default ErrorMessageContainer;