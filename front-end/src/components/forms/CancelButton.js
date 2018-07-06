import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CancelButton = () => (
  <Link to="/">
    <Button>Cancel</Button>
  </Link>
);


export default CancelButton;
