import React from "react";
import { Alert } from "react-bootstrap";

const ErrorMessage = ({ message }) =>
  message
    ? <div><Alert bsStyle="warning"><strong>Error:</strong> {message}</Alert></div>
    : null;

export default ErrorMessage;