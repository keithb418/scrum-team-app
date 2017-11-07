import React from "react";
import { Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Row>
        <Col xs={12}>
          <div className="page-header">
            <h1>Scrum Team</h1>
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
