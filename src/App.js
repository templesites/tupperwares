import React, { useState } from 'react';
import { Button, Card, Col, Container, Modal, Nav, Navbar, Row } from 'react-bootstrap';
import "@google/model-viewer/dist/model-viewer";
import chair1 from './assets/chair1.jpg'
import chair1d from './assets/chair1.glb'
import chair2 from './assets/chair2.jpg'
import chair2d from './assets/chair2.glb'
import chair3 from './assets/chair3.jpg'
import chair3d from './assets/chair3.glb'
import chair4 from './assets/chair4.jpg'
import chair4d from './assets/chair4.glb'
import chair5 from './assets/chair5.jpg'
import chair5d from './assets/chair5.glb'
import chair6 from './assets/chair6.jpg'
import chair6d from './assets/chair6.glb'
import './App.css';

const App = () => {

  const [show, setShow] = useState(false);
  const [Dmodel, setDModel] = useState(chair6d);

  const handleClose = () => setShow(false);
  const handleShow = (model) => {
    setShow(true);
    setDModel(model);
  }
  
  return (
    <div className="App">
      <Row xs={1} md={3} className="g-3">
        <Col>
          <Card border='white' style={{ width: '90%' }}>
            <a href='/tupperwares/'>
              <Card.Img variant="top" src={chair1} />
            </a>
            <Card.Body>
              <Card.Title>SLIM LUNCH CONTAINERS</Card.Title>
              <Card.Text>
              Great for everyday use or for entertaining. Available while supplies last.
              </Card.Text>
              <Button variant="primary" onClick={() => handleShow(chair1d)}>3D</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border='white' style={{ width: '90%' }}>
          <a href='/tupperwares/'>
            <Card.Img variant="top" src={chair2} />
            </a><Card.Body>
              <Card.Title>CLEAR IMPRESSIONS SERVING BOWL SET</Card.Title>
              <Card.Text>
              Great for everyday use or for entertaining. Available while supplies last.
              </Card.Text>
              <Button variant="primary" onClick={() => handleShow(chair2d)}>3D</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border='white' style={{ width: '90%' }}>
          <a href='/tupperwares/'>
            <Card.Img variant="top" src={chair3} />
            </a><Card.Body>
              <Card.Title>PITCHER AND CITRUS KEEPERS SET</Card.Title>
              <Card.Text>
                Great for everyday use or for entertaining. Available while supplies last.
              </Card.Text>
              <Button variant="primary" onClick={() => handleShow(chair3d)}>3D</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border='white' style={{ width: '90%' }}>
          <a href='/tupperwares/'>
            <Card.Img variant="top" src={chair4} />
            </a>
            <Card.Body>
              <Card.Title>COSTA DEL SOL 10 1/2-CUP/2.5 L BOWL</Card.Title>
              <Card.Text>
                Artwork not covered by Limited Lifetime Warranty.
                Great for everyday use or for entertaining.
              </Card.Text>
              <Button variant="primary" onClick={() => handleShow(chair4d)}>3D</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border='white' style={{ width: '90%' }}>
            <a href='/tupperwares/'>
              <Card.Img variant="top" src={chair5} />
            </a>
            <Card.Body>
              <Card.Title>SLIM LUNCH CONTAINERS</Card.Title>
              <Card.Text>
              Great for everyday use or for entertaining. Available while supplies last.
              </Card.Text>
              <Button variant="primary" onClick={() => handleShow(chair5d)}>3D</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border='white' style={{ width: '90%' }}>
          <a href='/tupperwares/'>
            <Card.Img variant="top" src={chair6} />
            </a><Card.Body>
              <Card.Title>CLEAR IMPRESSIONS SERVING BOWL SET</Card.Title>
              <Card.Text>
              Great for everyday use or for entertaining. Available while supplies last.
              </Card.Text>
              <Button variant="primary" onClick={() => handleShow(chair6d)}>3D</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={show} size='lg' onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Demo sample</Modal.Title>
        </Modal.Header>
        <Modal.Body>AR video
        <center>
        <model-viewer ar ar-modes="webxr scene-viewer quick-look" camera-controls src={Dmodel}   alt="A 3D model of an astronaut">
        </model-viewer>
        </center>
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
