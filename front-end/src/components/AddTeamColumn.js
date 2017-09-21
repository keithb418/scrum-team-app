import React from 'react'
import { Button, Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const AddTeamColumn = () => {
  return (
    <Button>
      <FontAwesome
        name="plus-circle"
      />
      Add Team Column
    </Button>
  )
}

export default AddTeamColumn
