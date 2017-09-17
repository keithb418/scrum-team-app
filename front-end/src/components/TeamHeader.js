import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const TeamHeader = ({_id: id, teamName}) => {
    return(
        <Button className="team-header">
            <Row>
                <Col xs={2}>
                    <FontAwesome name="user-add"/>
                </Col>
                <Col xs={10} className="team-name">
                    <p>{teamName}</p>
                </Col>
            </Row>
        </Button>
    );
};

export default TeamHeader;