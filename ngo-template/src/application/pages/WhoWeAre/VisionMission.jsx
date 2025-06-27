import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../Style.scss';
// import journey from '../../contentFiles/WhoWeAre.json';
import WhoWeAre from '../../contentFiles/WhoWeAre.json';
function VisionMission() {
    
    
    return (
        <Container className="aboutContainer">
            <Row className='rowHeader'>
                <Col className='textAlignCenter'>
                    <h1>Our Vision</h1>
                </Col>
            </Row>
            <Row className='textJustify custPadd'>
                <Col>{WhoWeAre.vision}</Col>
            </Row>
            <Row className='rowHeader'>
                <Col className='textAlignCenter'>
                    <h1>Our Mission</h1>
                </Col>
            </Row>
            <Row className='textJustify custPadd'>
                <Col>{WhoWeAre.mission}</Col>
            </Row>
            <Row className='textJustify custBackJoin custPadd'>
                <Col><h2>{WhoWeAre.join}</h2></Col>
            </Row>
        </Container>
      );
}



export default VisionMission;