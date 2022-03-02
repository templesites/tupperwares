import React, { useState } from 'react';
import { Button, Card, Col, Container, Modal, Nav, Navbar, Row } from 'react-bootstrap';
import './App.css';

const Item = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div className="App">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card border='white'>
            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0550/5912/0300/products/sllim-lunch-containers_800x.jpg?v=1640027481" />
            
          </Card></Col>
          <Col>
          <Card border='white'>
             <Card.Body><br></br><br></br><br></br><br></br><br></br><br></br>
              <Card.Title>SLIM LUNCH CONTAINERS</Card.Title>
              <Card.Text>
                Includes 2 1/2-cup/590 mL divided containers with two compartments and 4-oz./120 mL small liquid-tight containers to fit inside. Set of two.
              </Card.Text>
              <Button variant="primary" onClick={handleShow}>3D</Button>{' '}
              <Button variant="success" onClick={handleShow}>AR page</Button>
            </Card.Body>
          </Card>
          </Col>
          </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Item;
