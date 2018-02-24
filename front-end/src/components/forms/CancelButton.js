import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class CancelButton extends React.Component {
  render () {
    return (
      <Link to="/">
        <Button>Cancel</Button>
      </Link>
    );
  }
}

export default CancelButton;
