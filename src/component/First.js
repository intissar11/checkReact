import React from 'react'
import logo from "../logo.svg"
import { Button, Col, Form, Row } from 'react-bootstrap'

const First = () => {
    return (
        <div className="signUpSection">
            <div className="info">
                <h2>Welcome To React</h2>
            <img src={logo} className="App-logo" alt="logo" />
            </div>
         <Form className="info">
  <Form.Group as={Row} controlId="formPlaintextEmail">
    <Form.Label column sm="3">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control type="email" placeholder="email@example.com" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="3">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  <Button variant="outline-secondary" type="submit">
    Submit
  </Button>
</Form>   
        </div>
    )
}

export default First
