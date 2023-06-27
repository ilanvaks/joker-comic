import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap";
import AppLayout from "../layout/AppLayout";
import React, { useState } from 'react';

interface ImageWithModalProps {
  src: string;
}

const ImageWithModal: React.FC<ImageWithModalProps> = ({src}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Image fluid className="glowing-border" src={src} onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
         <Image fluid src={src} />
      </Modal>
    </>
  );
}

const Home: React.FC = () => {
  const imageUri = process.env.PUBLIC_URL + '/images/';

  return (
    <AppLayout>
      <section>
        <Container fluid className="joker-cover">
          <Row className="g-0">
            <Col lg={4} className="less-padding"><ImageWithModal src={imageUri + "jokerTrying.jpg"} /></Col>
            <Col lg={4} className="less-padding"><ImageWithModal src={imageUri + "JokerStandUP.jpg"} /></Col>
            <Col lg={4}><ImageWithModal src={imageUri + "emptyAud.jpg"} /></Col>
          </Row>

          <Row className="g-0">
            <Col lg={4}><ImageWithModal src={imageUri + "jokerMirror.jpg"} /></Col>
            <Col lg={4}><ImageWithModal src={imageUri + "jokerCover.jpg"} /></Col>
            <Col lg={4}><ImageWithModal src={imageUri + "Joker-Charge.jpg"} /></Col>
          </Row>

          <Row className="g-0">
            <Col lg={4}><ImageWithModal src={imageUri + "burnDownTown.jpg"} /></Col>
            <Col lg={4}><ImageWithModal src={imageUri + "BatmanLabWatch.jpg"} /></Col>
            <Col lg={4}><ImageWithModal src={imageUri + "BatmanLab2.jpg"} /></Col>
          </Row>

          <Row className="g-0">
            <Col lg={4}><ImageWithModal src={imageUri + "BatMobile.jpg"} /></Col>
            <Col lg={4}><ImageWithModal src={imageUri + "batmobile2.jpg"} /></Col>
            <Col lg={4}><ImageWithModal src={imageUri + "batmanFight.jpg"} /></Col>
          </Row>

          <Row className="g-0">
            <Col lg={4}><ImageWithModal src={imageUri + "jokerStreets.jpg"} /></Col>
            <Col lg={4}><ImageWithModal src={imageUri + "BatmanStandOFF.jpg"} /></Col>
            <Col lg={4}><ImageWithModal src={imageUri + "JokerStandOFF.jpg"} /></Col>
          </Row>

          <Row>
        <a href="https://www.youtube.com/watch?v=wcinzmfZeCc" target="_blank" rel="noopener noreferrer" className="no-underline">
          <p className="text-center" style={{ 
            color: 'red', 
            fontSize: '40px', 
            fontWeight: 'bold', 
            fontFamily: '"Comic Sans MS", cursive, sans-serif',
            textShadow: '2px 2px 4px #000000',
            textAlign: 'center'
          }}> 
            TO BE CONTINUED 
          </p>
        </a>

</Row>

        </Container>
      </section>
    </AppLayout>
  );
}

export default Home;
