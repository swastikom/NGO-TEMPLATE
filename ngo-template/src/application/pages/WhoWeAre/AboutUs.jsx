import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../Style.scss';
import WhoWeAre from '../../contentFiles/WhoWeAre.json'

function AboutUs() {
  return (
    <Container className="aboutContainer">
        <Row className='rowHeader'>
            <Col className='textAlignCenter'>
                <h1>About Us</h1>
            </Col>
        </Row>
        <Row className='textJustify custPadd'>
            <Col>{WhoWeAre.aboutUs}</Col>
        </Row>
        <Row className='textJustify custBackJoin custPadd'>
            <Col><h2>{WhoWeAre.join}</h2></Col>
        </Row>
    </Container>
  );
}

export default AboutUs;