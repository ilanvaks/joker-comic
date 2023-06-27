import { Container, Row, Col, Image } from "react-bootstrap";
import AppLayout from "../layout/AppLayout";

const Home = () => {
  const imageUri = process.env.PUBLIC_URL + '/images/';

  return (
    <AppLayout>
      <section>
        <Container fluid className="joker-cover">
          <Row className="g-0">
            <Col lg={4}><Image fluid src={imageUri + "jokerTrying.jpg"} /></Col>
            <Col lg={4}><Image fluid src={imageUri + "JokerStandUp.jpg"} /></Col>
            <Col lg={4}><Image fluid src={imageUri + "emptyAud.jpg"} /></Col>
          </Row>
          
          <Row className="g-0">
            <Col lg={4}><Image fluid src={imageUri + "jokerMirror.jpg"} /></Col>
            <Col lg={4}><Image fluid src={imageUri + "JokerCover.jpg"} /></Col>
            <Col lg={4}><Image fluid src={imageUri + "Joker-Charge.jpg"} /></Col>
          </Row>

          <Row className="g-0">
            <Col lg={4}><Image fluid src={imageUri + "BurnDownTown.jpg"} /></Col>
            <Col lg={4}><Image fluid src={imageUri + "BatManLabWatch.jpg"} /></Col>
            <Col lg={4}><Image fluid src={imageUri + "BatManLab2.jpg"} /></Col>
          </Row>
          <Row className="g-0">
            <Col lg={4}><Image fluid src={imageUri + "BatMobile.jpg"} /></Col>
            <Col lg={4}><Image fluid src={imageUri + "BatMobile2.jpg"} /></Col>
            <Col lg={4}><Image fluid src={imageUri + "batmanFight.jpg"} /></Col>
          </Row>
          <Row className="g-0">
            <Col lg={4}><Image fluid src={imageUri + "jokerStreets.jpg"} /></Col>
            <Col lg={4}><Image fluid src={imageUri + "BatmanStandOFF.jpg"} /></Col>
            <Col lg={4}><Image fluid src={imageUri + "JokerStandOFF.jpg"} /></Col>
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
