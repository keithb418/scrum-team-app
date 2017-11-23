import { connect } from "react-redux";
import Router from "../components/Router";

const mapStateToProps = (state) => {
  const { route } = state;

  return { route };
};

const RouterContainer = connect(mapStateToProps)(Router);

export default RouterContainer;