import { Container, Row, Col, Image } from "react-bootstrap"
import AppLayout from "../layout/AppLayout";


const Home = () => {

  const imageUri = process.env.PUBLIC_URL + '/images/';

  return (
    <AppLayout>
      <section>
      <Container fluid className="joker-cover">
        <Row className="g-0">
          <Col lg={5}>
            <Image fluid src={imageUri + "jokerCover.jpg"} />
            <p> <span> Far Long Ago... </span> </p>
          </Col>

          <Col lg={7}>
            <Container fluid>
              <Row className="g-0">
                <Col lg={12}><Image src={imageUri + "cafe-two-people.jpg"} /></Col>
              </Row>

              <Row className="g-0">
                <Col lg={8}><Image src={imageUri + "couple-laughing.jpg"} /></Col>
                <Col lg={4}><Image src={imageUri + "male-laughing.jpg"} /></Col>
              </Row>

              <Row className="g-0">
                <Col lg={12}><Image src={imageUri + "male-wrist-watch.jpg"} /></Col>
                <Col lg={6}><Image src={imageUri + "female-thinking.jpg"} className="flip-180" /></Col>

              </Row>

              <Row className="g-0">
                <Col>
                  <Image src={imageUri + "female-looking-out.jpg"} />
                </Col>
              </Row>
            </Container>            
          </Col>
        </Row>

        <Row>
          <Col>
            <Image src={imageUri + "female-profile.jpg"} />
          </Col>
        </Row>

        <Row className="bg-grey-dark">
          <Col
            xs={{span: 6, offset: 3}}>
            <Image src={imageUri + "umbrella-pink-standing.webp"} />
          </Col>
        </Row>
    

        <Row className="g-0">
          <Col>
            <Image src={imageUri + "motoryclce-standing.webp"} />
          </Col>
          <Col>
            <Image src={imageUri + "male-motorcycle-revving.webp"} />
          </Col>
          <Col>
            <Image src={imageUri + "male-motorcycle-standing.webp"} />
          </Col>
        </Row>


      </Container>
      </section>
    </AppLayout>
  );
}

export default Home;