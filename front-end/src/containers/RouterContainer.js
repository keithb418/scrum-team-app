import { connect } from "react-redux";
import Router from "../router";

const mapStateToProps = (state) => {
  return {route: state.route};
};

const RouterContainer = connect(mapStateToProps)(Router);

export default RouterContainer;