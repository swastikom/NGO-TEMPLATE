import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../Style.scss';
// import journey from '../../contentFiles/WhoWeAre.json';
import WhoWeAre from '../../contentFiles/WhoWeAre.json';
function Ourjourney() {
    
    
    return (
        <Container className="aboutContainer">
            <Row className='rowHeader'>
                <Col className='textAlignCenter'>
                    <h1>Our Journey</h1>
                </Col>
            </Row>
            <Row className='textJustify custPadd'>
                <Col>{WhoWeAre.journey}</Col>
            </Row>
            <Row className='textJustify custBackJoin custPadd'>
                <Col><h2>{WhoWeAre.join}</h2></Col>
            </Row>
        </Container>
      );
}



export default Ourjourney;