import React, { useState } from 'react';
import { Button, Card, Col, Container, Modal, Nav, Navbar, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './App.css';

const App = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div className="App">
      <Row xs={1} md={4} className="g-4">
        <Col>
          <Card border='white' style={{ width: '90%' }}>
            <a href='/tupperwares/item'>
              <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0550/5912/0300/products/sllim-lunch-containers_800x.jpg?v=1640027481" />
            </a>
            <Card.Body>
              <Card.Title>SLIM LUNCH CONTAINERS</Card.Title>
              <Card.Text>
                Includes 2 1/2-cup/590 mL divided containers with two compartments and 4-oz./120 mL small liquid-tight containers to fit inside. Set of two.
              </Card.Text>
              <Button variant="primary" onClick={handleShow}>3D</Button>{' '}
              <Button variant="success" onClick={handleShow}>AR page</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border='white' style={{ width: '90%' }}>
          <a href='/tupperwares/item'>
            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0550/5912/0300/products/clear-impressions-bowl-set-2102-5011_1200x1200.jpg?v=1639687497" />
            </a><Card.Body>
              <Card.Title>CLEAR IMPRESSIONS SERVING BOWL SET</Card.Title>
              <Card.Text>
                Includes one 10 1/2-cup/2.5 L Large Bowl and one 18-cup/4.3 L Large Deep Bowl with seals.
              </Card.Text>
              <Button variant="primary" onClick={handleShow}>3D</Button>{' '}
              <Button variant="success" onClick={handleShow}>AR page</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border='white' style={{ width: '90%' }}>
          <a href='/tupperwares/item'>
            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0550/5912/0300/products/pitcher-and-citrus-keepers-set_800x.jpg?v=1639687049" />
            </a><Card.Body>
              <Card.Title>PITCHER AND CITRUS KEEPERS SET</Card.Title>
              <Card.Text>
                Save over 40% with this summer set! Includes set of three Citrus Keepers and Tupperware® Impressions 2-Qt./2 L Pitcher. Great for everyday use or for entertaining. Available while supplies last. Dishwasher safe. BPA-Free.
              </Card.Text>
              <Button variant="primary" onClick={handleShow}>3D</Button>{' '}
              <Button variant="success" onClick={handleShow}>AR page</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border='white' style={{ width: '90%' }}>
          <a href='/tupperwares/item'>
            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0550/5912/0300/products/costa-del-sol-10-cup_800x.jpg?v=1639592900" />
            </a>
            <Card.Body>
              <Card.Title>COSTA DEL SOL 10 1/2-CUP/2.5 L BOWL</Card.Title>
              <Card.Text>
                Serve in festive summer style. Includes 10 1/2-cup/2.5 L Bowl with liquid-tight seal. Available while supplies last. Artwork not covered by Limited Lifetime Warranty. BPA-Free.
              </Card.Text>
              <Button variant="primary" onClick={handleShow}>3D</Button>{' '}
              <Button variant="success" onClick={handleShow}>AR page</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={show} size='lg' onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Demo sample</Modal.Title>
        </Modal.Header>
        <Modal.Body>AR video
        <ReactPlayer
        url="https://www.youtube.com/watch?v=mwAgF-Ku4eM"
        controls={true}
      />
      <iframe id="view360Iframe" width="100%" scrolling="0" src="https://sketchfab.com/models/8d913bda48f84217902e6829982c494f/embed?ui_infos=0&amp;ui_watermark=0&amp;ui_help=0&amp;ui_settings=0&amp;ui_inspector=0&amp;ui_annotations=0&amp;ui_stop=0&amp;ui_vr=0&amp;preload=1&amp;autostart=1&amp;ui_hint=2&amp;autospin=0.2">

</iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
